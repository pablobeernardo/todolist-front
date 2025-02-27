import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
import { Link } from 'react-router-dom';
import UserModel from '../user-model';
import ImageAvatars from '../../../home/views/components/avatar-button';


interface Props{
  user: UserModel | undefined;

}

export default function NavApp(props:Props) {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Link to="/home" className="subliNone"><Navbar.Brand>Home</Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
             <Navbar.Collapse id="navbarScroll">
                <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                </Nav>
                    <Form className="d-flex">
                        <Form.Control type="search" placeholder="Pesquisar" className="me-2" aria-label="Search"/>
                          <Link to="/profile" className="subliNone"><ImageAvatars user={props.user}/></Link>
                    </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    
  );
}

