import React from 'react'
import '../styles/Footer.css'
import Navbar from './Navbar'

export default function Footer() {
  return (
    <footer>
      <Navbar />
      <div>
        <h4>Contactanos</h4>
        <ul>
          <li>Teléfono: (4488)-559988</li>
          <li>Celular: +54 3886-403020</li>
          <li>Email: <a href="mailto:contactmt@mytinerary.com">contactmt@mytinerary.com</a></li>
        </ul>
      </div>
      <div>
        <h4>Redes Sociales</h4>
        <ul>
          <li>Instagram: <a href="www.instagram.com/MyTinerary">www.instagram.com/MyTinerary</a></li>
          <li>Facebook: <a href="www.facebook.com/MyTinerary">www.facebook.com/MyTinerary</a></li>
        </ul>
      </div>
    </footer>
  )
}
