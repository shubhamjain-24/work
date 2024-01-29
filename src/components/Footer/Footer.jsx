import React from "react";
import "./Footer.css";

const Footer = () => {
  const socialLinks = {
    LinkedIn: "https://www.linkedin.com/in/shubham-jain-38413b220/",
    Github: "https://github.com/shubhamjain-24",
    Gmail: "mailto:shubhamjain244122@gmail.com",
    Instagram: "https://www.instagram.com/itz.shubhamm._?igsh=eXExNjZ4MGM2NmVy",
  };
  const portfolioLinks = {
    Home: "#",
    Work: "#",
    Experience: "#",
    Skills: "#",
  };
  return (
    <>
      <div className="footer_mainContainer">
        <div className="footer_subContainer">
          <div className="footer_sub1">
            <h1 className="footer_headText">portfolio.</h1>
          </div>
          <div className="footer_sub2">
            <div className="Footer_lists_div">
              <h4
                style={{
                  marginBottom: "10px",
                  color: "gray",
                  textDecoration: "none",
                }}
              >
                Socials
              </h4>
              {Object.entries(socialLinks).map(([platform, link], index) => (
                <a
                  key={index}
                  className="footer_link"
                  style={{ textDecoration: "none" }}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {platform}
                </a>
              ))}
            </div>
            <div className="Footer_lists_div">
              <h4
                style={{
                  marginBottom: "10px",
                  color: "gray",
                  textDecoration: "none",
                }}
              >
                Socials
              </h4>
              {Object.entries(portfolioLinks).map(([platform, link], index) => (
                <a
                  key={index}
                  className="footer_link"
                  style={{ textDecoration: "none" }}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {platform}
                </a>
              ))}
            </div>
            {/* <div className="Footer_lists_div">
              <h4 style={{ marginBottom: "10px", color: "gray" }}>Socials</h4>
              {["Instagram", "Twitter (X?)", "LinkedIn"].map((item, index) => (
                <a className="footer_link"> {item}</a>
              ))}
            </div> */}
            <div className="footer_para">
              <p style={{ textAlign: "right" }}>
                Shubham Jain: Web Developer & Designer | Proficient in React JS,
                crafting digital excellence.
              </p>
              <img
                className="footer_img"
                src={
                  "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63455da11b54556c9d28aa3e_Badge-EnterprisePartner-Blue%201.svg"
                }
                alt=""
                srcset=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
