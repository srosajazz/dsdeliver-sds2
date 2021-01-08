import { Product } from './types';

type Props = {
  product: Product;
};

// Format Prices
function formatPrice(price: number) {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  return formatter.format(price);
}

function ProductCard({ product }: Props) {
  return (
    <div className="order-card-container">
      <h3 className="order-card-container">{product.name}</h3>
      <img
        src={product.imageUri}
        className="order-card-image"
        alt={product.name}
      />
      <h3 className="order-card-price">{formatPrice(product.price)}</h3>
      <div className="order-card-description">
        <h3>Description</h3>
        <p>{product.description}</p>
      </div>
    </div>
  );
}

export default ProductCard;
