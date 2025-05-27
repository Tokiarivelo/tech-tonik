import React from 'react';

/**
 * Porte SVG component
 * @param {{ side?: 'left' | 'right'; color1?: string; color2?: string; }} props
 */
export const DoorSVG = ({ side = 'left', color1 = '#394A56', color2 = '#E7E8E7' }) => {
  // side prop can be used later for pivot/origin styling
  return (
    <g className={`door door-${side}`}>
      {/* Fond clair */}
      <rect x="0" y="0" width="200" height="880" fill={color2} />
      {/* Plaque sombre */}
      <rect x="0" y="0" width="200" height="880" fill={color1} />
    </g>
  );
};

/**
 * Text SVG component
 * @param {{ text?: string; color?: string; fontFamily?: string; fontSize?: number; }} props
 */
export const TextSVG = ({
  text = 'THE END PAGE',
  color = '#2C6485',
  fontFamily = "'Just Sans', Times, serif",
  fontSize = 72,
}) => {
  const words = text.split(' ');
  return (
    <g className="text-svg" textAnchor="middle">
      {words.map((word, i) => (
        <text
          key={i}
          x={960}
          y={600 + i * 100}
          fill={color}
          fontFamily={fontFamily}
          fontSize={i === 1 ? fontSize + 24 : fontSize}
        >
          {word}
        </text>
      ))}
    </g>
  );
};

/**
 * Letter T final SVG component
 * @param {{ color?: string; }} props
 */
export const TFinalSVG = ({ color = '#2C6485' }) => (
  <g className="t-final-svg">
    {/* Barre horizontale du T */}
    <rect x="0" y="0" width="120" height="40" fill={color} />
    {/* Barre verticale du T */}
    <rect x="50" y="0" width="20" height="880" fill={color} />
  </g>
);

export default { DoorSVG, TextSVG, TFinalSVG };
