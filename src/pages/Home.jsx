import React from 'react'
import '../styles/Home.css'
import Welcome from '../components/Welcome'
import Carrousel from '../components/Carrousel'

export default function Home() {
  return (
    <div>
      <Welcome />
      <Carrousel />
    </div>
  )
}

