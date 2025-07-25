import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {NavLink , Link} from 'react-router-dom'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'


function NavBar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
<nav className={`navbar navbar-expand-lg bg-dark z-3 position-fixed w-100 ${scrolled ? 'scrolled-navbar' : 'p-4'}`}>
  <div className="container">
    <Link className="navbar-brand h1 text-white fw-bolder" to="/Home">Start FrameWork</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <NavLink className="nav-link text-white fw-bolder text-uppercase" aria-current="page" to="/About">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-white fw-bolder text-uppercase" to="/Portfolio">Portfolio</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-white fw-bolder text-uppercase" to="/Contact">Contact</NavLink>
        </li>

      </ul>
    </div>
  </div>
</nav>

    </>
  )
}

export default NavBar
