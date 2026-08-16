import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

export default function ProductsPage() {
  return (
    <div className="page-hero container products-listing">
      <nav className="breadcrumb mono" aria-label="Breadcrumb">
        <Link to="/">Home</Link>
        <ChevronRight size={14} />
        <span>Products</span>
      </nav>

      <span className="eyebrow mono">Product Catalogue</span>
      <h1>Our Products</h1>
      <p>
        Quality-oriented products across key therapeutic areas — a diversified portfolio built on
        responsible sourcing and ethical pharmaceutical marketing.
      </p>

      <div className="card-grid card-grid--3 products-page__grid">
        {products.map((product) => (
          <ProductCard product={product} key={product.brand} />
        ))}
      </div>
    </div>
  );
}
