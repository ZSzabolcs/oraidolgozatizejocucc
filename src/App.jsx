import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Hangszerek from './pages/Hangszerek'

function App() {
  return (
    <Routes>
      <Route index element={<Hangszerek></Hangszerek>}></Route>
    </Routes>
  )
}

export default App
