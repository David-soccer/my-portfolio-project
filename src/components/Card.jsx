import React from 'react'
import cardOne from '../Images/card-one.jpg'
import cardTwo from './../Images/card-two.jpg'
import cardThree from './../Images/card-three.jpg'
const Card = (props) => {
  return (
    <div>
      <h2 className='text-center text-light'>{props.services}</h2>
    <div className='d-flex w-75 mx-auto mt-3'>
      <div className="card m-3 text-center" data-aos="fade-right">
  <img src={cardOne} className="card-img-top w-100" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Robot wars</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  
  </div>
</div>
<div className="card m-3 text-center "data-aos= "flip-left">
  <img src={cardTwo} className="card-img-top w-100" alt="..."/>
  <div className="card m-3" >
    <h5 className="card-title">Military Rescue</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    
  </div>
</div>
<div className="card m-3 text-center "data-aos= "fade-left">
  <img src={cardThree} className="card-img-top w-100" alt="..."/>
  <div className="card m-3">
    <h5 className="card-title">War Invasion</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    
  </div>
</div>
    </div>
    </div>

  )
}

export default Card
