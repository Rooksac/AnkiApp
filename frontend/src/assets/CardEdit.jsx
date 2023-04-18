import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Swal from 'sweetalert2';

export default function CardEdit() {
    const params = useParams()
    const initialState = {front_text:'', back_text:'', front_image:'', back_image:''}
    const [card, setCard] = useState(initialState)
    
    function handleChange(e){
        let {name, value} = e.target
        setCard({...card, [name]:value})
    }

    function getCard(){
        let token = localStorage.getItem('token')
        fetch(`http://localhost:3000/cards/${params.id}`, {
            method:'GET',
            headers:{
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            }
        })
        .then(res=>res.json())
        .then(data=>setCard(data))

    }

    function handleUpdate(){
        let token = localStorage.getItem('token')
        fetch(`http://localhost:3000/cards/${params.id}`, {
            method:'PATCH',
            headers:{
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(card)
        })
        .then((response) => {
            if (response.ok){
              response.json().then((data) => {
              Swal.fire({
                icon: 'success',
                title: 'Success!',
                text: 'Card Updated',
                color: '#FFC107',
                confirmButtonColor: '#FFC107',
              background: '#0D6EFD'
              })
              console.log('Success:', data);}
              
            )
            navigate('/login')}
          else{response.json().then((errors) => {
            console.log(errors)
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: `${errors.error}`,
              color: '#DC3545',
              confirmButtonColor: '#DC3545',
              background: '#0D6EFD'
            })
          });}
    })}

    useEffect(getCard, [])
  return (
    <>
        <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">Front Text</InputGroup.Text>
            <Form.Control
            as="textarea"
            placeholder="Username"
            aria-label="With textarea"
            aria-describedby="basic-addon1"
            onChange = {handleChange}
            name = 'front_text'
            value = {card.front_text}
            />
        </InputGroup>
        <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">Front Image</InputGroup.Text>
            <Form.Control
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
            onChange = {handleChange}
            name = 'front_image'
            value = {card.front_image}
            />
        </InputGroup>
        <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">Back Text</InputGroup.Text>
            <Form.Control
            as="textarea"
            placeholder="Username"
            aria-label="With textarea"
            aria-describedby="basic-addon1"
            onChange = {handleChange}
            name = 'back_text'
            value = {card.back_text}
            />
        </InputGroup>
        <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">Back Image</InputGroup.Text>
            <Form.Control
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
            onChange = {handleChange}
            name = 'back_image'
            value = {card.back_image}
            />
        </InputGroup>
        <Button variant="outline-secondary" id="button-addon1" onClick = {handleUpdate}>Update Card</Button>
    </>
  )
}
