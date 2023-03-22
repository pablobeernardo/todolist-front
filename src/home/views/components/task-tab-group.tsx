import React from "react";
import { ListGroup, Row, Col, FormCheck, Tab, Tabs, Button } from "react-bootstrap";
import ModalEdit from "./button-edit";
import ButtonExcluir from "./button-excluir";
import ButtonEdit from "./button-edit";

interface Props{
    firstTabDescription: string;
}

export default class TaskTabGroup extends React.Component<Props>{
    render(){
        return(
            <Tabs defaultActiveKey="new" id="uncontrolled-tab-example" className="mb-3 ">
                <Tab eventKey="new" title="Lista de Tarefas">
                    <ListGroup>
                        <ListGroup.Item action variant='secondary' className="mb-2 ">
                            <Row className="d-flex flex-row">
                                <Col className="mt-1" sm='1'>
                                    <FormCheck></FormCheck>                                        
                                </Col>                     
                                <Col className="mt-1 ">
                                    <span>Tarefa 1</span>
                                </Col>
                                <Col className="itemRight" >
                                    <ButtonEdit />
                                    <ButtonExcluir/>
                                </Col>
                            </Row>
                        </ListGroup.Item>                                    
                    </ListGroup>
                </Tab>  

                <Tab eventKey="done" title="Tarefas Concluídas">
                    <ListGroup>
                        <ListGroup.Item action variant='secondary' className="mb-2 ">
                            <Row className="d-flex flex-row">
                                <Col className="mt-1" sm='1'>
                                    <FormCheck></FormCheck>                                        
                                </Col>                     
                                <Col className="mt-1">
                                    <span>Tarefa Concluída 1</span>
                                </Col>
                                <Col className="itemRight" >
                                    <ButtonEdit />
                                    <ButtonExcluir/>
                                </Col>
                            </Row>
                        </ListGroup.Item>                                    
                    </ListGroup>
                </Tab>  
            </Tabs>
        )
    }
}
