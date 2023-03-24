import React from 'react'
import {Container, Nav, Navbar} from 'react-bootstrap'

export default function NavBar({user}) {
  return (
    <div>
        {user?
    <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand ><h3 className='nav-link-text-brand'>Flashing Cards</h3></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link className='nav-link-text' href="/">Home</Nav.Link>
            <Nav.Link className='nav-link-text' href="/decklist">My Decks</Nav.Link>
            <Nav.Link className='nav-link-text' href="/alldecks">Browse Decks</Nav.Link>
            <Nav.Link className='nav-link-text' href="/login">Log Out</Nav.Link>
          </Nav>
        </Container>
      </Navbar>:
      <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand><h3 className='nav-link-text-brand'>Flashing Cards</h3></Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link className='nav-link-text' href="/login">Login</Nav.Link>
          <Nav.Link className='nav-link-text' href="/">Home</Nav.Link>
        </Nav>
      </Container>
    </Navbar>}
    </div>
  )
}
