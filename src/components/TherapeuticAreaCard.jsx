import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { THERAPEUTIC_ICONS } from '../data/therapeuticIcons';
import CardIcon from './CardIcon';

export default function TherapeuticAreaCard({ area, variant = 0 }) {
  const Icon = THERAPEUTIC_ICONS[area.icon];

  return (
    <Link to="/products" className="card area-card">
      <CardIcon icon={Icon} variant={variant} />
      <h3>{area.name}</h3>
      <p>{area.description}</p>
      <span className="area-card__link mono">
        View Products <ArrowUpRight size={14} />
      </span>
    </Link>
  );
}
