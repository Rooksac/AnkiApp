import { useState } from 'react'
import {Route, Routes} from "react-router-dom"
import './App.css'
import Home from './assets/Home'
import Login from './assets/Login'
import NavBar from './assets/NavBar'
import Decklist from './assets/Decklist'
import DecksContainer from './assets/DecksContainer'

function App() {
  const [user, setUser] = useState('p')

  return (
    <div className="App">
      <NavBar user = {user}/>
      <Routes>
        <Route path = '/' element = {<Home />} />
        <Route path = '/login' element = {<Login />} />
        <Route path = '/decklist' element = {<Decklist />} />
        <Route path = '/alldecks' element = {<DecksContainer />} />
      </Routes>
    </div>
  )
}

export default App
