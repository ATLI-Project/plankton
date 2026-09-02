// Radial "8-P" mark reproduced as inline SVG so it scales, tints, and
// stays crisp anywhere in the UI. Matches the red logo tile.
export default function BrandMark({
  size = 32,
  className,
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect width="64" height="64" rx="6" fill="#E32024" />
      <g
        fill="#ffffff"
        fontFamily="Inter, Arial, sans-serif"
        fontWeight={800}
        fontSize={16}
        textAnchor="middle"
      >
        {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
          <text key={deg} x="32" y="20" transform={`rotate(${deg} 32 32)`}>
            P
          </text>
        ))}
      </g>
    </svg>
  );
}
