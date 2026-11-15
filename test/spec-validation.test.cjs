'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const { readFileSync } = require('node:fs');
const { join } = require('node:path');
const { spawnSync } = require('node:child_process');
const { validateMarkdown } = require('../scripts/validate-spec.cjs');

// Synthetic, complete fixture: no duplication of the business rubric's IDs/weights.
function fixture() {
  const anchors = '| Điểm | Mốc |\n|---:|---|\n' + [0, 25, 50, 75, 100].map(n => `| ${n} | Evidence at ${n} |`).join('\n');
  return `# Example\nChấm trên thang **/100**.\nMỗi tiêu chí chấm theo mốc 0 / 25 / 50 / 75 / 100.\n\n## Bảng 2 tiêu chí\n\n| ID | Tiêu chí | W |\n|---|---|---:|\n| X1 | First | 40 |\n| X2 | Second | 60 |\n\n## X1. First (40)\n\n${anchors}\n\n## X2. Second (60)\n\n${anchors}\n`;
}
function rejects(text, code) {
  assert.ok(validateMarkdown(text).errors.some(issue => issue.code === code), `Expected ${code}`);
}
test('accepts a complete valid spec and CRLF input', () => {
  assert.deepEqual(validateMarkdown(fixture()).errors, []);
  assert.deepEqual(validateMarkdown(fixture().replace(/\n/g, '\r\n')).errors, []);
});
test('rejects duplicate IDs even when the total stays valid', () => rejects(fixture().replace('| X2 |', '| X1 |'), 'duplicate-id'));
test('checks weights against the declared total', () => {
  rejects(fixture().replace('| 60 |', '| 59 |'), 'weight-total');
  const changed = fixture().replace('**/100**', '**/200**').replace('| 40 |', '| 80 |').replace('| 60 |', '| 120 |').replace('First (40)', 'First (80)').replace('Second (60)', 'Second (120)');
  assert.deepEqual(validateMarkdown(changed).errors, []);
});
for (const weight of ['0', '-1', 'NaN', 'Infinity', 'invalid', '']) {
  test(`rejects invalid weight ${weight || '(empty)'}`, () => rejects(fixture().replace('| 40 |', `| ${weight} |`), 'weight'));
}
test('rejects missing declarations and tables', () => {
  rejects(fixture().replace('thang **/100**', 'thang'), 'total');
  rejects(fixture().replace('## Bảng 2 tiêu chí', '## Criteria'), 'count');
  rejects(fixture().replace('Bảng 2', 'Bảng 3'), 'count');
  rejects(fixture().replace('| ID | Tiêu chí | W |', '| Unknown |'), 'table');
  rejects(fixture() + '\n| ID | Tiêu chí | W |\n', 'table');
});
test('rejects malformed criterion rows', () => rejects(fixture().replace('| X1 | First | 40 |', '| X1 | First |'), 'row'));
test('rejects invalid or missing declared anchors', () => {
  rejects(fixture().replace('mốc 0 / 25', 'mốc 0 / 20'), 'anchor-declaration');
  rejects(fixture().replace('Mỗi tiêu chí chấm theo mốc', 'Anchors'), 'anchor-declaration');
});
test('rejects invalid, duplicated, empty and missing anchor definitions', () => {
  rejects(fixture().replace('| 25 | Evidence at 25 |', '| 30 | Evidence at 25 |'), 'anchor');
  rejects(fixture().replace('| 25 | Evidence at 25 |', '| 0 | Evidence at 25 |'), 'duplicate-anchor');
  rejects(fixture().replace('| 25 | Evidence at 25 |', '| 25 | |'), 'anchor');
  rejects(fixture().replace('| 25 | Evidence at 25 |\n', ''), 'missing-anchors');
  rejects(fixture().replace('## X1. First (40)', '## First'), 'missing-anchors');
});
test('rejects unknown and duplicated sections and inconsistent heading weights', () => {
  rejects(fixture().replace('## X1.', '## X3.'), 'unknown-section');
  rejects(fixture().replace('## X2.', '## X1.'), 'duplicate-section');
  rejects(fixture().replace('First (40)', 'First (41)'), 'section-weight');
});
test('handles empty input without silently passing', () => assert.ok(validateMarkdown('').errors.length > 0));
test('current spec totals 100 and exposes all twelve unresolved inherited anchor sets', () => {
  const markdown = readFileSync(join(__dirname, '../specs/business-idea-scoring.md'), 'utf8');
  const result = validateMarkdown(markdown);
  assert.equal(result.criteria.length, 15);
  assert.equal(result.total, 100);
  assert.equal(result.sum, 100);
  assert.equal(new Set(result.criteria.map(c => c.id)).size, 15);
  assert.equal(result.errors.length, 12);
  assert.ok(result.errors.every(issue => issue.code === 'missing-anchors'));
  assert.deepEqual(result.criteria.filter(c => c.anchors.length === 5).map(c => c.id).sort(), ['F1', 'F2', 'F3']);
  // Appending explicit synthetic definitions proves missing anchors are detected,
  // rather than waived for the current document. Never write this fixture to disk.
  const completed = markdown + result.criteria.filter(c => !c.anchors.length).map(c => `\n## ${c.id}. Example (${c.weight})\n\n| Điểm | Mốc |\n|---:|---|\n` + [0, 25, 50, 75, 100].map(n => `| ${n} | Example |`).join('\n')).join('\n');
  assert.deepEqual(validateMarkdown(completed).errors, []);
});
test('CLI runs offline, reports the canonical relative path and exits nonzero for incomplete anchors', () => {
  const result = spawnSync(process.execPath, [join(__dirname, '../scripts/validate-spec.cjs')], { encoding: 'utf8' });
  assert.equal(result.status, 1);
  assert.match(result.stdout, /15 criteria; weights 100\/100; 12 validation error\(s\)/);
  assert.match(result.stderr, /specs\/business-idea-scoring\.md:17: C3: missing anchor definitions/);
  assert.equal(result.stderr.trim().split('\n').length, 12);
});
