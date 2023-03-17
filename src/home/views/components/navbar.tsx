import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React from 'react';


export default function NavApp() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">ToDo List</Navbar.Brand>
           <Navbar.Toggle aria-controls="navbarScroll" />
             <Navbar.Collapse id="navbarScroll">
                <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                </Nav>
                    <Form className="d-flex">
                        <Form.Control type="search" placeholder="Pesquisar" className="me-2" aria-label="Search"/>
                            <div className="container-fluid">
                                <ul className="navbar-nav">
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle d-flex align-items-center" href="#" id="navbarDropdownMenuLink" role="button" data-mdb-toggle="dropdown" aria-expanded="false">
                                            <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img (31).webp" className="rounded-circle" height="22" alt="Avatar" loading="lazy" />
                                        </a>
                                        
                                        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                            <li>
                                                <a className="dropdown-item" href="#">My profile</a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="#">Settings</a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="#">Logout</a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                    </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    
  );
}

