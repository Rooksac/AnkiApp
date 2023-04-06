import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function DeckStudy() {
    const params = useParams()
    const [cards, setCards] = useState([])
    const [clicked, setClicked] = useState(true)
    const [showButtons, setShowButtons] = useState(false)

    function handleCardClick(){
        setShowButtons(true)
        setClicked(!clicked)
    }

    function getCards(){
        let token = localStorage.getItem('token')
        fetch(`http://localhost:3000/studycards/${params.id}`, {
            method:'GET',
            headers:{
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            }
        })
        .then(res=>res.json())
        .then(data=>setCards(data))
    }

    function handleRight(){
        let token = localStorage.getItem('token')
        fetch(`http://localhost:3000/rightanswer/${cards[0].id}`, {
            method:'PATCH',
            headers:{
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            }
        })
        let newArray = [...cards]
        newArray.shift()
        setCards(newArray)
        setClicked(true)
        setShowButtons(false)
    }

    function handleWrong(){
        let token = localStorage.getItem('token')
        fetch(`http://localhost:3000/wronganswer/${cards[0].id}`, {
            method:'PATCH',
            headers:{
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            }
        })
        let newArray = [...cards]
        newArray.shift()
        setCards(newArray)
        setClicked(true)
        setShowButtons(false)
    }

    useEffect(getCards, [])
  return (
    <div>
        {cards.length===0?
        <p>Nothing to study here!  Check back later.</p>:
        <Card>
                {showButtons?
                <>
                <Button variant="success" size="lg" onClick = {handleRight}>
                    I knew that one!
                </Button>
                <Button variant="warning" size="lg" onClick = {handleWrong}>
                    Oops better study more
                </Button>
                </>:
                null}
            <Card.Body onClick = {handleCardClick}>
                <Card.Text>
                    {clicked?cards[0].front_text:cards[0].back_text}
                </Card.Text>
            </Card.Body>
            <Card.Img variant="bottom" src={clicked?cards[0].front_image:cards[0].back_image} />
        </Card>
        }
    </div>
  )
}
