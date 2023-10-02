import React, {useState, useEffect} from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';


export default function DeckEdit() {
  const params = useParams()
  const navigate = useNavigate()
  const [cards, setCards] = useState([])
  function getCards(){
    let token = localStorage.getItem('token')
        fetch(`http://localhost:3000/editcards/${params.id}`, {
            method:'GET',
            headers:{
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            }
        })
        .then(res=>res.json())
        .then(data=>setCards(data))
  }

  function deleteCard(id){
    let token = localStorage.getItem('token')
    fetch(`http://localhost:3000/deletecard/${id}`, {
      method: 'DELETE',
        headers:{
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
    })
    .then(handleCardDelete(id))
  }

  function handleCardDelete(id){
    let updatedArray = cards.filter(card=>card.id != id)
    setCards(updatedArray)
  }

  useEffect(getCards, [])
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Card Front Text</th>
            <th>Card Front Image</th>
            <th>Card Back Text</th>
            <th>Card Back Image</th>
          </tr>
        </thead>
        <tbody>
          {cards.map((card, i)=>
            <tr>
            <th>{i+1}</th>
            <th>{card.front_text}</th>
            <th><img src = {`${card.front_image}`} /></th>
            <th>{card.back_text}</th>
            <th><img src = {`${card.back_image}`} /></th>
            <th><Button variant="secondary" size="sm" onClick = {()=>navigate(`/editcard/${card.id}`)}>Edit Card</Button></th>
            <th><Button variant="secondary" size="sm" onClick = {()=>deleteCard(card.id)}>Delete Card</Button></th>
          </tr>
          )}
        </tbody>
    </Table>
    <Button variant="secondary" onClick = {()=>navigate(`/addcard/${params.id}`)}>Add New Card</Button>
    </>
  )
}
