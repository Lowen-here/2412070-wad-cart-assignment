Role: You are an expert JavaScript Developer and testing engineer.

Task: Implement the `cartTotal(items, options)` function in `src/cart.js` and write unit tests in `test/cart.test.js`.

Files to modify:
- `src/cart.js`
- `test/cart.test.js`

Constraints & Environment:
- Use plain JavaScript (ES Modules).
- STRICT RULE: ZERO external dependencies allowed (use Node.js native test runner `node --test` and native `node:assert`).
- Do NOT use `toFixed()` for total rounding as it returns a string; the output total MUST be a number.

Contract & Function Specification:
1. Inputs:
   - `items`: Array of objects, where each item has `{ price: number, quantity: number }`.
   - `options`: Object containing `{ vat: number, shipping: number, threshold: number }`.
2. Calculations:
   - `subtotal` = Sum of (`price` * `quantity`) for all items in the array.
   - If `items` is an empty array (`[]`), return `0` directly.
   - If `subtotal >= options.threshold`, shipping cost becomes `0`. Otherwise, use `options.shipping`.
   - `vat_amount` = `subtotal * options.vat`.
   - `total` = `subtotal + vat_amount + shipping`.
   - The returned result must be rounded to the nearest whole integer (đồng) as a primitive `number` (e.g., using `Math.round()`).
3. RangeError Exceptions:
   - If any item in `items` has `price < 0`, throw a `RangeError`.
   - If any item in `items` has a `quantity` that is not an integer (i.e., `!Number.isInteger(quantity)`), throw a `RangeError`.

Requirements for Tests in `test/cart.test.js`:
Write clean, readable unit tests covering exactly these 5 distinct scenarios (each test must fail for only one reason):
1. Worked Example: Verify that the test case from the lecture slides returns `467400` as a number.
2. Empty Cart: Verify that passing an empty array `[]` returns `0`.
3. Free Shipping Threshold: Verify that when `subtotal >= threshold`, shipping fee is waived (0).
4. Negative Price Validation: Verify that an item with `price < 0` throws `RangeError`.
5. Non-Integer Quantity Validation: Verify that an item with a non-integer `quantity` (e.g. `1.5`) throws `RangeError`.

Execution Order:
1. First, update `test/cart.test.js` with all 5 required test cases.
2. Next, implement the logic in `src/cart.js`.
3. Finally, ensure all tests pass cleanly when running `npm test`.