import React from 'react'
import './app.css'
import Navbar from './components/Navbar/Navbar'
import Work from './components/Work/Work'
import Stripes from './components/Stripe/Stripes'
import ProductMain from './components/Product/ProductMain'
import Marques from './components/Marquee/Marques'
import Cards from './components/Cards/Cards'
import Footer from './components/Footer/Footer'
const App = () => {
  return (
    <div className='app'>
    <Navbar/>
    <Work/>
    <Stripes/>
    <ProductMain/>
    <Marques/>
    <Cards/>
    <Footer/>
    </div>
  )
}

export default App