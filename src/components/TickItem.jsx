import { Check } from 'lucide-react';

export default function TickItem({ children }) {
  return (
    <li className="tick-item">
      <span className="tick-badge" aria-hidden="true">
        <Check size={11} strokeWidth={3} />
      </span>
      <span>{children}</span>
    </li>
  );
}
