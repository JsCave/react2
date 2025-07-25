import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import style from  './Portfolio.module.css'

function Portfolio() {
 const [img,setImg]=useState("")
  const [show, setShow] = useState(false);

  function handleOpen(src){
    setImg(src);
    setShow(true);
  }

  function handleClose(){
    setShow(false);
  }

  function Modal({img}) {
    return (
      <>
        <div id="outSider" className={`${style.modal} ${show ? style.showModal : ''}`} onClick={(e)=>{
          if(e.target.id=="outSider"){handleClose()}}}>
        <img src={img}  className={style['image']}/>
        </div>
      </>
    )
  }
  


  return (
    <>
<div className='bg-white text-black text-center py-5'>
<div className="container mt-5">

<div className='h1 fw-bolder text-uppercase'>portfolio component</div>
<div><div className='bline'></div><i className="fa-solid fa-star mx-3"></i><div className='bline'></div></div>

<div className='row g-3'>
<div className='col-lg-4 col-md-6 col-sm-12'>
  <div className='position-relative' onClick={() => handleOpen('poert1.png')}>
<img src="poert1.png" width="100%" className='rounded-1'/>
<div className='Layer rounded-1 d-flex justify-content-center align-content-center align-items-center text-white fw-bolder fa-10x'><i className="fa-solid fa-plus"></i></div>
</div>
</div>
<div className='col-lg-4 col-md-6 col-sm-12'>
  <div className='position-relative' onClick={() => handleOpen('port2.png')}>
<img src="port2.png" width="100%" className='rounded-1'/>
<div className='Layer rounded-1 d-flex justify-content-center align-content-center align-items-center text-white fw-bolder fa-10x'><i className="fa-solid fa-plus"></i></div>
</div>
</div>
<div className='col-lg-4 col-md-6 col-sm-12'>
  <div className='position-relative' onClick={() => handleOpen('port3.png')}>
<img src="port3.png" width="100%" className='rounded-1'/>
<div className='Layer rounded-1 d-flex justify-content-center align-content-center align-items-center text-white fw-bolder fa-10x'><i className="fa-solid fa-plus"></i></div>
</div>
</div>
<div className='col-lg-4 col-md-6 col-sm-12'>
  <div className='position-relative' onClick={() => handleOpen('poert1.png')}>
<img src="poert1.png" width="100%" className='rounded-1'/>
<div className='Layer rounded-1 d-flex justify-content-center align-content-center align-items-center text-white fw-bolder fa-10x'><i className="fa-solid fa-plus"></i></div>
</div>
</div>
<div className='col-lg-4 col-md-6 col-sm-12'>
  <div className='position-relative' onClick={() => handleOpen('port2.png')}>
<img src="port2.png" width="100%" className='rounded-1'/>
<div className='Layer rounded-1 d-flex justify-content-center align-content-center align-items-center text-white fw-bolder fa-10x'><i className="fa-solid fa-plus"></i></div>
</div>
</div>
<div className='col-lg-4 col-md-6 col-sm-12'>
  <div className='position-relative' onClick={() => handleOpen('port3.png')}>
<img src="port3.png" width="100%" className='rounded-1'/>
<div className='Layer rounded-1 d-flex justify-content-center align-content-center align-items-center text-white fw-bolder fa-10x'><i className="fa-solid fa-plus"></i></div>
</div>
</div>
</div>
</div>
</div>
{show && <Modal img={img} />}
</>
  )
}

export default Portfolio
