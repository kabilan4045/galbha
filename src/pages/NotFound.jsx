import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="page-hero container not-found">
      <span className="eyebrow mono">404</span>
      <h1>Page Not Found</h1>
      <p>The page you are looking for doesn&rsquo;t exist or may have moved.</p>
      <Link to="/" className="btn btn-primary">
        Return Home
      </Link>
    </div>
  );
}
