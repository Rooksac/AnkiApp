import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Swal from 'sweetalert2'

export default function Signup() {
    let navigate = useNavigate()
    let initialState = {name:'', password:''}
    const [newUser, setNewUser] = useState(initialState)
    function handleChange(e){
        let {name, value} = e.target
        setNewUser({...newUser, [name]:value})
    }
    function handleSubmit(e){
        e.preventDefault()
        fetch("http://localhost:3000/users", {
            method: "POST",
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUser)
          })
          .then((response) => {
            if (response.ok){
              response.json().then((data) => {
              Swal.fire({
                icon: 'success',
                title: 'Success!',
                text: 'Account Created!',
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
              text: `${errors.errors}`,
              color: '#DC3545',
              confirmButtonColor: '#DC3545',
              background: '#0D6EFD'
            })
          });}})
    }
  return (
    <div>
    <Form onSubmit = {handleSubmit}>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="Enter Username" name = 'name' value = {newUser.name} onChange = {handleChange}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name = 'password' value = {newUser.password} onChange = {handleChange} />
      </Form.Group>
      <button>Create Account</button>
    </Form>
    </div>
  )
}
