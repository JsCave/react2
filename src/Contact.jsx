import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import style from  './Contact.module.css'

function Contact() {
  const [isUserActive, setIsUserActive] = useState(false);
    const [isAgeActive, setIsAgeActive] = useState(false);
    const [isEmailActive, setIsEmailActive] = useState(false);
    const [isPasswordActive, setIsPasswordActive] = useState(false);
  function handleP(target){
    if(target=="username"){setIsUserActive(true)}
    if(target=="age"){setIsAgeActive(true)}
    if(target=="email"){setIsEmailActive(true)}
    if(target=="password"){setIsPasswordActive(true)}
  }
  
    return (
      <>
  <div className='bg-white text-black text-center py-5'>
  <div className="container">
  
  <div className='h1 fw-bolder text-uppercase'>conatct section</div>
  <div><div className='bline'></div><i className="fa-solid fa-star mx-3"></i><div className='bline'></div></div>
  
  <form className='w-50 mx-auto mt-5'>
  <div className="mb-5 position-relative">
      <input type="text" onInput={(e)=>{if(e.target.value.length<=0){setIsUserActive(false)}else{handleP('username')}}} placeholder='username' className="form-control z-2 position-relative"  aria-describedby="emailHelp"/>
      <p className={`${style.floatingLabel} ${isUserActive ? style.active : ''}`}>Username:</p>
    </div>
    <div className="mb-5 position-relative">
      <input type="text" onInput={(e)=>{if(e.target.value.length<=0){setIsAgeActive(false)}else{handleP('age')}}} placeholder='user age' className="form-control z-2 position-relative" id="exampleInputEmail1" aria-describedby="emailHelp"/>
      <p className={`${style.floatingLabel} ${isAgeActive ? style.active : ''}`}>Age:</p>
    </div>
    <div className="mb-5 position-relative">
      <input type="email" onInput={(e)=>{if(e.target.value.length<=0){setIsEmailActive(false)}else{handleP('email')}}} placeholder='email' className="form-control z-2 position-relative" id="exampleInputEmail1" aria-describedby="emailHelp"/>
      <p className={`${style.floatingLabel} ${isEmailActive ? style.active : ''}`}>Email:</p>
    </div>
    <div className="mb-5 position-relative">
      <input type="password" onInput={(e)=>{if(e.target.value.length<=0){setIsPasswordActive(false)}else{handleP('password')}}} placeholder='password' className="form-control z-2 position-relative" id="exampleInputPassword1"/>
      <p className={`${style.floatingLabel} ${isPasswordActive ? style.active : ''}`}>Password:</p>
    </div>
  
    <button type="submit" className="btn btn-primary me-auto">Send Message</button>
  </form>
  
  </div>
  </div>
  </>
    )
}

export default Contact
