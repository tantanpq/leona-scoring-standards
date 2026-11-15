# Business rubric parity report

Status: **ANCHORS_IMPORTED** (round 3). Verified on 2026-11-14.
D1 anchor import (except the C14 rule conflict), D2, D3 and D4 are **RESOLVED**.
The C14 conflict and D5 remain **NEEDS_DECISION**. Structural validation passes;
this is not a claim of complete evidence/output-contract parity.

## Sources and owner decision

- Round-3 starting HEAD: `126b7794c2388ab962beb4f24b0af7973e20d96f`.
  `README.md:19` identifies the business spec and copy-paste prompt.
- The delegated owner decision authorizes a docs-only import of implemented
  anchors and ownership rules for D1-D4. It explicitly excludes choosing a
  C14 hypothesis-vs-test-evidence rule and excludes D5.
- Public scorer source was read using `git show` from the local clone, without
  checking out files or modifying that clone, at pinned commit
  `1925d2489b2e54cc14411cf598d68e4762973fc1`:
  [prompt-builder.js](https://github.com/tantanpq/business-idea-scorer/blob/1925d2489b2e54cc14411cf598d68e4762973fc1/prompt-builder.js),
  [scoring-math.js](https://github.com/tantanpq/business-idea-scorer/blob/1925d2489b2e54cc14411cf598d68e4762973fc1/scoring-math.js).
  Their line-1 headers identify V4-revised as approved on 2026-10-10.
  All implementation references below mean these pinned public files.
  Source review does not execute the scorer or assert live deployment parity.
- The private hub's `src/tools/business-idea/spec.ts` is not in this checkout.
  Its contents and line numbers remain independently **NOT VERIFIED**.
  No app code, weights, IDs or missing=50 behavior were changed. F3 remains
  provisional and uncalibrated at weight 6.

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

## D1-D5 disposition

Before edits, the starting HEAD still had only C3-C14 summaries at
`specs/business-idea-scoring.md:58-71`; C1 gaps at `:37,39-41`, C2 gaps at
`:46-56`, and missing F3 qualifiers at `:81,83`. This confirmed the defects
before the import. The following local references describe the current files.

| # | Status | Current local evidence | Implemented source and disposition |
|---|---|---|---|
| D1 | **RESOLVED** for all C3-C14 anchor tables and ownership import, **except C14 conflict** | Twelve complete tables mapped below; C9 worst material residual at `specs/business-idea-scoring.md:135`; prompt delegates anchors at `prompts/cham-y-tuong.md:28`. | `prompt-builder.js:38-143`, including C3 counter-hypothesis/Tracked Bet, C4 user-affinity evidence, C5/C6 ownership, C8 founder time, C9 worst material residual, C10 market vs C11 founder traction, C12 financing, C13 exit optionality. C14 anchors are imported as written; its incompatible ownership condition is visibly preserved as an open decision. |
| D2 | **RESOLVED** | `specs/business-idea-scoring.md:39-43` | `prompt-builder.js:22-26`: C1 includes absent timing inputs/too-early warning at 0, behavior/near-ready infrastructure examples at 50, timing combinations at 75, and a named incumbent blind spot at 100. |
| D3 | **RESOLVED** | `specs/business-idea-scoring.md:47-59`; C10 cross-reference at `:147` | `prompt-builder.js:29,31-35,211`: frame before sizing; adjacency-fallacy cap and separate expansion pool at 25; dated counted sources and untriggered MISSING-tracked bet at 50; explicit derived-bar threshold at 75; non-buyers paying for workarounds at 100. Existing-category spend is scored; expansion remains a separate bet, MISSING(50) until triggered, never inflating C2/C10. Open bets add zero points. |
| D4 | **RESOLVED** | `specs/business-idea-scoring.md:216,218`; provisional weight at `:4,208`; summary note at `prompts/cham-y-tuong.md:28` | `prompt-builder.js:150,152`: F3 50 includes the unresearched MISSING-tracked alternative; 100 includes forecast audit history if previously forecasted. Weight 6 stays provisional and uncalibrated. |
| C14 conflict (D1 exception) | **NEEDS_DECISION** | `specs/business-idea-scoring.md:197-198,205` | `prompt-builder.js:137` permits a named, budget-testable distribution hypothesis with test defined in Tracked Bets to anchor 75 rather than default 50; `:142` requires separate channel tests demonstrating reproducibility at 75; `:215` says an open bet adds zero points. The visible note is **OPEN OWNER DECISION: C14 hypothesis vs test-evidence conflict**. Neither rule is selected over the other. Owner reconciliation is still required. |
| D5 | **NEEDS_DECISION** | Existing score/missing rules at `specs/business-idea-scoring.md:6-7`; general rules at `:220-225`; prompt rules at `prompts/cham-y-tuong.md:30-36` | Not implemented in this round. Evidence q/a scales (`prompt-builder.js:156-165,204-208`), highest fully supported anchor/adverse-evidence rules (`:198,201-202`), blockers/validation priorities/human routing and strict JSON (`:212-241`), and confidence/coverage/bounds (`scoring-math.js:73-95`) still need a separate owner decision. C10/C11 ownership and expansion discipline were imported under D1/D3, but the remaining evidence/confidence/JSON contract was not adopted. |

## D1 anchor and ownership map

Each local anchor range contains 0 / 25 / 50 / 75 / 100 in order.
All local paths in this table mean `specs/business-idea-scoring.md`;
all source paths mean the pinned `prompt-builder.js`.

| Criterion | Local ownership file:line | Local anchors file:line | Source ownership and anchors file:line |
|---|---|---|---|
| C3 | `specs/business-idea-scoring.md:63` | `specs/business-idea-scoring.md:67-71` | `prompt-builder.js:38,40-44` |
| C4 | `specs/business-idea-scoring.md:75` | `specs/business-idea-scoring.md:79-83` | `prompt-builder.js:47,49-53` |
| C5 | `specs/business-idea-scoring.md:87` | `specs/business-idea-scoring.md:91-95` | `prompt-builder.js:56,58-62` |
| C6 | `specs/business-idea-scoring.md:99` | `specs/business-idea-scoring.md:103-107` | `prompt-builder.js:65,67-71` |
| C7 | `specs/business-idea-scoring.md:111` | `specs/business-idea-scoring.md:115-119` | `prompt-builder.js:74,76-80` |
| C8 | `specs/business-idea-scoring.md:123` | `specs/business-idea-scoring.md:127-131` | `prompt-builder.js:83,85-89` |
| C9 | `specs/business-idea-scoring.md:135` | `specs/business-idea-scoring.md:139-143` | `prompt-builder.js:92,94-98` |
| C10 | `specs/business-idea-scoring.md:147` | `specs/business-idea-scoring.md:151-155` | `prompt-builder.js:101,103-107` |
| C11 | `specs/business-idea-scoring.md:159` | `specs/business-idea-scoring.md:163-167` | `prompt-builder.js:110,112-116` |
| C12 | `specs/business-idea-scoring.md:171` | `specs/business-idea-scoring.md:175-179` | `prompt-builder.js:119,121-125` |
| C13 | `specs/business-idea-scoring.md:183` | `specs/business-idea-scoring.md:187-191` | `prompt-builder.js:128,130-134` |
| C14 | `specs/business-idea-scoring.md:195,197-198` | `specs/business-idea-scoring.md:202-206` | `prompt-builder.js:137,139-143` (conflict remains open) |

## Offline validation and regression evidence

The repository has no package manifest, build script, lint script or CI command.
Its runnable checks use Node.js built-ins and require no installation.

| Phase / exact command | Observed result |
|---|---|
| Starting HEAD: `node --test` | Exit 0; 20 passed, 0 failed, 0 skipped. These included assertions for the known missing-anchor gap. |
| Starting HEAD: `node scripts/validate-spec.cjs` | Exit 1; exactly 12 missing-anchor errors for C3-C14; 15 criteria, weights 100/100. |
| Updated regressions, before doc fix: `node --test` | Exit 1; 18 passed, 3 failed, 0 skipped (21 total). Failures exposed incomplete anchors, missing summary reference/owner note, and the nonzero CLI. |
| Imported docs: `node --test` | Exit 0; 21 passed, 0 failed, 0 skipped. |
| Imported docs: `node scripts/validate-spec.cjs` | Exit 0; 15 criteria, weights 100/100; **0 validation errors**. |
| `git diff --check` | Exit 0; no whitespace defects. Git emitted only normal LF-to-CRLF working-copy notices. |

The existing validator was not changed or weakened. The regressions now require
all 15 criteria to have all five anchors and the CLI to pass; generic negative
fixtures still reject incomplete/invalid tables. A new regression keeps the
prompt's spec link and the visible C14 note with both conflicting source lines
and the zero-point open-bet rule. Translation fidelity and ownership conditions
were reviewed against the pinned source; structural tests do not establish
semantic equivalence or settle owner decisions.

Neither C14 nor D5 causes a validator failure: the validator checks Markdown
structure, IDs/order, weights and anchor completeness, not semantic policy or
JSON/evidence contracts. Their **NEEDS_DECISION** status is intentional.
