import React, { useEffect, useState } from "react";
import "./Work.css";

const Work = () => {
  const images = [
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png",
      top: "50%",
      left: "50%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png",
      top: "56%",
      left: "44%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png",
      top: "45%",
      left: "56%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef092455ce2cf591e52d1_Rainfall.png",
      top: "60%",
      left: "53%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0ac7e7179d210dc41f0_Summon.png",
      top: "43%",
      left: "40%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0af108a465002975acd_Showcase%20Websites%20(1).png",
      top: "65%",
      left: "55%",
      isActive: false,
    },
  ];

  const [scrollY, setScrollY] = useState(0);
  const [lastActivatedIndex, setLastActivatedIndex] = useState(-1);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const activatedIndex = Math.floor(scrollY / 50);
    if (activatedIndex !== lastActivatedIndex) {
      setLastActivatedIndex(activatedIndex);
    }
  }, [scrollY, lastActivatedIndex]);

  return (
    <>
      <div className="work_mainContainer">
        <div className="work_subContainer">
          <h1 className="work_text">work</h1>
          <div className="work_imgContainer">
            {images.map((elem, index) => (
             
              <img
              key={index}
              className={`work_image ${index <= lastActivatedIndex && lastActivatedIndex !== -1 ? "active" : ""}`}
              src={elem.url}
              alt=""
              style={{ top: elem.top, left: elem.left }}
            />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Work;
