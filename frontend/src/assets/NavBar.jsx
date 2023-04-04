import React, {useState, useEffect} from 'react'
import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap'

export default function NavBar({user, handleLogout}) {
  return (
    <div>
        {user?
    <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand ><h3 className='nav-link-text-brand'>Flashing Cards</h3></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }}
            navbarScroll>
            <Nav.Link className='nav-link-text' href="/">Home</Nav.Link>
            <NavDropdown title="My Decks" id="navbarScrollingDropdown">
              {user.decks.map(deck => <NavDropdown.Item key = {deck.id} href={`/deck/${deck.id}`}>{deck.name}</NavDropdown.Item>)}
            </NavDropdown>
            <Nav.Link className='nav-link-text' href="/alldecks">Browse Decks</Nav.Link>
            <Nav.Link className='nav-link-text' href="/login" onClick = {handleLogout}>Log Out</Nav.Link>
          </Nav>
          </Navbar.Collapse>
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
