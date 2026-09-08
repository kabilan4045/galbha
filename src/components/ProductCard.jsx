import { Link } from 'react-router-dom';
import { MessageCircle, Pill } from 'lucide-react';

const WHATSAPP_NUMBER = '917879555517';

function buildWhatsappHref(product) {
  const message = `Hi Galbha Remedies, I'd like to enquire about ${product.brand} (${product.composition}). Could you share more details?`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

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
      <p className="product-card__composition" title={product.composition}>
        {product.composition}
      </p>
      <a
        href={buildWhatsappHref(product)}
        className="btn btn-whatsapp product-card__enquire"
        target="_blank"
        rel="noopener noreferrer"
        onClick={(event) => event.stopPropagation()}
      >
        <MessageCircle size={16} />
        Enquire on WhatsApp
      </a>
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
