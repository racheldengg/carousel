import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

function EnlargingText({ text, fontSize, color }) {
  const [isHovered, setIsHovered] = useState(false);

  // Parse the font size string to a number and calculate the final font size
  const finalFontSize = isHovered ? parseFloat(fontSize) * 1.03 : parseFloat(fontSize);

  // Define the spring animation config
  const textSpring = useSpring({
    fontSize: finalFontSize, // Enlarge text on hover
    color: isHovered ? 'rgb(197, 153, 206)' : 'rgb(197, 153, 206)', // Change color on hover or use the provided color prop
  });

  const textStyle = {
    cursor: 'pointer',
    userSelect: 'none',
    display: 'inline-block'
  };

  return (
    <animated.span
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ ...textStyle, ...textSpring }}
    >
      {text}
    </animated.span>
  );
}

export default EnlargingText;
