import { useLocation, useNavigate } from 'react-router-dom';

export default function HashLink({ hash, className, onNavigate, children }) {
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = (event) => {
    event.preventDefault();
    onNavigate?.();

    if (location.pathname === '/') {
      const target = document.querySelector(hash);
      if (target) {
        target.scrollIntoView({
          behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches
            ? 'auto'
            : 'smooth',
          block: 'start',
        });
        window.history.pushState(null, '', hash);
      }
    } else {
      navigate(`/${hash}`);
    }
  };

  return (
    <a href={`/${hash}`} className={className} onClick={handleClick}>
      {children}
    </a>
  );
}
