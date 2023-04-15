import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';


export default function DeckEdit() {
  const params = useParams()
  const [cards, setCards] = useState([])
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
            <th>{i}</th>
            <th>{card.front_text}</th>
            <th><img src = {`${card.front_image}`} /></th>
            <th>{card.back_text}</th>
            <th><img src = {`${card.back_image}`} /></th>
            <th><Button variant="secondary" size="sm">Edit Card</Button></th>
          </tr>
          )}
        </tbody>
    </Table>
    </>
  )
}
