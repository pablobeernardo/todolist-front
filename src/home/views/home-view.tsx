import React from "react";
import { Alert, Button, Card, Col, Container, Form, FormCheck, ListGroup, Nav, Navbar, NavDropdown, Offcanvas, Row, Tab, Tabs } from "react-bootstrap";

interface Props{

}

interface State {

}

export default class HomeView extends React.Component<Props, State>{

    constructor(props: Props){
        super(props);
        this.state = {};
    }

    render(){
        return (
            <section className="gradient-custom">            
                <Container className="vh-100">                    
                    <Row className="d-flex justify-content-center align-items-center h-100">
                        <Col>
                            <Card>
                                <Card.Body className="py-5 px-5">
                                    <Form className="d-flex justify-content-between">
                                        <Col sm='11'>
                                            <Form.Control type="text" placeholder="Digite aqui a descrição da tarefa" id='description'/>
                                        </Col>
                                        <Button>Add</Button>
                                    </Form>
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    <Tabs defaultActiveKey="new" id="uncontrolled-tab-example" className="mb-3">
                                        <Tab eventKey="new" title="Novas">
                                            <ListGroup>
                                                <ListGroup.Item action variant='secondary' className="mb-2">
                                                    <Row>
                                                        <Col sm='1'>
                                                            <FormCheck></FormCheck>                                        
                                                        </Col>                     
                                                        <Col>
                                                            <span>No style</span>
                                                        </Col>
                                                    </Row>
                                                </ListGroup.Item>                                    
                                            </ListGroup>
                                            <ListGroup>
                                                <ListGroup.Item action variant='secondary' className="mb-2">
                                                    <Row>
                                                        <Col sm='1'>
                                                            <FormCheck></FormCheck>                                        
                                                        </Col>                     
                                                        <Col>
                                                            <span>No style</span>
                                                        </Col>
                                                    </Row>
                                                </ListGroup.Item>                                    
                                            </ListGroup>
                                            <ListGroup>
                                                <ListGroup.Item action variant='secondary' className="mb-2">
                                                    <Row>
                                                        <Col sm='1'>
                                                            <FormCheck></FormCheck>                                        
                                                        </Col>                     
                                                        <Col>
                                                            <span>No style</span>
                                                        </Col>
                                                    </Row>
                                                </ListGroup.Item>                                    
                                            </ListGroup>
                                        </Tab>
                                        <Tab eventKey="done" title="Concluídas">
                                            
                                        </Tab>                                        
                                    </Tabs>
                                    
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>
        );
    }

}