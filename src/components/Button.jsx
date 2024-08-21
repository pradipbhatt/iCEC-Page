import React from 'react';
import '../components/Button.css'; // Import the CSS file for styles

const Button = ({ children, ...props }) => {
  return (
    <button className="fancy-button" {...props}>
      {children}
    </button>
  );
};

export default Button;
