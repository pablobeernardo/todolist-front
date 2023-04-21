import React from "react";
import { ListGroup, Row, Col, FormCheck, Button } from "react-bootstrap";
import TaskModel from "../../../shared/models/task-model";
import { FaTrash } from "react-icons/fa";
import ModalExcluir from "./button-excluir";


interface Props {
    handleConfirm: any;
    handleCancel: any;
    propsOpen: any;
    handleDeleteTask: any;
    tasks: TaskModel[];
    showModal: boolean;
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
                            <Button onClick={this.props.propsOpen} variant="danger" className="btn-sm mx-2" >
                                <FaTrash /> Excluir
                            </Button>
                            <ModalExcluir showModal={this.props.showModal} handleConfirm={this.props.handleConfirm} handleCancel={this.props.handleCancel} propsOpen={this.props.propsOpen} handleDeleteTask={this.props.handleDeleteTask} />

                            </Col>
                        </Row>
                    </ListGroup.Item>
                ))}
            </ListGroup>

        )
    }
}