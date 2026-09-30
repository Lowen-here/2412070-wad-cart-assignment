export function cartTotal(items, options) {
  if (!items || items.length === 0) {
    return 0;
  }

  // Kiểm tra điều kiện đầu vào (RangeError)
  for (const item of items) {
    if (item.price < 0) {
      throw new RangeError('Item price cannot be negative.');
    }
    if (!Number.isInteger(item.qty) || item.qty <= 0) {
      throw new RangeError('Item qty must be a positive integer.');
    }
  }

  // Tính subtotal
  const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0);

  // Tính phí vận chuyển (nếu subtotal >= freeShipFrom thì shipping = 0)
  const shipping = subtotal >= options.freeShipFrom ? 0 : options.shipFee;

  // Tính VAT
  const vatAmount = subtotal * options.vatRate;

  // Tính tổng và làm tròn đến số nguyên đồng (dùng Math.round, KHÔNG dùng toFixed)
  const total = subtotal + vatAmount + shipping;

  return Math.round(total);
}