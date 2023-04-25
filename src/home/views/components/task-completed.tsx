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
    handleOpenCloseModal: any;
  }

interface Props {

}

export default class TaskCompleted extends React.Component<Props>{
    render() {
        return (
            <ListGroup>
                {this.props.tasks.map(task => (
                    <ListGroup.Item action variant='secondary' className="mb-2 ">
                        <Row className="d-flex flex-row">
                            <Col className="mt-1" sm='1'>
                                <FormCheck></FormCheck>
                            </Col>
                            <Col className="mt-1 ">
                                <span>{task.taskDescription}</span>
                            </Col>
                            <Col className="itemRight" >
                            <Button onClick={this.props.propsOpen} variant="danger" className="btn-sm mx-2" >
                                <FaTrash /> Excluir
                            </Button>
                            <ModalExcluir 
                                handleOpenCloseModal={this.props.handleOpenCloseModal} 
                                showModal={this.props.showModal} 
                                handleConfirm={this.props.handleConfirm}                                                                                                 
                                task={task} />
                            </Col>
                        </Row>
                    </ListGroup.Item>
                ))}
            </ListGroup>

        )
    }
}