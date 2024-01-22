import React, { useState } from "react";
import "./Product.css";
import Button from "../Button/Button";

const Product = ({ val }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [shiftX, setShiftX] = useState(0);
  const [shiftY, setShiftY] = useState(0);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setShiftX(0);
    setShiftY(0); // Reset shifts on leave
  };

  const handleMouseMove = (e) => {
    const containerRect = e.currentTarget.getBoundingClientRect();
    const mouseX = e.clientX - containerRect.left;
    const mouseY = e.clientY - containerRect.top;

    // Calculate the shifts based on cursor position (max shift of 50px)
    const newShiftX = (mouseX - containerRect.width / 2) * 0.3;
    const newShiftY = Math.min(Math.max(mouseY - containerRect.height / 2, -50), 50);

    setShiftX(newShiftX);
    setShiftY(newShiftY);
  };
  return (
    <>
      <div className="product_mainContainer">
      <div
          style={{
            backgroundColor: isHovered ? val.background : 'transparent',
          }}
          className="product_subContainer"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onMouseMove={handleMouseMove}
        >
          <h1 className="product_head">{val.title}</h1>
          <div className="product_imageContainer">
            {isHovered && (
              <img
                className="product_image"
                src={val.image}
                alt=""
                style={{
                  transform: `translate(${shiftX}px, ${shiftY}px)`,
                }}
              />
            )}
          </div>
          <div className="product_details">
            <p style={{ marginBottom: "30px" }}>{val.description}</p>
            <div className="product_buttonContainer">
              {val.live && <Button title="Visit" />}
              {val.case && <Button title="Case Study" />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
