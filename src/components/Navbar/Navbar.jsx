import React from "react";
import "./Navbar.css";
import img1 from "../../Images/logo.png";
import Button from "../Button/Button";
const Navbar = () => {
  return (
    <div className="navContainer">
      <div className="nav_subContainer">
        <img className="nav_logo" src={img1} alt="" srcset="" />
        <div className="link_container">
          {["Home", "Work", "Experience", "", "Skills"].map((elem, index) =>
            elem.length === 0 ? (
              <span
                style={{
                  width: "0.5px",
                  height: "30px",
                  backgroundColor: "gray",
                  opacity: "0.3",
                }}
              ></span>
            ) : (
              <a className="nav_links" href="#">
                {index === 1 && <span className="nav_link_span"></span>}
                {elem}
              </a>
            )
          )}
        </div>
      </div>
      <Button />
    </div>
  );
};

export default Navbar;
