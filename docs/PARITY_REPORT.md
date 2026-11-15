# Business rubric parity report

Status: **NEEDS_DECISION**. Verified on 2026-11-14. No criterion IDs,
weights, prompts, or scoring definitions were changed.

## Sources and scope

- Canonical business spec in this checkout: `specs/business-idea-scoring.md`,
  identified by `README.md:19`; the V4 title is at
  `specs/business-idea-scoring.md:1` and the criterion table at lines 13–29.
  There is no `spec/v4.json` or other machine-readable rubric at this HEAD.
- Local HEAD: `ed5fd93dd88965f021d0a839fc4c35e6036dff25`.
  The copy/paste consumer is `prompts/cham-y-tuong.md:12` through line 26.
- Public scorer `main` resolved to
  `1925d2489b2e54cc14411cf598d68e4762973fc1`:
  [prompt rubric](https://github.com/tantanpq/business-idea-scorer/blob/1925d2489b2e54cc14411cf598d68e4762973fc1/prompt-builder.js#L18),
  [math weights and order](https://github.com/tantanpq/business-idea-scorer/blob/1925d2489b2e54cc14411cf598d68e4762973fc1/scoring-math.js#L19).
  The public repository tree was fetched using GitHub's unauthenticated REST
  API; files were read over HTTPS from the pinned commit. `gh api` was
  unavailable without authentication. No credentials were changed, clone was
  created, or external checkout was written.
- Private hub `src/tools/business-idea/spec.ts`: **NOT VERIFIED**. Its contents
  are not present in this checkout and were not supplied. This report makes
  no private-hub line-number or parity claims and includes no private content.

Here, "canonical" identifies this repository's documented specification; it
does not choose which repository should govern cross-repository alignment.

## Every criterion, aligned by observed meaning

All source references below are to the revisions above. `scoring-math.js:19`
contains the entire implementation weight map; its order is at line 20.
Semantic correspondence is evidence for an owner decision, not authorization
to rename IDs.

| Meaning | Spec ID / weight | Local file:line | Public prompt ID / weight, file:line | Public math file:line | Finding |
|---|---|---|---|---|---|
| Market Frame | F1 / 12 | `specs/business-idea-scoring.md:15` | C2 / 12, `prompt-builder.js:28` | `scoring-math.js:19` (C2 / 12) | **NEEDS_DECISION: ID differs** |
| Why Now | F2 / 7 | `specs/business-idea-scoring.md:16` | C1 / 7, `prompt-builder.js:19` | `scoring-math.js:19` (C1 / 7) | **NEEDS_DECISION: ID differs** |
| Industry structure | C3 / 7 | `specs/business-idea-scoring.md:17` | C3 / 7, `prompt-builder.js:37` | `scoring-math.js:19` (C3 / 7) | Match |
| Defensibility | C4 / 4 | `specs/business-idea-scoring.md:18` | C4 / 4, `prompt-builder.js:46` | `scoring-math.js:19` (C4 / 4) | Match |
| Business model | C5 / 7 | `specs/business-idea-scoring.md:19` | C5 / 7, `prompt-builder.js:55` | `scoring-math.js:19` (C5 / 7) | Match |
| Unit economics | C6 / 8 | `specs/business-idea-scoring.md:20` | C6 / 8, `prompt-builder.js:64` | `scoring-math.js:19` (C6 / 8) | Match |
| Founder-market fit | C7 / 10 | `specs/business-idea-scoring.md:21` | C7 / 10, `prompt-builder.js:73` | `scoring-math.js:19` (C7 / 10) | Match |
| Scale and time to revenue | C8 / 7 | `specs/business-idea-scoring.md:22` | C8 / 7, `prompt-builder.js:82` | `scoring-math.js:19` (C8 / 7) | Match |
| Risk register | C9 / 6 | `specs/business-idea-scoring.md:23` | C9 / 6, `prompt-builder.js:91` | `scoring-math.js:19` (C9 / 6) | Match |
| Market demand | C10 / 8 | `specs/business-idea-scoring.md:24` | C10 / 8, `prompt-builder.js:100` | `scoring-math.js:19` (C10 / 8) | Match |
| Founder traction | C11 / 4 | `specs/business-idea-scoring.md:25` | C11 / 4, `prompt-builder.js:109` | `scoring-math.js:19` (C11 / 4) | Match |
| Capital fit | C12 / 5 | `specs/business-idea-scoring.md:26` | C12 / 5, `prompt-builder.js:118` | `scoring-math.js:19` (C12 / 5) | Match |
| Category forecast | F3 / 6 | `specs/business-idea-scoring.md:27` | F3 / 6, `prompt-builder.js:145` | `scoring-math.js:19` (F3 / 6) | Match |
| M&A potential | C13 / 2 | `specs/business-idea-scoring.md:28` | C13 / 2, `prompt-builder.js:127` | `scoring-math.js:19` (C13 / 2) | Match |
| Go-to-market | C14 / 7 | `specs/business-idea-scoring.md:29` | C14 / 7, `prompt-builder.js:136` | `scoring-math.js:19` (C14 / 7) | Match |

Exact ID-set differences are spec-only `{F1, F2}` and scorer-only `{C1, C2}`.
There are **zero differing weights for shared IDs** and **zero differing
weights under the semantic correspondence above**. Both sides have 15 unique
IDs and total weight 100. The reported broad ID/weight drift is therefore
confirmed as two ID differences, not a numerical weight disagreement at these
revisions. The local prompt repeats F1 / 12 at `prompts/cham-y-tuong.md:12`
and F2 / 7 at line 13; it agrees with the local spec.

Position is unsafe as a mapping: spec order starts Market Frame, Why Now and
places F3 before C13; implementation order starts Why Now, Market Frame and
places F3 last (`scoring-math.js:20`). Matching weights or totals alone would
not detect this. The scorer looks up returned criteria by exact ID at
`scoring-math.js:26` through line 32. A response using the spec's F1/F2 IDs
would leave C1/C2 absent and imputed at 50; this is a source-based inference,
not a live scoring test.

## Spec invariants and missing anchor definitions

The total and anchor scale are declared at
`specs/business-idea-scoring.md:3` and line 6. Unique IDs, count 15, and
weight sum 100 pass. Explicit F1, F2 and F3 tables contain all five valid,
nonempty anchors at lines 40–44, 52–56 and 64–68.

`specs/business-idea-scoring.md:70` says C3–C14 retain detailed V3 anchors,
but only summaries appear at lines 72–83. No V3 anchor source exists in this
checkout. Those twelve criteria therefore cannot pass a self-contained
anchor-completeness check. By comparison, public definitions begin at
`prompt-builder.js:39`, `:48`, `:57`, `:66`, `:75`, `:84`, `:93`, `:102`,
`:111`, `:120`, `:129`, and `:138`, respectively. Copying them into the spec
would choose a scoring definition; this report does not make that decision.

## Offline validation

Requires Node.js with its built-in test runner (verified with v24.19.0).
No package installation, network connection, credentials, environment
configuration, or third-party dependencies are needed.

```sh
node --test
node scripts/validate-spec.cjs
```

The validator reads the canonical Markdown directly, using a repository path
relative to the script. It checks declarations, table structure, criterion
count, unique IDs, positive finite weights, the sum against the declared
total, heading weights, anchor ownership, and complete, unique, valid,
nonempty anchor definitions. Diagnostics use repository-relative file:line.
Unrecognized required Markdown structures fail validation rather than pass
silently. It does not contact or execute the public scorer or check private
code; cross-repository parity here is a pinned source audit.

At the audited HEAD the validator deliberately exits **1**, reporting
**12 missing-anchor errors**, one per C3–C14 criterion. The test suite verifies
this known gap, checks a complete synthetic fixture passes, and rejects
mutations to IDs, weights, declarations and anchors. Passing tests verify the
validator's behavior; they do not imply that the incomplete spec passes it.
The regression expectation must be updated when owners resolve the gap.

## Decisions required

1. **NEEDS_DECISION:** choose the shared ID contract for Market Frame and
   Why Now, including consumer migration. No rename or automatic remapping
   was made here.
2. **NEEDS_DECISION:** identify and approve the inherited C3–C14 anchor source
   so the public spec can become self-contained without invented definitions.
3. Verify the private hub against the chosen contract in its own authorized
   lane; do not publish private source or invent private file:line evidence.
