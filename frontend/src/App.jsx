import { useState } from 'react'
import {Route, Routes} from "react-router-dom"
import './App.css'
import Home from './assets/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Routes>
        <Route path = '/' element = {<Home />} />
      </Routes>
    </div>
  )
}

export default App
