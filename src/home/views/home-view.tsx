import React from "react";
import { Card, Col, Container,Row} from "react-bootstrap";
import TaskFormComponent from "./components/task-form-component";
import TaskTabGroup from "./components/task-tab-group";

interface Props{
    
}

export default class HomeView extends React.Component<Props >{

    render(){

        return (
            <Container className="vh-100">                    
                <Row className="d-flex justify-content-center align-items-center h-100">
                    <Col>
                        <Card>
                            <Card.Body className="py-5 px-5">                                    
                                <TaskFormComponent />                                    
                                <TaskTabGroup 
                                    firstTabDescription="Novas Tarefas" 
                                    secondTabDescription="Tarefas Concluídas"
                                />                                    
                            </Card.Body>
                        </Card>
                    </Col>                    
                </Row>
            </Container>            
        );
    }
}