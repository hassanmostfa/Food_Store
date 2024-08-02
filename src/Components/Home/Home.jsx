import React from 'react'
import Hero from './Hero/Hero'
import Menu from './Menu/Menu'
import Offer from './Offer/Offer'
import Dishes from './Dishes/Dishes'
import Discount from './Discount/Discount'
import Download from './Download/Download'
import Team from './Team/Team'
import Blog from './Blog/Blog'
const Home = () => {
  return (
    <div>
      <Hero/>
      <Menu/>
      <Offer/>
      <Dishes/>
      <Discount/>
      <Download/>
      <Team/>
      <Blog/>
    </div>
  )
}

export default Home