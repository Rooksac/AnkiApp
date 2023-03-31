import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Swal from 'sweetalert2'

export default function Login({handleLogin}) {
  let navigate = useNavigate()
  let initialState = {name:'', password:''}
  const [userData, setUserData] = useState(initialState)
  function handleChange(e){
    let {name, value} = e.target
    setUserData({...userData, [name]:value})
  }
  function handleSubmit(e){
    e.preventDefault()
    fetch('http://localhost:3000/login', {
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify(userData)
    })
    .then((response) => {
      if (response.ok){
        response.json().then((data) => {
        handleLogin(data.user);
        localStorage.setItem('token', data.token)
        Swal.fire({
          icon: 'success',
          title: 'Success!',
          text: 'You have logged in!',
          color: '#FFC107',
          confirmButtonColor: '#FFC107',
        background: '#0D6EFD'
        })
        console.log('Success:', data);}
        
      )
      navigate('/')}
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
    });}})
    setUserData(initialState)
  }
  return (
    <div>
    <Form onSubmit = {handleSubmit}>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="Enter Username" name='name' value = {userData.name} onChange = {handleChange}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name='password' value = {userData.password} onChange = {handleChange}/>
      </Form.Group>
      <button>Sign in</button>
    </Form>
    <a href = '/signup'>Dont have an account yet? Sign up!</a>
    </div>
  )
}
