import { test } from 'node:test'
import assert from 'node:assert/strict'
import { cartTotal } from '../src/cart.js'

// 1. Worked Example từ slide
test('the example from the slides', () => {
  const items = [
    { price: 180000, quantity: 2 },
    { price: 45000, quantity: 1 },
  ]
  const options = { vat: 0.08, shipping: 30000, threshold: 500000 }
  assert.strictEqual(cartTotal(items, options), 467400)
})

// 2. Giỏ hàng rỗng trả về 0
test('empty cart returns 0', () => {
  const items = []
  const options = { vat: 0.1, shipping: 30000, threshold: 500000 }
  assert.strictEqual(cartTotal(items, options), 0)
})

// 3. Đạt ngưỡng miễn phí vận chuyển (Subtotal >= threshold)
test('free shipping applied when subtotal reaches threshold', () => {
  const items = [{ price: 500000, quantity: 1 }]
  const options = { vat: 0.1, shipping: 30000, threshold: 500000 }
  assert.strictEqual(cartTotal(items, options), 550000)
})

// 4. Quăng lỗi RangeError khi price < 0
test('throws RangeError for negative price', () => {
  const items = [{ price: -100, quantity: 1 }]
  const options = { vat: 0.1, shipping: 30000, threshold: 500000 }
  assert.throws(() => {
    cartTotal(items, options)
  }, RangeError)
})

// 5. Quăng lỗi RangeError khi quantity không phải số nguyên
test('throws RangeError for non-integer quantity', () => {
  const items = [{ price: 100000, quantity: 1.5 }]
  const options = { vat: 0.1, shipping: 30000, threshold: 500000 }
  assert.throws(() => {
    cartTotal(items, options)
  }, RangeError)
})