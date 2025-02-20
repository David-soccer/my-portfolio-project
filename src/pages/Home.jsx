import React from 'react'
import Carousel from '../components/Carousel'
import Card from '../components/Card.jsx'
import Who from '../components/Who.jsx'
import '../css/card.css'
import Board from '../components/Board.jsx'
const Home = () => {
  return (
    <div>
     <Carousel/>
     <div className='card-container py-3' >
     <Card services="Our Top Services"/>
     <Card/>
     </div>
    < Who/>
     <Board/>
    </div>
  )
}

export default Home
