// NineDots.jsx
import React from "react";

export default function NineDots({
  size = 20,
  color = "currentColor",
  className = "",
  ...props
}) {
  const dotRadius = 1.5;
  const spacing = 6; // distance between dots
  const dots = [];

  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      dots.push(
        <circle
          key={`${row}-${col}`}
          cx={col * spacing}
          cy={row * spacing}
          r={dotRadius}
          fill={color}
        />
      );
    }
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox="-2 -2 16 16"
      xmlns="http://www.w3.org/2000/svg"
      className={className}   //  allow styling
      {...props}              //  allow onClick, etc.
    >
      {dots}
    </svg>
  );
}

