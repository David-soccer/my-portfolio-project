import React, {useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import 'aos/dist/aos.js'
const Board = () => {
  useEffect(()=> {
  
    AOS.init({duration: 2000});
  
  }, [])
  return ( 
 <div className=''>
  <div className='container my-5'>
  <h2 className='text-center'>Board Of Directors</h2>
     <div className='d-flex   '>
       <div class="card m-3" data-aos="fade-right">
      <div class="card-body">
      <h5 class="card-title">Special title treatment</h5>
      <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
      </div>
      <div class="card m-3" data-aos="fade-up">
      <div class="card-body">
      <h5 class="card-title">Special title treatment</h5>
      <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
      </div>
      <div class="card m-3" data-aos="fade-left">
      <div class="card-body">
      <h5 class="card-title">Special title treatment</h5>
      <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
      </div>
     </div>
    </div>
 </div>
 
  )
}

export default Board
