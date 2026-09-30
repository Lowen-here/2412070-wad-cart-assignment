# Self Assessment Report

| Criterion | Score Claimed | Evidence / Link / Description |
| :--- | :---: | :--- |
| **1. Behaviour** | 30 / 30 | `src/cart.js`: Correctly calculates subtotal, VAT, free shipping threshold, handles empty cart, uses `Math.round()`, and throws `RangeError` for negative price/non-positive integer qty. |
| **2. Tests** | 20 / 20 | `test/cart.test.js`: Contains 5 distinct unit tests covering all required scenarios using native `node:test` and `node:assert`. |
| **3. Harness** | 20 / 20 | Created `RULES.md` and `.github/workflows/ci.yml`. GitHub Actions CI pipeline passes with green tick. |
| **4. Brief** | 15 / 15 | `BRIEF.md`: Detailed specification file containing function signatures, constraints, error handling rules, and exact test expectations. |
| **5. AI-LOG** | 15 / 15 | `AI-LOG.md`: Fully documented AI prompts, developer choices, step-by-step dev loop, and commit alignment. |

**Total Score Claimed:** 100 / 100

### What I did not manage
- None. All requirements and edge cases specified in the rubric have been fully addressed and tested.