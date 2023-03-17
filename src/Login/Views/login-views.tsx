import React, { useState } from 'react';
import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox
}
from 'mdb-react-ui-kit';
import { Container, Row, Col, Card } from 'react-bootstrap';
import NavApp from '../../home/views/components/navbar';
import TaskFormComponent from '../../home/views/components/task-form-component';
import TaskTabGroup from '../../home/views/components/task-tab-group';

export default function LoginView() {
    const [justifyActive, setJustifyActive] = useState('tab1');;

    const handleJustifyClick = (value) => {
        if (value === justifyActive) {
        return;
        }

        setJustifyActive(value);
    };


  return (
        <div className="fundoImage">
                <Container className="vh-100">                    
                    <Row className="d-flex justify-content-center align-items-center h-100">
                        <Col>
                            <Card>
                                <Card.Body className="py-5 px-5">
                                    <div className='itemCenter'>
                                        <h1>Todo List</h1>
                                        <h3>Organize suas tarefas</h3>  
                                        <br></br>
                                        <hr></hr>       
                                    </div>                           
                                    <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
                                        <MDBTabs pills justify className='mb-5 d-flex flex-row justify-content-between'>
                                            <MDBTabsItem>
                                                <MDBTabsLink onClick={() => handleJustifyClick('tab1')} active={justifyActive === 'tab1'}>
                                                    Login
                                                </MDBTabsLink>
                                            </MDBTabsItem>
                                           
                                            <MDBTabsItem>
                                                <MDBTabsLink onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'}>
                                                    Registre-se
                                                </MDBTabsLink>
                                            </MDBTabsItem>
                                        </MDBTabs>

                                        <MDBTabsContent>

                                            <MDBTabsPane show={justifyActive === 'tab1'}>

                                            <MDBInput wrapperClass='mb-4' label='Email' id='form1' type='email'/>
                                            <MDBInput wrapperClass='mb-4' label='Senha' id='form2' type='password'/>

                                            <MDBBtn className="mb-4 w-100">Entrar</MDBBtn>
                                            <MDBBtn className="mb-4 w-100">Entrar com Gmail</MDBBtn>
                                                <p className="text-center">Não é cadastrado? <a href="#">Registre-se</a></p>

                                            </MDBTabsPane>

                                            <MDBTabsPane show={justifyActive === 'tab2'}>

                                            

                                            <MDBInput wrapperClass='mb-4' label='Nome' id='form1' type='text'/>
                                            <MDBInput wrapperClass='mb-4' label='Sobrenome' id='form1' type='text'/>
                                            <MDBInput wrapperClass='mb-4' label='Email' id='form1' type='email'/>
                                            <MDBInput wrapperClass='mb-4' label='Senha' id='form1' type='password'/>

                                            <div className='d-flex justify-content-center mb-4'>
                                                <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='Eu aceito todos os termos' />
                                            </div>

                                            <MDBBtn className="mb-4 w-100">Cadastrar</MDBBtn>

                                            </MDBTabsPane>

                                        </MDBTabsContent>

                                    </MDBContainer>                        
                                </Card.Body>
                            </Card>
                        </Col>                    
                    </Row>
                </Container>
        </div>   
  );
}

