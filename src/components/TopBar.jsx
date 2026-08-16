import { Phone, Mail, MapPin } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="topbar">
      <div className="container topbar__inner">
        <span className="topbar__item topbar__item--location mono">
          <MapPin size={12} aria-hidden="true" />
          Chandigarh, India
        </span>
        <a href="tel:+917879555517" className="topbar__item mono">
          <Phone size={12} aria-hidden="true" />
          <span className="topbar__item-text">+91 7879555517</span>
        </a>
        <a href="mailto:info@galbharemedies.com" className="topbar__item mono">
          <Mail size={12} aria-hidden="true" />
          <span className="topbar__item-text">info@galbharemedies.com</span>
        </a>
      </div>
    </div>
  );
}
