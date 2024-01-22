import React from "react";
import "./Products.css";
import Product from "./Product";

const ProductMain = () => {
  var Products = [
    {
      title: "areqitle",
      description:
        "this os a very basic brand new is the very informtonal tool we can use that to bulid ",
      live: true,
      case: false,
      background:"skyblue",
      image:"https://i.pinimg.com/originals/1f/a3/a8/1fa3a8b47fed64b731f4ebaa91bc17fe.gif"
    },
    {
      title: "TTR",
      description:
        "this os a very basic brand new is the very informtonal tool we can use that to bulid ",
      live: true,
      case: false,
      image:"https://i.pinimg.com/originals/50/de/f7/50def71e356b64bf79b293f9443d3fcb.gif",
      background:"green"
    },
    {
      title: "YIR 2022",
      description:
        "this os a very basic brand new is the very informtonal tool we can use that to bulid ",
      live: true,
      case: true,
      image:"https://i.pinimg.com/originals/eb/f1/eb/ebf1eba7139f95edeae62fe38e23ec38.gif",
      background:"skyblue"
    },
    {
      title: "Yahoo!",
      description:
        "this os a very basic brand new is the very informtonal tool we can use that to bulid ",
      live: true,
      case: true,
      image:"https://cdn.dribbble.com/users/1778144/screenshots/3882985/media/d34dc85196cb7b30eb0d4725fc317693.gif",
      background:"tomato"
    },
  ];
  return (
    <>
    {Products.map((val, index)=><Product val={val} />)}
      
    </>
  );
};

export default ProductMain;
