import { test } from 'node:test'
import assert from 'node:assert/strict'
import { cartTotal } from '../src/cart.js'

// 1. Worked Example từ slide
test('the example from the slides', () => {
  const items = [
    { name: 'Áo thun', price: 180000, qty: 2 },
    { name: 'Sổ tay', price: 45000, qty: 1 },
  ]
  const options = { vatRate: 0.08, shipFee: 30000, freeShipFrom: 500000 }
  assert.strictEqual(cartTotal(items, options), 467400)
})

// 2. Giỏ hàng rỗng trả về 0
test('empty cart returns 0', () => {
  const items = []
  const options = { vatRate: 0.1, shipFee: 30000, freeShipFrom: 500000 }
  assert.strictEqual(cartTotal(items, options), 0)
})

// 3. Đạt ngưỡng miễn phí vận chuyển (Subtotal >= threshold)
test('free shipping applied when subtotal reaches threshold', () => {
  const items = [{ name: 'VIP', price: 500000, qty: 1 }]
  const options = { vatRate: 0.1, shipFee: 30000, freeShipFrom: 500000 }
  assert.strictEqual(cartTotal(items, options), 550000)
})

// 4. Quăng lỗi RangeError khi price < 0
test('throws RangeError for negative price', () => {
  const items = [{ name: 'Lỗi', price: -100, qty: 1 }]
  const options = { vatRate: 0.1, shipFee: 30000, freeShipFrom: 500000 }
  assert.throws(() => {
    cartTotal(items, options)
  }, RangeError)
})

// 5. Quăng lỗi RangeError khi qty không phải số nguyên dương
test('throws RangeError for non-positive or non-integer qty', () => {
  const options = { vatRate: 0.1, shipFee: 30000, freeShipFrom: 500000 }
  
  // qty is non-integer
  assert.throws(() => {
    cartTotal([{ name: 'Lỗi', price: 100000, qty: 1.5 }], options)
  }, RangeError)

  // qty is zero
  assert.throws(() => {
    cartTotal([{ name: 'Lỗi', price: 100000, qty: 0 }], options)
  }, RangeError)

  // qty is negative
  assert.throws(() => {
    cartTotal([{ name: 'Lỗi', price: 100000, qty: -1 }], options)
  }, RangeError)
})