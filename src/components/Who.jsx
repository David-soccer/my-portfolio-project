import React from 'react'
import image from '../Images/military.jpg'
import '../css/who.css'
const Who = () => {
  return (
    <div className='who-container'>
     <h2 className=' pt-3 text-center'> Who We Are</h2>
     <div className='mt-3 w-75 mx-auto d-flex'>
        <img src={image} alt="" className='military m-2' />
        <div className='ms-2'>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam repellat perspiciatis reprehenderit est corporis explicabo eum voluptatem quod voluptatibus quas earum placeat doloribus accusamus deserunt magni error, ab dolorum accusantium.
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam repellat perspiciatis reprehenderit est corporis explicabo eum voluptatem quod voluptatibus quas earum placeat doloribus accusamus deserunt magni error, ab dolorum accusantium.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates asperiores commodi laborum numquam, amet similique! Illum aliquam dolorum quaerat impedit illo error a consequatur iste, perspiciatis maxime eius animi repellendus?
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates asperiores commodi laborum numquam, amet similique! Illum aliquam dolorum quaerat impedit illo error a consequatur iste, perspiciatis maxime eius animi repellendus?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam repellat perspiciatis reprehenderit est corporis explicabo eum voluptatem quod voluptatibus quas earum placeat doloribus accusamus deserunt magni error, ab dolorum accusantium
            </p>
        </div>
     </div>
    </div>
  )
}

export default Who
