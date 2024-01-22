import React from 'react'
import './Stripe.css'

const Stripe = ({val}) => {
  return (
    <>
    <div className="stripe_mainContainer">
        <img src={val.url}alt="" srcset="" />
        <span className='Stripe_text'>{val.number}</span>
    </div>
    </>
  )
}

export default Stripe