# Grade Toolkit

GoMyCode checkpoint — *Introducing High School Students to Version Control, Continuous Integration, and Quality Assurance* (Master Degree Highlights).

A small, high-school-appropriate grade-calculation library, used here as the practice project for Git branching/merging, a GitHub Actions CI pipeline, and basic QA practices (unit tests + linting + a short code review note).

## What it does

- `calculateAverage(scores)` — mean of a list of scores
- `letterGrade(average)` — converts a numeric average to A–F
- `isPassing(average, threshold = 60)` — pass/fail check
- `classAverage(studentScores)` — averages *per-student averages*, not raw scores, so one student with many assignments doesn't skew the class result

## Running locally

```bash
npm install
npm test   # 12/12 unit tests
npm run lint
```

## Version control practice (Part 1)

This repository's history demonstrates the required Git workflow:

- `main` started with the initial project scaffold.
- A `feature/grade-utils` branch was created to add the `letterGrade` and `isPassing` functions in isolation from `main`.
- The feature branch was merged back into `main` via a real merge commit (not a fast-forward squash), so the branch history is visible with `git log --graph`.

See `QA-REPORT.md` for the testing/linting summary and `REFLECTION.md` for the short write-up.

## CI pipeline (Part 2)

`.github/workflows/ci.yml` runs on every push and pull request to `main`:
1. Installs dependencies
2. Runs the unit test suite (`npm test`)
3. Runs ESLint (`npm run lint`)

A failing test or lint error fails the build and is visible on the commit/PR in GitHub.

## QA (Part 3)

See `QA-REPORT.md`.
