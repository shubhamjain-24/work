import React from 'react'
import './Button.css'
import { IoIosReturnRight } from "react-icons/io";
const Button = ({title = "Hire Me"}) => {
  return (
    <>
    <div className="Button">
      <span className='btn_span'>{title}</span>  
      <IoIosReturnRight className='btn_icon'/>
    </div>
    </>
  )
}

export default Button