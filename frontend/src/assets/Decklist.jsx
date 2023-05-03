import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Decklist() {
  const [decks, setDecks] = useState([])
  function getDecks(){
    let token = localStorage.getItem('token')
    fetch('http://localhost:3000/decks', {
            method:'GET',
            headers:{
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            }
        })
        .then(res=>res.json())
        .then(data=>setDecks(data))
  }
  useEffect(getDecks, [])
  return (
    <div>
      {decks.map(deck=><Card>
      <Card.Body>
        <Card.Title>{deck.name}</Card.Title>
        <Card.Text>
          {deck.description}
        </Card.Text>
        <Button variant="primary">Add Deck</Button>
      </Card.Body>
    </Card>)}
    </div>
  )
}
