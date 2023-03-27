import { useState } from 'react'
import {Route, Routes} from "react-router-dom"
import './App.css'
import Home from './assets/Home'
import Login from './assets/Login'
import NavBar from './assets/NavBar'
import Decklist from './assets/Decklist'
import DecksContainer from './assets/DecksContainer'
import Signup from './assets/Signup'

function App() {
  const [user, setUser] = useState({name:'Johanna'})

  return (
    <div className="App">
      <NavBar user = {user}/>
      <Routes>
        <Route path = '/' element = {<Home user = {user}/>} />
        <Route path = '/login' element = {<Login />} />
        <Route path = '/signup' element = {<Signup />} />
        <Route path = '/decklist' element = {<Decklist />} />
        <Route path = '/alldecks' element = {<DecksContainer />} />
      </Routes>
    </div>
  )
}

export default App
