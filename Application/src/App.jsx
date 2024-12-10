import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './components/ui/button'
import { createBrowserRouter } from 'react-router-dom'
import Hero from './components/custom/Hero'
import Footer from './components/custom/Footer'

function App() {

  return (
    <>
      {/* Hero */}
      <Hero/>
      <Footer/>
    </>
  )
}

export default App
