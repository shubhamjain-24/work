import React from "react";
import "./Products.css";
import Product from "./Product";
import img1 from '../../Images/sp1.gif'
import img2 from '../../Images/vervex.png'
import img3 from '../../Images/bbc.gif'
import img4 from '../../Images/loan.gif'
import img5 from '../../Images/shipup.png'
import img6 from '../../Images/Tantukosh.png'
const ProductMain = () => {
  var Products = [
    {
      title: "SOPIFY",
      description:
        "Successfully conceived and executed Sopify, a freelancing venture specializing in crafting meticulous SOPs and assignments for students pursuing education abroad. Designed and developed the entire frontend, coupled with a streamlined backend portal, enabling seamless online office operations for enhanced efficiency.",
      live: true,
      case: false,
      background:"skyblue",
      image:img1,  
      link: "https://www.visaforshiksha.com/"
    },
    {
      title: "VERVEX",
      description:
        "Elevated the online presence of tech startup Vervex through advanced website design, showcasing expertise in React. Spearheaded the end-to-end development of the project, contributing to a sophisticated and user-friendly digital platform.",
      live: true,
      case: false,
      image:img2,
      background:"#7808b1",
      link:"https://vervex.co.in/"
    },
    {
      title: "Beyond Bharat Consultancy",
      description:
        "Contributed to the success of Beyond Bharat Consultancy by designing an impactful digital presence, facilitating seamless student consultations for those aspiring to pursue education abroad.",
      live: true,
      case: false,
      image:img3,
      background:"#d0851c",
      link:"https://www.beyondbharatconsultancy.com/"
    },
    {
      title: "Tantukosh",
      description:
        "Crafted with precision and passion, Tantukosh embodies elegance in every stitch. Our clothing brand's essence is mirrored in its website, meticulously designed in Figma and brought to life with React JS.",
      live: true,
      case: false,
      image:img6,
      background:"	#76944c",
      link:"https://shubham-project-rust.vercel.app/",
    },
    {
      title: "Snap Funds",
      description:
        "Designed and implemented a robust Loan Management System using the MERN stack, streamlining the loan application process with user-friendly interfaces and secure data handling.",
      live: true,
      case: true,
      image:img4,
      background:"lightgreen",
      link:"https://snapfundsapp.vercel.app/",
      git:"https://github.com/shubhamjain-24/snapfundsapp"
    },
    {
      title: "Ship Up",
      description:
        "Designed and developed a sleek static website using React JS, seamlessly bringing my Figma design to life for a polished and engaging user experience.",
      live: true,
      case: true,
      image:img5,
      background:"tomato",
      link:"https://ship-up-tu1a.vercel.app/",
      git:"https://github.com/shubhamjain-24/SHIP_UP"
    },
  ];
  return (
    <>
    {Products.map((val, index)=><Product val={val} />)}
      
    </>
  );
};

export default ProductMain;
