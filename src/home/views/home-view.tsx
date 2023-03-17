import React from "react";
import { Card, Col, Container,Row} from "react-bootstrap";
import NavApp from "./components/navbar";
import TaskFormComponent from "./components/task-form-component";
import TaskTabGroup from "./components/task-tab-group";


interface Props{
    
    
}

export default class HomeView extends React.Component<Props >{

    render(){


        return (
            <div className="fundoImage">
                <NavApp />
                    <Container className="vh-100">                    
                        <Row className="d-flex justify-content-center align-items-center h-100">
                            <Col>
                                <Card>
                                    <Card.Body className="py-5 px-5">                                    
                                        <TaskFormComponent />                                    
                                        <TaskTabGroup 
                                            firstTabDescription="Novas Tarefas" 
                                        />                                    
                                    </Card.Body>
                                </Card>
                            </Col>                    
                        </Row>
                    </Container>
            </div>            
        );
    }
}