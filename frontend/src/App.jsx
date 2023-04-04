import { useState, useEffect } from 'react'
import {Route, Routes} from "react-router-dom"
import './App.css'
import Home from './assets/Home'
import Login from './assets/Login'
import NavBar from './assets/NavBar'
import Decklist from './assets/Decklist'
import DecksContainer from './assets/DecksContainer'
import Signup from './assets/Signup'

function App() {
  const [user, setUser] = useState('')

  function handleLogin(user){
    setUser(user)
  }

  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token && !user.name) {
      fetch("http://localhost:3000/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => {
      if (res.ok) {
      res.json().then((user) => {
        setUser(user.user)
      });
    }
    });
  }
}, []);

function handleLogout(){
  localStorage.removeItem("token")
  setUser('') 
}

  return (
    <div className="App">
      <NavBar user = {user} handleLogout = {handleLogout}/>
      <Routes>
        <Route path = '/' element = {<Home user = {user}/>} />
        <Route path = '/login' element = {<Login handleLogin = {handleLogin}/>} />
        <Route path = '/signup' element = {<Signup />} />
        <Route path = '/decklist' element = {<Decklist />} />
        <Route path = '/alldecks' element = {<DecksContainer />} />
      </Routes>
    </div>
  )
}

export default App
