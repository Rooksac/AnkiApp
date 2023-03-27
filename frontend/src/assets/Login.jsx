import React from 'react'
import Form from 'react-bootstrap/Form'

export default function Login() {
  return (
    <div>
    <Form>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="Enter Username" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
    </Form>
    <a href = '/signup'>Dont have an account yet? Sign up!</a>
    </div>
  )
}
