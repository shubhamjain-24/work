import React from 'react'
import './Cards.css'
import Card from './Card'

const Cards = () => {
    const hoverEffect2 = 
         'linear-gradient(54deg, rgba(226,0,255,1) 3%, rgba(121,9,119,1) 80%, rgba(127,8,100,1) 100%)'
      const hoverEffect1 = 'lightgrey'
  return (
    <>
    <div className="Cards_mainContainer">
        <div className="Cards_subContnainer">
            <Card width={"30%"} start={false}  para={true} hover={hoverEffect1} />
            <Card width={"70%"} start={true} para={false} hover ={hoverEffect2}/>
        </div>
    </div>
    </>
  )
}

export default Cards