import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
   <>
   <div className="footer_mainContainer">
    <div className="footer_subContainer">
        <div className="footer_sub1">
            <h1 className='footer_headText'>portfolio.</h1>
        </div>
        <div className="footer_sub2">
            <div className='Footer_lists_div'>
                <h4 style={{marginBottom:"10px" ,color:"gray"}}>Socials</h4>
               { ["Instagram","Twitter (X?)" , "LinkedIn"].map((item,index)=><a className='footer_link'> {item}</a>)}
            </div>
            <div className='Footer_lists_div'>
                <h4 style={{marginBottom:"10px" ,color:"gray"}}>Socials</h4>
               { ["Instagram","Twitter (X?)" , "LinkedIn"].map((item,index)=><a className='footer_link'> {item}</a>)}
            </div>
            <div className="footer_para">
                <p style={{textAlign:"right"}} >
                efokus is a pioneering digital agency driven by design and empowered by technology.
                </p>
                <img className='footer_img' src={"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63455da11b54556c9d28aa3e_Badge-EnterprisePartner-Blue%201.svg"} alt="" srcset="" />
            </div>
        </div>
    </div>
   </div>
   </>
  )
}

export default Footer