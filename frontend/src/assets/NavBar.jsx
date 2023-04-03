import React from 'react'
import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap'

export default function NavBar({user, handleLogin}) {
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
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className='nav-link-text' href="/alldecks">Browse Decks</Nav.Link>
            <Nav.Link className='nav-link-text' href="/login" onClick = {()=>handleLogin('')}>Log Out</Nav.Link>
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
