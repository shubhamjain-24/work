import React from 'react'
import Marquee from './Marquee'
import './Marques.css'
import img1 from '../../Images/react.png'
import img2 from '../../Images/express.png'
import img3 from '../../Images/mongidb.png'
import img4 from '../../Images/html.png'
import img5 from '../../Images/css.png'
import img6 from '../../Images/tailwind.png'
import img7 from '../../Images/bootstrap.png'
import img8 from '../../Images/figma.png'
import img9 from '../../Images/node.png'
import img10 from '../../Images/javascript.png'

const Marques = () => {
    const images = [
        img1,
        img9,
        img10,
        img2,
        img3,
        img4,
        img5,
        img6,
        img7,
        img8,
        
    ]
  return (
    <>
    {/* <div className="marques_mainContainer">
      {images.map((item, index) => (
        <Marquee key={index} imagesUrls={item} />
      ))}
    </div> */}
       <div className="marquee-container">
       <marquee direction="left" behavior="scroll" scrollamount="5" loop="1">
        {images.map((path, index) => (
          <img key={index} src={path} alt={`Image ${index + 1}`} className="marquee-image" />
        ))}
      </marquee>
      <marquee style={{marginTop:"80px"}} direction="right" behavior="scroll" scrollamount="5">
        {images.map((path, index) => (
          <img key={index} src={path} alt={`Image ${index + 1}`} className="marquee-image" />
        ))}
      </marquee>
    </div>
    </>
  )
}

export default Marques