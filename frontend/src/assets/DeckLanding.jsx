import React, {useState, useEffect} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function DeckLanding() {
    const [deck, setDeck] = useState({})
    const params = useParams()
    const navigate = useNavigate()
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
    <Card className="text-center">
      <Card.Header>Flashing Cards</Card.Header>
      <Card.Body>
        <Card.Title>{deck.name}</Card.Title>
        <Card.Text>
          {deck.description}
        </Card.Text>
        <Button variant="primary" onClick = {()=>navigate(`/studydeck/${deck.id}`)}>Study</Button>
        <Button variant="primary" onClick = {()=>navigate(`/editdeck/${deck.id}`)}>Edit</Button>
      </Card.Body>
      <Card.Footer className="text-muted"></Card.Footer>
    </Card>
  )
}
