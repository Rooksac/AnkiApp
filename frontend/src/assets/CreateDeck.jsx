import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Swal from 'sweetalert2'


export default function CreateDeck() {
    let initialState = {name:'', description:''}
    const [newDeck, setNewDeck] = useState(initialState)

    function handleChange(e){
        let {name, value} = e.target
        setNewDeck({...newDeck, [name]:value})
    }

    function handleSubmit(){
        let token = localStorage.getItem('token')
        fetch('http://localhost:3000/createdeck', {
            method:'POST',
            headers:{
                'Content-Type':'application/json',
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(newDeck)
        })
        .then((response) => {
            if (response.ok){
              response.json().then((data) => {
              Swal.fire({
                icon: 'success',
                title: 'Success!',
                text: 'New Deck Created!',
                color: '#FFC107',
                confirmButtonColor: '#FFC107',
              background: '#0D6EFD'
              })
              setNewDeck(initialState)
              console.log('Success:', data);}
              
            )}
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
            setNewDeck(initialState)
          });}})
        
    }
  return (
    <>
        <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">Deck Name</InputGroup.Text>
        <Form.Control
          placeholder="Pick a name for your deck"
          aria-label="DeckName"
          aria-describedby="basic-addon1"
          name = 'name'
          value = {newDeck.name}
          onChange = {handleChange}
        />
        <InputGroup.Text id="basic-addon1">Description</InputGroup.Text>
        <Form.Control 
            as="textarea" 
            aria-label="With textarea"
            name = 'description'
            value = {newDeck.description}
            onChange = {handleChange}
        />
        </InputGroup>
        <button onClick = {handleSubmit}>Create Deck</button>
    </>
  )
}
