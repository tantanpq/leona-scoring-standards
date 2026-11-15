'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const { readFileSync } = require('node:fs');
const { join } = require('node:path');
const { spawnSync } = require('node:child_process');
const { validateMarkdown, validateBusinessMarkdown } = require('../scripts/validate-spec.cjs');

const businessMarkdown = () => readFileSync(join(__dirname, '../specs/business-idea-scoring.md'), 'utf8');
const approvedWeights = [7, 12, 7, 4, 7, 8, 10, 7, 6, 8, 4, 5, 2, 7, 6];
const approvedIds = Array.from({ length: 14 }, (_, i) => `C${i + 1}`).concat('F3');

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
test('current spec totals 100 and defines all five anchors for every approved criterion', () => {
  const markdown = businessMarkdown();
  const result = validateBusinessMarkdown(markdown);
  assert.equal(result.criteria.length, 15);
  assert.equal(result.total, 100);
  assert.equal(result.sum, 100);
  assert.equal(new Set(result.criteria.map(c => c.id)).size, 15);
  assert.deepEqual(result.criteria.map(c => c.id), approvedIds);
  assert.deepEqual(result.criteria.map(c => c.weight), approvedWeights);
  assert.deepEqual(result.errors, []);
  for (const criterion of result.criteria) {
    assert.deepEqual(criterion.anchors, [0, 25, 50, 75, 100], criterion.id);
  }
});
test('business validator rejects legacy IDs and reordered canonical IDs', () => {
  const markdown = businessMarkdown();
  for (const changed of [
    markdown.replace(/\bC1\b/g, 'F2').replace(/\bC2\b/g, 'F1'),
    markdown.replace(/\bC1\b/g, 'TEMP').replace(/\bC2\b/g, 'C1').replace(/\bTEMP\b/g, 'C2')
  ]) {
    assert.ok(validateBusinessMarkdown(changed).errors.some(issue => issue.code === 'canonical-ids'));
  }
});
test('business validator rejects swapped C1/C2 meanings and weights even with a valid total', () => {
  const markdown = businessMarkdown();
  for (const changed of [
    markdown.replace(/Why Now/g, 'TEMP').replace(/Market Frame/g, 'Why Now').replace(/TEMP/g, 'Market Frame'),
    markdown.replace(/(\| C1 \|[^\n]+\|) 7 \|/, '$1 12 |').replace(/(\| C2 \|[^\n]+\|) 12 \|/, '$1 7 |')
  ]) {
    const result = validateBusinessMarkdown(changed);
    assert.equal(result.sum, 100);
    assert.ok(result.errors.some(issue => issue.code === 'canonical-mapping'));
  }
});
test('copy-paste prompt uses the approved ordered IDs, weights and C1/C2 meanings', () => {
  const prompt = readFileSync(join(__dirname, '../prompts/cham-y-tuong.md'), 'utf8');
  const criteria = [...prompt.matchAll(/^\| ([A-Z]+\d+)\. ([^|]+)\| (\d+) \|/gm)];
  assert.deepEqual(criteria.map(c => c[1]), approvedIds);
  assert.deepEqual(criteria.map(c => Number(c[3])), approvedWeights);
  assert.equal(criteria[0][2].trim(), 'Why Now');
  assert.equal(criteria[1][2].trim(), 'Market Frame');
  assert.match(businessMarkdown(), /^## C1\. Why Now \(7\)$/m);
  assert.match(businessMarkdown(), /^## C2\. Market Frame \(12\)$/m);
});
test('summary delegates anchors to the spec and applies the C14 strict evidence rule', () => {
  const prompt = readFileSync(join(__dirname, '../prompts/cham-y-tuong.md'), 'utf8');
  assert.match(prompt, /\]\(\.\.\/specs\/business-idea-scoring\.md\)/);
  assert.doesNotMatch(prompt, /OPEN OWNER DECISION/);
  const summary = prompt.split('\n').find(line => line.startsWith('| C14.')) || '';
  assert.match(summary, /chỉ có giả thuyết.*tối đa 50/);
  assert.match(summary, /75.*bằng chứng.*test riêng.*từng kênh/);
});

test('C14 ownership caps hypotheses at 50 and requires actual separate channel tests for 75', () => {
  const c14 = businessMarkdown().split('## C14.')[1]?.split('\n## F3.')[0] || '';
  const ownership = c14.split('| Điểm |')[0];
  assert.match(c14, /Owner decision 2026-11-14: strict evidence rule/);
  assert.doesNotMatch(businessMarkdown(), /OPEN OWNER DECISION|còn chờ owner quyết định/);
  assert.match(ownership, /Chỉ có giả thuyết.*tối đa 50/);
  assert.match(ownership, /75.*bằng chứng thực tế.*test riêng biệt đã chạy trên từng kênh/);
  assert.match(ownership, /Bet đang mở.*0 điểm cộng thêm/);
});

test('C14 anchors enforce the hypothesis cap and retain cohort reproducibility and resilience at 100', () => {
  const c14 = businessMarkdown().split('## C14.')[1]?.split('\n## F3.')[0] || '';
  const anchors = new Map([...c14.matchAll(/^\| (\d+) \| (.+) \|\r?$/gm)].map(match => [Number(match[1]), match[2]]));
  assert.match(anchors.get(50), /chỉ có giả thuyết.*tối đa 50/);
  assert.match(anchors.get(75), /Bằng chứng thực tế.*test riêng biệt đã chạy trên từng kênh.*quy trình tái lập được/);
  assert.match(anchors.get(100), /Đáp ứng mốc 75/);
  assert.match(anchors.get(100), /tái lập được qua các cohort liên quan/);
  assert.match(anchors.get(100), /chống chịu.*rủi ro tập trung hoặc thay đổi quyền tiếp cận/);
});

test('parity report resolves C14 by owner decision while leaving D5 pending', () => {
  const report = readFileSync(join(__dirname, '../docs/PARITY_REPORT.md'), 'utf8');
  assert.match(report, /^\| C14 conflict[^\n]+\*\*RESOLVED\*\*[^\n]+owner decision 2026-11-14/m);
  assert.match(report, /^\| D5 \| \*\*NEEDS_DECISION\*\*/m);
  assert.match(report, /separate PRs in `business-idea-scorer` and `free-ai-tools-hub`/);
});

test('CLI runs offline and passes the complete canonical spec without diagnostics', () => {
  const result = spawnSync(process.execPath, [join(__dirname, '../scripts/validate-spec.cjs')], { encoding: 'utf8' });
  assert.equal(result.status, 0);
  assert.match(result.stdout, /15 criteria; weights 100\/100; 0 validation error\(s\)/);
  assert.equal(result.stderr, '');
});
