# AI Interaction Log

## Tool Used
- Model/Agent: Gemini (Google)

## Prompts & Dev Process Summary

### Step 1: Harness & Brief Setup
- Prompt: Requesting step-by-step guidance to set up repository rules (AGENTS.md), GitHub Actions CI (.github/workflows/ci.yml), and brief specification (brief.txt).
- Output: Harness files configured and pushed to GitHub.

### Step 2: Red Test Phase (TDD)
- Prompt: Updated `test/cart.test.js` with 5 required test cases covering:
  1. Worked example from slides (467400)
  2. Empty cart returns 0
  3. Free-shipping threshold condition
  4. Negative price RangeError
  5. Non-integer quantity RangeError
- Result: Verified failing test status (`npm test` red).

### Step 3: Implementation Phase (Green Test)
- Prompt: Implemented `cartTotal(items, options)` in `src/cart.js` using ESM, pure JS, `Math.round()` for output rounding, and strict type/range validations without external libraries.
- Result: All 5 unit tests passed cleanly (`npm test` green). CI passed on GitHub Actions.

### Step 4: Fix Property Names & Constraints Validation
- Prompt: Requested a review against the README and rubric. Corrected the property names to match specifications and added validation for `qty <= 0`.
- Result: Tests were modified and passed cleanly. Modified variables: `qty`, `vatRate`, `shipFee`, `freeShipFrom`.

## Manual Review & Modifications
- Verified proper property naming (`qty`, `vatRate`, `shipFee`, `freeShipFrom`) to prevent runtime errors and match README.md exact specification.
- Confirmed zero external npm dependencies were added.
- Ensured RangeError properly checks for non-positive or non-integer `qty` (`<= 0`).
