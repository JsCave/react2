import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {NavLink , Link} from 'react-router-dom'

function NavBar() {
  const [count, setCount] = useState(0)

  return (
    <>
<nav className="navbar navbar-expand-lg bg-dark p-4">
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
