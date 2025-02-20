import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { CiInstagram } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa6";
import { FiLinkedin } from "react-icons/fi";





const Footer = () => {
  return (
    <div className='bg-primary py-3'>
        <div className='container d-flex justify-content-between'>
          
        <ul className='list-unstyled'>
        <li className='mt-2'><a className=' text-decoration-none text-light' href=""> Home</a></li>
        <li className='mt-2'><a className=' text-decoration-none text-light' href="/services">Services</a></li>
        <li className='mt-2'><a className=' text-decoration-none text-light' href="about">About Us</a></li>
        <li className='mt-2'><a className=' text-decoration-none text-light' href="contact">Contact</a></li>
        <li className='mt-2'><a className=' text-decoration-none text-light' href="blog">Blog</a></li>
     </ul>
     <ul className='list-unstyled'>
        <li className='mt-2'><a className=' text-decoration-none text-light' href=""> News</a></li>
        <li className='mt-2'><a className=' text-decoration-none text-light' href="/services">Affiliate</a></li>
        <li className='mt-2'><a className=' text-decoration-none text-light' href="about">Programs Us</a></li>
        <li className='mt-2'><a className=' text-decoration-none text-light' href="contact">Faqs</a></li>
        <li className='mt-2'><a className=' text-decoration-none text-light' href="blog">Subscribe</a></li>
     </ul>
     <ul className='list-unstyled'>
        <li className='mt-2'><a className=' text-decoration-none text-light' href=""> Terms & conditions</a></li>
        <li className='mt-2'><a className=' text-decoration-none text-light' href="/services">Privacy Policy</a></li>
        <li className='mt-2'><a className=' text-decoration-none text-light' href="about">Events</a></li>
        <li className='mt-2'><a className=' text-decoration-none text-light' href="contact">Courses</a></li>
        <li className='mt-2'><a className=' text-decoration-none text-light' href="blog">Education</a></li>
     </ul>
     <ul className='list-unstyled'>
        <li className='mt-2'><a className=' text-decoration-none text-light' href=""> <FaFacebookF /> Facebook </a></li>
        <li className='mt-2'><a className=' text-decoration-none text-light' href="/services"><FaXTwitter /> Twitter</a></li>
        <li className='mt-2'><a className=' text-decoration-none text-light' href="about"><CiInstagram /> Instagram</a></li>
        <li className='mt-2'><a className=' text-decoration-none text-light' href="contact"><FaWhatsapp /> Whatsapp</a></li>
        <li className='mt-2'><a className=' text-decoration-none text-light' href="blog"><FiLinkedin /> Linkedin </a></li>
     </ul>
         

      
    </div>
    </div>
  )
}

export default Footer
