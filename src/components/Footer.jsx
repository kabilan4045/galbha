import { useState } from 'react';
import { Link } from 'react-router-dom';
import HashLink from './HashLink';
import DisclaimerModal from './DisclaimerModal';
import logo from '../assets/logo.png';

const FOOTER_COLUMNS = [
  {
    title: 'Explore',
    links: [
      { label: 'About', hash: '#about' },
      { label: 'Quality', hash: '#quality' },
      { label: 'Therapeutic Areas', hash: '#therapeutic-areas' },
      { label: 'Products', to: '/products' },
      { label: 'Partner', hash: '#partner' },
    ],
  },
  {
    title: 'Contact',
    links: [
      { label: 'Contact Us', hash: '#contact' },
      { label: '+91 7879555517', href: 'tel:+917879555517' },
      { label: 'info@galbharemedies.com', href: 'mailto:info@galbharemedies.com' },
    ],
  },
];

export default function Footer() {
  const [disclaimerOpen, setDisclaimerOpen] = useState(false);

  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <div className="site-footer__brand-col">
          <div className="site-footer__logo-plate">
            <img src={logo} alt="Galbha Remedies" className="site-footer__logo" />
          </div>
          <p className="site-footer__tagline">
            Quality Medicines. Ethical Principles. Trusted Care.
          </p>

          <div className="site-footer__office">
            <h4 className="site-footer__col-title">Corporate Office</h4>
            <p className="site-footer__office-address mono">
              Chandigarh, India
              <br />
              PAN-India Operations
            </p>
          </div>

          <div className="site-footer__social">
            <span
              className="social-icon-placeholder mono"
              title="LinkedIn — coming soon"
              aria-label="LinkedIn — coming soon"
            >
              in
            </span>
          </div>
        </div>

        <div className="site-footer__columns">
          {FOOTER_COLUMNS.map((column) => (
            <div className="site-footer__col" key={column.title}>
              <h4 className="site-footer__col-title">{column.title}</h4>
              <ul className="site-footer__col-list">
                {column.links.map((item) => (
                  <li key={item.label}>
                    {item.to ? (
                      <Link to={item.to} className="site-footer__link">
                        {item.label}
                      </Link>
                    ) : item.href ? (
                      <a href={item.href} className="site-footer__link">
                        {item.label}
                      </a>
                    ) : (
                      <HashLink hash={item.hash} className="site-footer__link">
                        {item.label}
                      </HashLink>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="container site-footer__bottom">
        <span>&copy; 2026 Galbha Remedies. All Rights Reserved.</span>
        <button
          type="button"
          className="site-footer__disclaimer-trigger"
          onClick={() => setDisclaimerOpen(true)}
        >
          Disclaimer
        </button>
      </div>

      <DisclaimerModal open={disclaimerOpen} onClose={() => setDisclaimerOpen(false)} />
    </footer>
  );
}
