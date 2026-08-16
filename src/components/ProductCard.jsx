import { Link } from 'react-router-dom';
import { Pill } from 'lucide-react';

export default function ProductCard({ product, href, onClick }) {
  const content = (
    <>
      <div className="product-card__image">
        {product.image ? (
          <img src={product.image} alt={product.brand} className="product-card__image-photo" />
        ) : (
          <>
            <Pill className="product-card__image-icon" size={40} strokeWidth={1.2} aria-hidden="true" />
            <span className="product-card__image-caption mono">Image coming soon</span>
          </>
        )}
      </div>
      <h3 className="product-card__name">{product.brand}</h3>
      <p className="product-card__composition">{product.composition}</p>
    </>
  );

  if (href) {
    return (
      <Link to={href} className="card product-card" onClick={onClick}>
        {content}
      </Link>
    );
  }

  return (
    <div className="card product-card" onClick={onClick}>
      {content}
    </div>
  );
}
