# Harness Rules & Project Guidelines

## Stack & Commands
- Stack: Plain JavaScript (Node.js ES Modules)
- Test Command: `npm test`
- Lint / Format Command: `npm run lint` (or `npx prettier --check .` if configured)

## Never Rules
- NEVER install external dependencies (plain JS only).
- NEVER use `toFixed()` for final total calculation (it returns a string; output must be a primitive number).
- NEVER delete or alter existing specification constraints without adding full test coverage.
