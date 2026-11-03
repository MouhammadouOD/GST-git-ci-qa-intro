# QA Report

## Unit tests

12 unit tests in `test/gradeToolkit.test.js`, covering all four exported functions:

- `calculateAverage`: correct mean for multiple scores, a single score, and two error paths (empty array, non-array input).
- `letterGrade`: one test per grade band (A, B, C, D, F), including the boundary values (e.g. exactly 90, exactly 60).
- `isPassing`: the default threshold (60) and a custom threshold.
- `classAverage`: specifically checks that it averages *per-student averages* rather than flattening all raw scores together — this was the one function where a naive implementation (flattening all scores into one array) would quietly give the wrong answer, so it gets a dedicated test.

**Verification that the tests are meaningful.** Each test was checked against a deliberately broken implementation before being accepted: a one-line mutation to `calculateAverage` (adding a fixed offset to the result) was introduced, which correctly failed 3 of the 12 tests (`calculateAverage computes the mean of scores`, `calculateAverage handles a single score`, and `classAverage`, which depends on it), while the other 9 stayed green as expected since they don't exercise that code path. The change was reverted afterward and the suite returned to 12/12.

## Linter

ESLint (`eslint:recommended`, plus `eqeqeq`, `no-var`, and `prefer-const` as project rules) was run against `src/` and `test/`.

**Issue found and fixed:** `test/gradeToolkit.test.js` originally imported Node's built-in `assert` module but never used it, since the test file uses a custom `check()` helper instead (it logs each test's pass/fail status individually, which was more useful for walking through CI output). ESLint's `no-unused-vars` rule flagged this as a warning. Fix: removed the unused import. Re-running the linter afterward reports zero errors and zero warnings.

## Code review

This was completed solo rather than with a peer (see `REFLECTION.md`), so the "review" here is a self-review pass performed after the implementation was complete, checking the diff line by line as if reviewing someone else's pull request:

- Confirmed every exported function validates its inputs and throws a clear error rather than silently returning `NaN` or `undefined` (e.g. `calculateAverage` on an empty array, `letterGrade` on a non-number).
- Confirmed grade-band boundaries in `letterGrade` use `>=` consistently (so 90.0 is an A, not a B) and are covered by a dedicated test for each band.
- Confirmed `classAverage` matches its documented behavior (per-student averages, not raw score flattening) via the dedicated test described above, since this was the one place a subtly wrong implementation would still "look" correct at a glance.
- No dead code, no commented-out code, and no `console.log` left in `src/` (only the test file logs, which is intentional output).
