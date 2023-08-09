import React from 'react'
import '../styles/Header.css'
import Navbar from './Navbar'

export default function Header() {
  return (
    <header>
      <a href="#"><img src="LogoMyTinerary.png" alt="logo-mytinerary" /></a>
      <Navbar />
      <a href="#"><img className="logo-usuario" src="ImagenLogoUsuario.png" alt="imagen-logo-usuario" /></a>
    </header>
  )
}



