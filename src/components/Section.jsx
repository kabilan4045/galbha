import { useReveal } from '../hooks/useReveal';

export default function Section({
  id,
  index,
  label,
  bg = 'paper',
  onDark = false,
  className = '',
  children,
}) {
  const ref = useReveal();

  return (
    <section
      id={id}
      ref={ref}
      data-bg={bg}
      className={`section reveal ${onDark ? 'on-dark' : ''} ${className}`.trim()}
    >
      <div className={`container section-grid`}>
        <div className="section-rail" aria-hidden="true">
          <span className="section-rail__code">§{index}</span>
          <span className="section-rail__label">{label}</span>
          <span className="section-rail__line" />
        </div>
        <div className="section-main">{children}</div>
      </div>
    </section>
  );
}
