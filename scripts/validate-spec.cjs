#!/usr/bin/env node
'use strict';

// Offline validation of the canonical Markdown, not a second rubric definition.
const { readFileSync } = require('node:fs');
const { join } = require('node:path');
const SPEC_PATH = 'specs/business-idea-scoring.md';
const VALID_ANCHORS = [0, 25, 50, 75, 100];
const ID = /^[A-Z]+\d+$/;
const cells = line => line.trim().slice(1, -1).split('|').map(s => s.trim());
const separator = line => /^\|[\s:|-]+\|$/.test(line.trim());

function validateMarkdown(markdown) {
  const lines = markdown.replace(/\r\n/g, '\n').split('\n');
  const errors = [];
  const error = (code, line, message) => errors.push({ code, line, message });
  const totalLine = lines.findIndex(line => /thang\s+\*\*\/\d+\*\*/u.test(line));
  const total = totalLine < 0 ? NaN : Number(lines[totalLine].match(/\*\*\/(\d+)\*\*/)[1]);
  if (!Number.isFinite(total) || total <= 0) error('total', 1, 'Missing positive declared total (thang **/N**).');
  const countLine = lines.findIndex(line => /^## Bảng \d+ tiêu chí\s*$/u.test(line));
  const count = countLine < 0 ? NaN : Number(lines[countLine].match(/\d+/)[0]);
  if (!Number.isFinite(count) || count <= 0) error('count', 1, 'Missing positive declared criterion count.');
  const declarationLine = lines.findIndex(line => /Mỗi tiêu chí chấm theo mốc/u.test(line));
  const declaration = declarationLine < 0 ? '' : lines[declarationLine].split('mốc')[1].trim();
  if (declaration.replace(/\.$/, '').split('/').map(s => s.trim()).join('/') !== VALID_ANCHORS.join('/')) {
    error('anchor-declaration', Math.max(1, declarationLine + 1), 'Declared anchors must be 0 / 25 / 50 / 75 / 100.');
  }

  const tables = lines.flatMap((line, i) => line.trim() === '| ID | Tiêu chí | W |' ? [i] : []);
  const criteria = [];
  if (tables.length !== 1) error('table', 1, 'Expected exactly one criterion table.');
  if (tables.length === 1) {
    const start = tables[0];
    if (!separator(lines[start + 1] || '')) error('table', start + 2, 'Missing table separator.');
    for (let i = start + 2; i < lines.length && lines[i].trim().startsWith('|'); i++) {
      const row = cells(lines[i]);
      if (!lines[i].trim().endsWith('|') || row.length !== 3 || !ID.test(row[0]) || !row[1]) {
        error('row', i + 1, 'Malformed criterion row.');
        continue;
      }
      const weight = /^\d+(?:\.\d+)?$/.test(row[2]) ? Number(row[2]) : NaN;
      if (!Number.isFinite(weight) || weight <= 0) error('weight', i + 1, `${row[0]}: weight must be positive and finite.`);
      criteria.push({ id: row[0], weight, line: i + 1, anchors: [] });
    }
  }
  if (criteria.length !== count) error('count', Math.max(1, countLine + 1), `Declared ${count} criteria; found ${criteria.length}.`);
  const byId = new Map();
  for (const criterion of criteria) {
    if (byId.has(criterion.id)) error('duplicate-id', criterion.line, `${criterion.id}: duplicate criterion ID.`);
    byId.set(criterion.id, criterion);
  }
  const sum = criteria.reduce((value, criterion) => value + criterion.weight, 0);
  if (!Number.isFinite(sum) || Math.abs(sum - total) > 1e-9) error('weight-total', Math.max(1, totalLine + 1), `Weights sum to ${sum}; declared total is ${total}.`);

  const sections = new Set();
  let current = null;
  let inAnchorTable = false;
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.startsWith('## ')) {
      current = null;
      inAnchorTable = false;
      const heading = line.match(/^## ([A-Z]+\d+)\. .+? \((\d+(?:\.\d+)?)\)(?:\s|$)/);
      if (!heading) continue;
      const [, id, weight] = heading;
      if (sections.has(id)) error('duplicate-section', i + 1, `${id}: duplicate anchor section.`);
      sections.add(id);
      current = byId.get(id);
      if (!current) error('unknown-section', i + 1, `${id}: anchor section has no criterion.`);
      else if (Number(weight) !== current.weight) error('section-weight', i + 1, `${id}: heading weight differs from table.`);
      continue;
    }
    if (!current) continue;
    if (line.trim() === '| Điểm | Mốc |') { inAnchorTable = true; continue; }
    if (!inAnchorTable) continue;
    if (!line.trim().startsWith('|')) { inAnchorTable = false; continue; }
    if (separator(line)) continue;
    const row = cells(line);
    const score = /^\d+$/.test(row[0]) ? Number(row[0]) : NaN;
    if (!line.trim().endsWith('|') || row.length !== 2 || !VALID_ANCHORS.includes(score) || !row[1]) {
      error('anchor', i + 1, `${current.id}: anchor must have a valid score and nonempty description.`);
    }
    if (current.anchors.includes(score)) error('duplicate-anchor', i + 1, `${current.id}: duplicate anchor ${score}.`);
    current.anchors.push(score);
  }
  for (const criterion of criteria) {
    const missing = VALID_ANCHORS.filter(score => !criterion.anchors.includes(score));
    if (missing.length) error('missing-anchors', criterion.line, `${criterion.id}: missing anchor definitions ${missing.join(', ')}.`);
  }
  return { total, sum, criteria, errors };
}

if (require.main === module) {
  try {
    const result = validateMarkdown(readFileSync(join(__dirname, '..', SPEC_PATH), 'utf8'));
    for (const issue of result.errors) console.error(`${SPEC_PATH}:${issue.line}: ${issue.message}`);
    console.log(`${result.criteria.length} criteria; weights ${result.sum}/${result.total}; ${result.errors.length} validation error(s).`);
    process.exitCode = result.errors.length ? 1 : 0;
  } catch {
    console.error(`${SPEC_PATH}: unable to read or validate canonical spec.`);
    process.exitCode = 1;
  }
}

module.exports = { validateMarkdown };
