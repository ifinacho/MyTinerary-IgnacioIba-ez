import React, { Children } from 'react'
import '../styles/Main.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Main({children}) {
  return (
    <>
      <Header />
        {children}
      <Footer />
    </>
  )
}
