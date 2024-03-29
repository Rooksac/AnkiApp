import { useState, useEffect } from 'react'
import {Route, Routes} from "react-router-dom"
import './App.css'
import Home from './assets/Home'
import Login from './assets/Login'
import NavBar from './assets/NavBar'
import Decklist from './assets/Decklist'
import Signup from './assets/Signup'
import DeckLanding from './assets/DeckLanding'
import DeckEdit from './assets/DeckEdit'
import DeckStudy from './assets/DeckStudy'
import CreateDeck from './assets/CreateDeck'
import CardEdit from './assets/CardEdit'
import CardAdd from './assets/CardAdd'

function App() {
  const [user, setUser] = useState('')

  function handleLogin(user){
    setUser(user)
  }
  //keeps user logged in on page reload
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
        <Route path = '/alldecks' element = {<Decklist />} />
        <Route path = 'deck/:id' element = {<DeckLanding />} />
        <Route path = 'studydeck/:id' element = {<DeckStudy />} />
        <Route path = 'editdeck/:id' element = {<DeckEdit />} />
        <Route path = 'createdeck' element = {<CreateDeck />} />
        <Route path = 'editcard/:id' element = {<CardEdit />} />
        <Route path = 'addcard/:id' element = {<CardAdd />} />
      </Routes>
    </div>
  )
}

export default App
