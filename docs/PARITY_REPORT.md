# Business rubric parity report

Status: **ID_ALIGNED**. Verified on 2026-11-14. The approved ID/weight
contract is aligned; anchor and evidence-contract parity is still incomplete.
No app code or scoring anchors were changed.

## Sources and owner decision

- Round-2 starting HEAD: `33b0c41e7d86c2648e86c1d10533a3550b27a6ed`.
  `README.md:19` identifies the business spec and copy-paste prompt.
- The coordinator's delegated owner decision selects the implemented,
  approved V4-revised contract: C1-C14, then F3. Why Now is C1 / 7;
  Market Frame is C2 / 12. This replaces the round-1 unresolved ID choice.
- Public scorer source was re-read over unauthenticated HTTPS at pinned
  commit `1925d2489b2e54cc14411cf598d68e4762973fc1`:
  [prompt-builder.js](https://github.com/tantanpq/business-idea-scorer/blob/1925d2489b2e54cc14411cf598d68e4762973fc1/prompt-builder.js),
  [scoring-math.js](https://github.com/tantanpq/business-idea-scorer/blob/1925d2489b2e54cc14411cf598d68e4762973fc1/scoring-math.js).
  Their line-1 headers identify V4-revised as approved on 2026-10-10.
  All implementation references below mean these pinned public files.
  Source review does not execute the scorer or assert live deployment parity.
- The private hub's `src/tools/business-idea/spec.ts` is not in this
  checkout. Its IDs/weights are accepted from the owner decision, but its
  contents and line numbers remain independently **NOT VERIFIED**.
  No private-source parity claims or invented citations are made.

## Every criterion, aligned by meaning

The spec and copy-paste prompt now follow `scoring-math.js:20` order.
The complete implementation weight map is at `scoring-math.js:19`.

| Meaning | Canonical ID / weight | Spec file:line | Copy-paste prompt file:line | Public prompt file:line | ID/weight finding |
|---|---|---|---|---|---|
| Why Now | C1 / 7 | `specs/business-idea-scoring.md:15` | `prompts/cham-y-tuong.md:12` | `prompt-builder.js:19` | Resolved (formerly F2) |
| Market Frame | C2 / 12 | `specs/business-idea-scoring.md:16` | `prompts/cham-y-tuong.md:13` | `prompt-builder.js:28` | Resolved (formerly F1) |
| Industry structure | C3 / 7 | `specs/business-idea-scoring.md:17` | `prompts/cham-y-tuong.md:14` | `prompt-builder.js:37` | Match |
| Defensibility | C4 / 4 | `specs/business-idea-scoring.md:18` | `prompts/cham-y-tuong.md:15` | `prompt-builder.js:46` | Match |
| Business model | C5 / 7 | `specs/business-idea-scoring.md:19` | `prompts/cham-y-tuong.md:16` | `prompt-builder.js:55` | Match |
| Unit economics | C6 / 8 | `specs/business-idea-scoring.md:20` | `prompts/cham-y-tuong.md:17` | `prompt-builder.js:64` | Match |
| Founder-market fit | C7 / 10 | `specs/business-idea-scoring.md:21` | `prompts/cham-y-tuong.md:18` | `prompt-builder.js:73` | Match |
| Scale and time to revenue | C8 / 7 | `specs/business-idea-scoring.md:22` | `prompts/cham-y-tuong.md:19` | `prompt-builder.js:82` | Match |
| Risk register | C9 / 6 | `specs/business-idea-scoring.md:23` | `prompts/cham-y-tuong.md:20` | `prompt-builder.js:91` | Match |
| Market demand | C10 / 8 | `specs/business-idea-scoring.md:24` | `prompts/cham-y-tuong.md:21` | `prompt-builder.js:100` | Match |
| Founder traction | C11 / 4 | `specs/business-idea-scoring.md:25` | `prompts/cham-y-tuong.md:22` | `prompt-builder.js:109` | Match |
| Capital fit | C12 / 5 | `specs/business-idea-scoring.md:26` | `prompts/cham-y-tuong.md:23` | `prompt-builder.js:118` | Match |
| M&A potential | C13 / 2 | `specs/business-idea-scoring.md:27` | `prompts/cham-y-tuong.md:24` | `prompt-builder.js:127` | Match |
| Go-to-market | C14 / 7 | `specs/business-idea-scoring.md:28` | `prompts/cham-y-tuong.md:25` | `prompt-builder.js:136` | Match |
| Category forecast | F3 / 6 | `specs/business-idea-scoring.md:29` | `prompts/cham-y-tuong.md:26` | `prompt-builder.js:145` | Match |

Both documents and the pinned implementation have the same 15 unique IDs,
weights and order; total weight is 100. There are no remaining ID/weight
mismatches. Previously, the exact-ID lookup at `scoring-math.js:26-38`
would treat F1/F2 responses as absent C2/C1 and impute them at 50 (a
source-based inference). The documentation now emits the approved IDs.

## Remaining differences

**Inventory provenance:** the round-1 report at the starting HEAD contains
two NEEDS_DECISION criterion rows (lines 38-39), plus a grouped inherited-anchor
issue (lines 77-83, 117-118); it does not contain five distinct difference
rows. The two ID rows are resolved. The five groups below inventory the
remaining material differences verified in this round, including that anchor
issue. They are not claimed to reproduce an unavailable historical five-row
list. All five remain **NEEDS_DECISION** for a subsequent definitions task.

| # | Difference and local file:line | Implemented side file:line | Recommended resolution | Reason |
|---|---|---|---|---|
| D1 | C3-C14 have summaries but no five-score anchor definitions: `specs/business-idea-scoring.md:58-71`; `prompts/cham-y-tuong.md:14-25` likewise only summarizes. C9 does not explicitly select the worst material residual; C14 mentions a testable hypothesis without a score rule. | Complete anchor sets at `prompt-builder.js:39-44,48-53,57-62,66-71,75-80,84-89,93-98,102-107,111-116,120-125,129-134,138-143`. C9 ownership selects the worst material residual at `prompt-builder.js:92`. C14 ownership allows a testable hypothesis at 75 (`prompt-builder.js:137`), while anchor 75 requires separate channel tests (`prompt-builder.js:142`) and open bets add zero points (`prompt-builder.js:215`). | In a separately approved definitions update, translate the implemented anchors and ownership rules into the spec, with a reference from the copy-paste prompt. Have the owner reconcile the C14 hypothesis/test-evidence conflict before importing that rule. Any change to app code requires a separate owner decision. | The approved implementation supplies the missing definitions; no V3 anchor source exists locally. Copying its internally ambiguous C14 rule without a decision would silently choose scoring behavior. Twelve validation errors remain until resolved. |
| D2 | C1's checklist mentions incumbent blind spots, but anchor 100 does not require naming one; anchor 75 does not spell out the implementation's example timing combinations: `specs/business-idea-scoring.md:33,40-41`. The prompt summarizes timing only at `prompts/cham-y-tuong.md:12`. | `prompt-builder.js:20,25-26` adds explicit timing examples and a named incumbent blind spot at 100. | Prefer the implemented requirements in a separately approved Vietnamese anchor clarification; leave today's anchors unchanged. | A checklist item and a condition for the highest score are different obligations. The implemented rubric is the approved baseline; no evidence makes the shorter spec clearly more correct. |
| D3 | C2 anchor 25 names failure of the derived-bar test; the implemented 25 instead explicitly caps adjacency-fallacy sizing and unseparated expansion pools. The spec's 50/100 omit some evidence and tracking qualifiers: `specs/business-idea-scoring.md:46-48,53-56`; summary at `prompts/cham-y-tuong.md:13`. | `prompt-builder.js:29,32-35` specifies dated counts, an untriggered MISSING-tracked expansion bet at 50, and non-buyers paying for workarounds as early evidence at 100. `prompt-builder.js:211` forbids expansion bets inflating C2/C10 until triggered. | Prefer the implemented anchor wording and expansion-bet discipline in a separate definitions update; owner should clarify how the rule at line 211 interacts with early expansion evidence at 100. App-code changes, if chosen, need a separate owner decision. | These qualifiers can change the selected anchor even though the criterion meaning and weight match. The derived-bar threshold itself already agrees; no numerical threshold change is needed. |
| D4 | F3 anchor 50 lacks the explicit MISSING-tracked alternative, and 100 lacks forecast audit history when previously forecasted: `specs/business-idea-scoring.md:81,83`; summary at `prompts/cham-y-tuong.md:26`. | `prompt-builder.js:150,152` includes both qualifiers; `prompt-builder.js:200-201` distinguishes unresearched/imputed evidence from observed evidence. | Prefer the implemented qualifiers in a separately approved F3 clarification, retaining the provisional weight 6 and existing five-score scale. | Equal numeric 50 values can carry different evidence status; the prior-forecast audit obligation is absent from the spec. This round authorizes IDs, not new anchor conditions. |
| D5 | The standalone docs specify a weighted score, missing=50, one owner per fact, and two qualitative sections, but omit the app's evidence/confidence and structured-output contract: `specs/business-idea-scoring.md:6-7,85-90`, `prompts/cham-y-tuong.md:28-34`. | Evidence q/a scales: `prompt-builder.js:156-165,204-208`; highest fully supported anchor, adverse-evidence-only low scores, explicit C10/C11 separation and category-expansion rules: `prompt-builder.js:198-202,211`; blockers, validation priorities, human routing and strict JSON with linked bets: `prompt-builder.js:212-241`. Coverage, quality, applicability, confidence and missing-weight bounds: `scoring-math.js:73-95`. | Document the implemented evidence rules and distinguish weighted score from confidence/bounds in a separate owner-approved docs task. Decide explicitly whether the general copy-paste prompt should adopt the app's JSON schema or retain a simpler output. Keep missing=50 and weights unchanged. Any app behavior change is a separate owner decision. | The app needs provenance and structured fields to compute/display these outputs. Their omission prevents full behavioral parity, but adopting the entire app interface is a scope/product choice, not an ID rename. The implemented evidence model is the recommended baseline. |

For D1, the individual local summary -> implemented anchor mappings are:
C3 `specs/business-idea-scoring.md:60` -> `prompt-builder.js:40-44`;
C4 `:61` -> `:49-53`; C5 `:62` -> `:58-62`;
C6 `:63` -> `:67-71`; C7 `:64` -> `:76-80`;
C8 `:65` -> `:85-89`; C9 `:66` -> `:94-98`;
C10 `:67` -> `:103-107`; C11 `:68` -> `:112-116`;
C12 `:69` -> `:121-125`; C13 `:70` -> `:130-134`;
C14 `:71` -> `:139-143`. Abbreviated line references use the same two files.

## Offline validation and regression evidence

Node.js v24.19.0, built-in modules only. No package installation is required.
There is no package manifest, build script, lint script, or CI command in
this checkout. The repository's runnable checks are:

```sh
node --test
node scripts/validate-spec.cjs
node --check scripts/validate-spec.cjs
node --check test/spec-validation.test.cjs
git diff --check
```

The structural validator checks declarations, table shape, count, unique IDs,
positive finite weights, total, heading weights and complete valid anchors.
The business entry point additionally enforces C1-C14,F3 order, C1=Why Now/7
and C2=Market Frame/12. Prompt regression checks cover the same full ordered
ID/weight list and C1/C2 meanings. Diagnostics use repository-relative paths;
the validator stays offline and does not audit external repositories.

- Original HEAD: `node --test` passed 17/17; the validator exited 1 with
  exactly 12 missing-anchor errors, leaving the ID mismatch undetected.
- New regression tests/validator against unchanged round-1 docs:
  `node --test` passed 17/20, failed 3/20; validator exited 1 with
  15 errors (12 inherited-anchor gaps plus ID order and two mapping errors).
- Aligned docs: `node --test` passes 20/20. The validator still exits
  **1**, with exactly **12 missing-anchor errors** for C3-C14, 15 criteria,
  and weights 100/100. It has no remaining ID/mapping diagnostics.

Complete C1/C2/F3 anchor tables remain at
`specs/business-idea-scoring.md:35-41,50-56,77-83`.
Passing tests verify the ID fix and honest detection of the known anchor
gap; they do not mean the spec passes full validation. Update the known-gap
regression when the owner approves those definitions. The semantic issues
D2-D5 also require review beyond structural validation.
