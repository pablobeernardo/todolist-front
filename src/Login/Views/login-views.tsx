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
import NavApp from '../../shared/models/views/navbar';
import TaskFormComponent from '../../home/views/components/task-form-component';
import TaskTabGroup from '../../home/views/components/task-tab-group';
import ButtonGmail from '../components/button-gmail';
import { ContainerFull, ContainerContent } from '../../shared/models/views/style';

export default function LoginView() {
    const [justifyActive, setJustifyActive] = useState('tab1');;

    const handleJustifyClick = (value) => {
        if (value === justifyActive) {
        return;
        }

        setJustifyActive(value);
    };


  return (
            <ContainerFull className="vh-100">
                <NavApp/> 
                <ContainerContent >
                    <Row className="d-flex justify-content-center align-items-center">
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
                                                <img className="logoImg" src="https://raw.githubusercontent.com/mustafaynk/todolist/master/appgallery/logo.png" alt="Logo TodoList"/>
                                                

                                            </MDBTabsItem>
                                        </MDBTabs>
                                        <ButtonGmail/>
                                    </MDBContainer>                        
                                </Card.Body>
                            </Card>
                        </Col>                    
                    </Row>
                </ContainerContent>
            </ContainerFull>
          
  );
}

