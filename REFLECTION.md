# Reflection (200–300 words)

The hardest part of this exercise was not Git itself but reviewing my own work with the same discipline I'd apply to someone else's pull request. Branching and merging are mechanically simple once the commands are memorized, but the real value only shows up when the branch actually represents one coherent change — in this case, isolating the `letterGrade` and `isPassing` functions from the initial scaffold on `main` forced me to think about what belonged together as a single reviewable unit, rather than committing everything as one undifferentiated blob.

Setting up the CI pipeline clarified something that's easy to underestimate when working solo: a test suite that only runs when I remember to run it is much weaker than one that runs automatically on every push. The first time I deliberately broke `calculateAverage` to verify my tests actually caught it (documented in `QA-REPORT.md`), I did it locally — but having that same check happen automatically in GitHub Actions means a future change can't silently slip past the test suite just because I forgot to run `npm test` before pushing.

The linter caught something I would have missed in a casual read-through: an unused `assert` import left over from an earlier draft of the test file. It's a trivial issue on its own, but it's exactly the category of small, accumulating mess that a linter exists to catch before it becomes a pattern across a larger codebase.

Overall, the combination of version control, CI, and basic QA practices changed the project from "code that works on my machine" into something with a verifiable, repeatable trail of evidence that it works — which is the actual point of these tools, more than any single command.
