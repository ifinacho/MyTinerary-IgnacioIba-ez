import React from 'react'
import { useState } from 'react'
import '../styles/Header.css'
import Navbar from './Navbar'

export default function Header() {
  let [show, setShow] = useState(false)
  const handleShow = () => {
    setShow(!show)
  }
  return (
    <header>
      {
        show
      ?<><a href=""><img className="logo-mytinerary" src="LogoMyTinerary.png" alt="logo-mytinerary" /></a>
      <Navbar />
      <a href=""><img className="logo-usuario" src="ImagenLogoUsuario.png" alt="imagen-logo-usuario" /></a></>
      : null
      }
      <button onClick={handleShow}>Show menu</button>
    </header>
  )
}



