const VARIANT_CLASSES = [
  'card-icon-medallion--a',
  'card-icon-medallion--b',
  'card-icon-medallion--c',
];

export default function CardIcon({ icon: Icon, size = 22, variant = 0 }) {
  const variantClass = VARIANT_CLASSES[variant % VARIANT_CLASSES.length];

  return (
    <span className={`card-icon-medallion ${variantClass}`}>
      <Icon size={size} strokeWidth={1.7} aria-hidden="true" />
    </span>
  );
}
