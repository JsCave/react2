import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, Navigate, RouterProvider} from 'react-router-dom'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import NavBar from './NavBar.jsx'
import App from './App.jsx'
import Footer from './Footer.jsx'
import About from './About.jsx'
import Portfolio from './Portfolio.jsx'
import Contact from './Contact.jsx'
import Layout from './Layout.jsx'
import NotFound from './NotFound.jsx'


const router=createBrowserRouter([
{path:"" ,element:<Layout/>,children:[
{path:"navbar" ,element:<NavBar/>},
{path:"" ,element:<App/>},
{path:"Home" ,element:<Navigate to={'/'}/>},
{path:"About" ,element:<About/>},
{path:"Portfolio" ,element:<Portfolio/>},
{path:"Contact" ,element:<Contact/>},
{path:"*" ,element:<NotFound/>},
]}
])

createRoot(document.getElementById('root')).render(
  <>
    
    <RouterProvider router={router}></RouterProvider>
   {/*
   <NavBar/>
   <App/>
    <About/>
    <Portfolio/>
    <Contact/>
    <Footer/>
    */}
    
  </>,
)
