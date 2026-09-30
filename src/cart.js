export function cartTotal(items, options) {
  if (!items || items.length === 0) {
    return 0;
  }

  // Validate input conditions (throws RangeError on failure)
  for (const item of items) {
    if (item.price < 0) {
      throw new RangeError('Item price cannot be negative.');
    }
    if (!Number.isInteger(item.qty) || item.qty <= 0) {
      throw new RangeError('Item qty must be a positive integer.');
    }
  }

  // Calculate subtotal
  const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0);

  // Calculate shipping fee (free shipping if subtotal >= freeShipFrom)
  const shipping = subtotal >= options.freeShipFrom ? 0 : options.shipFee;

  // Calculate VAT
  const vatAmount = subtotal * options.vatRate;

  // Calculate final total and round to the nearest whole integer
  const total = subtotal + vatAmount + shipping;

  return Math.round(total);
}