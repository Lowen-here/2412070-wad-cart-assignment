export function cartTotal(items, options) {
  if (!items || items.length === 0) {
    return 0;
  }

  // Kiểm tra điều kiện đầu vào (RangeError)
  for (const item of items) {
    if (item.price < 0) {
      throw new RangeError('Item price cannot be negative.');
    }
    if (!Number.isInteger(item.quantity)) {
      throw new RangeError('Item quantity must be an integer.');
    }
  }

  // Tính subtotal
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // Tính phí vận chuyển (nếu subtotal >= threshold thì shipping = 0)
  const shipping = subtotal >= options.threshold ? 0 : options.shipping;

  // Tính VAT
  const vatAmount = subtotal * options.vat;

  // Tính tổng và làm tròn đến số nguyên đồng (dùng Math.round, KHÔNG dùng toFixed)
  const total = subtotal + vatAmount + shipping;

  return Math.round(total);
}