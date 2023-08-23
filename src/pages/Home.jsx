import React from 'react'
import { useState } from 'react'
import '../styles/Home.css'
import Welcome from '../components/Welcome'
import Carrousel from '../components/Carrousel'

export default function Home() {

  let [counter, setCounter] = useState(0)

  const handleAdd = () => {
    setCounter(counter + 1)
  }
  const handleReset = () => {
    setCounter(0)
  }

  return (
    <div>
      {/*<h1>Home</h1>
      <p>Contador: {counter}</p>
      <button onClick={handleAdd}>sumar</button>
      <button onClick={handleReset}>reset</button>*/}
      <Welcome />
      <Carrousel />
    </div>
  )
}

