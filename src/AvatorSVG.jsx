// components/AvatarSVG.jsx
export default function AvatarSVG({ name = "Dr. Olivia Harper", size = 64, rounded = true }) {
  // Build initials from the name
  const initials = name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map(n => n[0]?.toUpperCase())
    .join("");

  const radius = size / 2;

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      role="img"
      aria-label={`${name} avatar`}
      className={rounded ? "rounded-full" : ""}
    >
      <defs>
        <linearGradient id="avatarGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1f2937" />   {/* gray-800 */}
          <stop offset="100%" stopColor="#374151" /> {/* gray-700 */}
        </linearGradient>
      </defs>

      {/* Background circle */}
      <circle cx={radius} cy={radius} r={radius} fill="url(#avatarGrad)" />

      {/* Subtle ring */}
      <circle
        cx={radius}
        cy={radius}
        r={radius - 2}
        fill="none"
        stroke="#4b5563"   // gray-600
        strokeWidth="2"
        opacity="0.7"
      />

      {/* Doctor “stethoscope” mark (simple) */}
      <g transform={`translate(${radius}, ${radius})`} opacity="0.25">
        <path d="M-10 -4 a6 6 0 1 0 12 0 v6 a8 8 0 0 1 -16 0z" fill="#9ca3af" />
        <circle cx="12" cy="6" r="3" fill="#9ca3af" />
        <rect x="9" y="2.5" width="6" height="1.5" rx="0.75" fill="#9ca3af" />
      </g>

      {/* Initials */}
      <text
        x="50%"
        y="52%"
        dominantBaseline="middle"
        textAnchor="middle"
        fontSize={Math.round(size * 0.42)}
        fontWeight="700"
        fill="#ffffff"
        style={{ fontFamily: "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto" }}
      >
        {initials || "DR"}
      </text>
    </svg>
  );
}

