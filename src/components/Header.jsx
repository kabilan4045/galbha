import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import HashLink from './HashLink';
import logo from '../assets/logo.png';

const NAV_ITEMS = [
  { label: 'About', hash: '#about' },
  { label: 'Quality', hash: '#quality' },
  { label: 'Therapeutic Areas', hash: '#therapeutic-areas' },
  { label: 'Products', to: '/products' },
  { label: 'Partner', hash: '#partner' },
  { label: 'Contact', hash: '#contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState('');
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  useEffect(() => {
    if (location.pathname !== '/') {
      setActiveHash('');
      return undefined;
    }

    const sectionIds = NAV_ITEMS.filter((item) => item.hash).map((item) => item.hash.slice(1));
    const targets = sectionIds.map((id) => document.getElementById(id)).filter(Boolean);
    if (!targets.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveHash(`#${entry.target.id}`);
        });
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    );

    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, [location.pathname]);

  const isActive = (item) =>
    item.to ? location.pathname.startsWith(item.to) : item.hash === activeHash;

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container site-header__inner">
        <Link to="/" className="site-header__brand" onClick={() => setMenuOpen(false)}>
          <img src={logo} alt="Galbha Remedies" className="site-header__logo" />
        </Link>

        <nav className="site-header__nav" aria-label="Primary">
          {NAV_ITEMS.map((item) => {
            const activeClass = isActive(item) ? ' is-active' : '';
            return item.to ? (
              <Link
                key={item.label}
                to={item.to}
                className={`site-header__link${activeClass}`}
                aria-current={isActive(item) ? 'page' : undefined}
              >
                {item.label}
              </Link>
            ) : (
              <HashLink
                key={item.label}
                hash={item.hash}
                className={`site-header__link${activeClass}`}
              >
                {item.label}
              </HashLink>
            );
          })}
        </nav>

        <button
          type="button"
          className="site-header__toggle"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {menuOpen && (
        <div className="site-header__mobile-panel">
          {NAV_ITEMS.map((item) => {
            const activeClass = isActive(item) ? ' is-active' : '';
            return item.to ? (
              <Link
                key={item.label}
                to={item.to}
                className={`site-header__mobile-link${activeClass}`}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ) : (
              <HashLink
                key={item.label}
                hash={item.hash}
                className={`site-header__mobile-link${activeClass}`}
                onNavigate={() => setMenuOpen(false)}
              >
                {item.label}
              </HashLink>
            );
          })}
        </div>
      )}
    </header>
  );
}
