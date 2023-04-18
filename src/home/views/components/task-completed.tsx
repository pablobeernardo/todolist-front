import React from "react";
import { ListGroup, Row, Col, FormCheck } from "react-bootstrap";
import ButtonExcluir from "./button-excluir";
import TaskModel from "../../../shared/models/task-model";


interface Props {
    handleConfirm: any;
    handleCancel: any;
    propsOpen: boolean;
    handleDeleteTask: any;
    tasks: TaskModel[];
  }

const tasksCompleted = [
    {
        id: 1,
        name: 'Tarefa 1 concluída',
    },
    {
        id: 2,
        name: 'Tarefa 2 concluída',
    },
];



interface Props {

}

export default class TaskCompleted extends React.Component<Props>{
    render() {
        return (
            <ListGroup>
                {tasksCompleted.map(task => (
                    <ListGroup.Item action variant='secondary' className="mb-2 ">
                        <Row className="d-flex flex-row">
                            <Col className="mt-1" sm='1'>
                                <FormCheck></FormCheck>
                            </Col>
                            <Col className="mt-1 ">
                                <span>{task.name}</span>
                            </Col>
                            <Col className="itemRight" >
                            <ButtonExcluir handleDeleteTask={this.props.handleDeleteTask} handleCancel={this.props.handleCancel} handleConfirm={this.props.handleConfirm} propsOpen={this.props.propsOpen}/>

                            </Col>
                        </Row>
                    </ListGroup.Item>
                ))}
            </ListGroup>

        )
    }
}