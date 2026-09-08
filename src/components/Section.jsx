import { useReveal } from '../hooks/useReveal';

export default function Section({
  id,
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
      <div className="container section-main">{children}</div>
    </section>
  );
}
