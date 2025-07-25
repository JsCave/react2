import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function About() {
  return (
    <>
<div className='bg-info text-white text-center py-5'>
<div className="container mt-5">

<div className='h1 fw-bolder text-uppercase'>about component</div>
<div><div className='line'></div><i class="fa-solid fa-star mx-3"></i><div className='line'></div></div>

<div className='row text-start'>
  <p className='col-lg-6 col-md-12'> Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization. </p>
  <p className='col-lg-6 col-md-12'> Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization. </p>
</div>
</div>
</div>
</>
  )
}

export default About
