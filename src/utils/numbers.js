export const thousandSeparator = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

export const calculateDiscountInPrice = (subtotal = 0, discount = 0) => {
  return (subtotal * discount)
}

export const calculateTotalPrice = (subtotal = 0, discount = 0) => {
  return subtotal - (subtotal * discount)
}
