import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Badge from 'react-bootstrap/Badge'
import Modal from '../Modal'
import Cart from '../screeen/Cart'
import { Usecart } from './ContextReducer'

function Navbar() {
  const [cartView,setCartView]=useState(false)
  let data=Usecart()
 
  return (
    <>
    <div><nav className="navbar navbar-expand-lg navbar-light bg-success">
  <div className="container-fluid">
    <Link className="navbar-brand fs-1 fst-italic" to="/">ZikoolCafe</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link  active fs-5" aria-current="page" to="/home">Home</Link>
        </li>

       
       
       
      </ul>

    <div className='d-flex'>
      <div>
      <Link className="btn bg-white text-success mx-2"  onClick={()=>{{setCartView(true)}}}>My Cart {" "}
    <Badge pill bg="danger">{data.length}</Badge>
    
    </Link>
      </div>
      {cartView?<Modal onClose={()=>setCartView(false)}><Cart/></Modal>:null}
    
      <Link className="btn bg-white text-danger mx-1" to="/">Logout</Link>
        
       
        
    </div>
          
      
    </div>
  </div>
</nav></div>
    </>
  )
}

export default Navbar