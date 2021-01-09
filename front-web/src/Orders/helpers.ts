import { Product } from './types';

export function checkIsSelected(selectedProducts: Product[], product: Product) {
  return selectedProducts.some((item) => item.id === product.id);
}

// Format Prices
export function formatPrice(price: number) {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  return formatter.format(price);
}
