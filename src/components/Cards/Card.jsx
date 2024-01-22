// Card.js
import React, { useState } from "react";
import "./Card.css";
import { IoIosArrowRoundForward } from "react-icons/io";

const Card = ({ width, start, para, hover }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const cardStyle = {
    width,
    background: isHovered ? hover : "none",
    transition: "background 0.5s",
  };

  return (
    <>
      <div
        className="card_mainContainer"
        style={cardStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="card_subContainer">
          <div className="card_upperDiv">
            <p className="card_p">One Heading</p>
            <IoIosArrowRoundForward />
          </div>
          <h2 className="card_head">Who we are.</h2>
        </div>
        <div className="card_lowerDiv">
          {start && (
            <>
              <h1 className="main_head">Start a Project</h1>
              <div className="card_button">Contact Us</div>
            </>
          )}

          {para && (
            <>
              <p className="card_lowerText">
                Lorem ipsum dolor sit amet consectetur
              </p>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Card;
