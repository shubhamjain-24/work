import React from "react";
import "./Button.css";
const Button = ({ title = "Hire Me", onClick }) => {
  const handleButtonClick = () => {
    if (title === "Hire Me") {
      window.location.href = "mailto:shubhamjain244122@gmail.com";
    } else {
      if (onClick) {
        onClick();
      }
    }
  };
  return (
    <>
      <div className="Button" onClick={handleButtonClick}>
        <span className="btn_span">{title}</span>
        <span className="btn_icon">→</span>
      </div>
    </>
  );
};

export default Button;
