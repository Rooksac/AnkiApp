import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'

export default function DeckLanding() {
    const [deck, setDeck] = useState({})
    const params = useParams()
    function getDeck(){
        let token = localStorage.getItem("token");
        fetch(`http://localhost:3000/decks/${params.id}`, {
            method:'GET',
            headers:{
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            }
        })
        .then(res=>res.json())
        .then(data=>setDeck(data))
    }
    useEffect(getDeck, [])
  return (
    <div>
        <h2>{deck.name}</h2>
        <h4>{deck.description}</h4>
        <button>Study</button>
        <button>Edit Deck</button>
    </div>
  )
}
