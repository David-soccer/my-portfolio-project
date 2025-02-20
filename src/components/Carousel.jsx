import React from 'react'
import image1 from '../Images/carousel-one.jpg'
import image2 from '../Images/carousel-two.jpg'
import image3 from '../Images/carousel-three.jpg'
import '../css/carousel.css'

const Carousel = () => {
  return (
    <div>
      <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={image1} class="d-block w-100 carousel-image" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={image2} class="d-block w-100 carousel-image" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={image3} class="d-block w-100 carousel-image" alt="..."/>
    </div>
  </div>
</div>
    </div>
  )
}

export default Carousel
