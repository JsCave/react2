import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './Footer.css'

function Footer() {
  const [count, setCount] = useState(0)

  return (
    <>
<div className='bg-dark text-white text-center py-5'>
<div className="container row mx-auto">
<div className='col-lg-4 col-md-12'>
  <p className='h3'>Location</p>
  <p>2215 John Daniel Drive</p>
  <p>Clark, MO 65243</p>
</div>



<div className='col-lg-4 col-md-12'>
<p className='h3'>AROUND THE WEB</p>
<span><a className='icons'><i className="fa-brands fa-facebook"></i></a><a className='icons'><i className="fa-brands fa-twitter"></i></a><a className='icons'><i className="fa-brands fa-linkedin-in"></i></a><a className='icons'><i className="fa-solid fa-globe"></i></a></span>
</div>



<div className='col-lg-4 col-md-12'>
<p className='h3'>ABOUT FREELANCER</p>
<p>Freelance is a free to use, licensed Bootstrap theme created by Route </p>
</div>

</div>
</div>
<div className='bg-black text-white text-center py-3'>
Copyright © Your Website 2021
</div>
    </>
  )
}

export default Footer
