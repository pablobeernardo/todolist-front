import React from "react";
import { ListGroup, Row, Col, FormCheck, Tab, Tabs, Button } from "react-bootstrap";
import ModalEdit from "../modalEdit";

interface Props{
    firstTabDescription: string;
    secondTabDescription: string;
}

export default class TaskTabGroup extends React.Component<Props>{
    render(){
        return(
            <Tabs defaultActiveKey="new" id="uncontrolled-tab-example" className="mb-3">
                <Tab eventKey="new" title="Lista de Tarefas">
                    <ListGroup>
                        <ListGroup.Item action variant='secondary' className="mb-2">
                            <Row>
                                <Col className="mt-1" sm='1'>
                                    <FormCheck></FormCheck>                                        
                                </Col>                     
                                <Col className="mt-1">
                                    <span>Tarefa 1</span>
                                </Col>
                                <Col className="itemRight" >
                                    <ModalEdit />
                                </Col>
                            </Row>
                        </ListGroup.Item>                                    
                    </ListGroup>
                </Tab>                               
            </Tabs>
)
    }
        
}

