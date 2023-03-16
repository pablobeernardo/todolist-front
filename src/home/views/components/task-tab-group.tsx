import React from "react";
import { ListGroup, Row, Col, FormCheck, Tab, Tabs } from "react-bootstrap";

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
            </Tabs>
)
    }
        
}

