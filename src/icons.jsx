import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import './icons.css';

function Icon({ icon, fullLink }) {
  const [isHovered, setIsHovered] = useState(false);

  // Define the spring animation config
  const iconSpring = useSpring({
    transform: isHovered ? 'scale(1.25)' : 'scale(1)', // Scale up on hover
  });

  const iconStyle = {
    fontSize: '40px', // Adjust the initial icon size
    padding: '10px', // Add padding around the icon
    color: 'rgb(197, 153, 206)', // Change the color to your desired color
    cursor: 'pointer',
  };

  return (
    <div className="link-container">
      <a
        href={fullLink}
        className="full-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <animated.div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{ ...iconStyle, ...iconSpring }}
        >
          {React.cloneElement(icon)}
        </animated.div>
      </a>
    </div>
  );
}

export default Icon;
