import React from 'react'
import img from './logo.png';
import '../styles/navbar.css';
import { Link } from 'react-router-dom'
import {Navbar, NavDropdown, Form, Nav, Container, Offcanvas, Button} from 'react-bootstrap'
const Navabr = () => {
  return (
      <Navbar expand="lg" className="bg-dark navbar">
          <Container>
              <Navbar.Brand href="#home">
                  <img
                      alt=""
                      src={img}
                      width="40"
                      height="30"
                      className="d-inline-block align-top"
                  />{' '}
                  W3schools
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="ms-auto navcontent">
                      <Nav.Link className="mx-3" as={Link} to ='/'>Home</Nav.Link>
                      <Nav.Link className="mx-3" as={Link} to ='/about'>About</Nav.Link>
                      <Nav.Link className="mx-3" as={Link} to ='/service'>Services</Nav.Link>
                      <Nav.Link className="mx-3" as={Link} to ='/login'>Login</Nav.Link>
                      <Nav.Link className="mx-3" as={Link} to ='/signup'>Signup</Nav.Link>
                  </Nav>
              </Navbar.Collapse>
          </Container>
      </Navbar>
  )
}

export default Navabr