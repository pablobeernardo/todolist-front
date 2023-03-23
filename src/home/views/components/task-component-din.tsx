import React from "react";
import { ListGroup, Row, Col, FormCheck } from "react-bootstrap";
import ButtonExcluir from "./button-excluir";
import ButtonEditTask from "./button-edit";

const tasks = [
    {
      id: 1,
      name: 'Tarefa 1',
    },
    {
      id: 2,
      name: 'Tarefa 2',
    },
    {
      id: 3,
      name: 'Tarefa 3',
    },
    {
      id:4,
      name: 'Tarefa 4'
    },
    {
      id:5,
      name: 'Tarefa 5'
    },
  ];
  


interface Props{
    
}

export default class TaskComponent extends React.Component<Props>{
    render(){
        return(
            <ListGroup>
                {tasks.map(task => (
                    <ListGroup.Item action variant='secondary' className="mb-2 ">
                    <Row className="d-flex flex-row">
                        <Col className="mt-1" sm='1'>
                        <FormCheck></FormCheck>                                        
                        </Col>                     
                        <Col className="mt-1 ">
                        <span>{task.name}</span>
                        </Col>
                        <Col className="itemRight" >
                        <ButtonEditTask />
                        <ButtonExcluir/>
                        </Col>
                    </Row>
                    </ListGroup.Item>                                    
                ))}
            </ListGroup>

        )
    }
}