import React from "react";
import { ListGroup, Row, Col, FormCheck, Button } from "react-bootstrap";
import ButtonEditTask from "./button-edit";
import TaskModel from "../../../shared/models/task-model";
import { FaTrash } from "react-icons/fa";
import ModalExcluir from "./button-excluir";


interface Props {
  tasks: TaskModel[];
  handleDeleteTask: any;
  handleConfirm: any;
  handleCancel: any;
  propsOpen: any;
  showModal: boolean;
  
}

interface State {
  selectedTasks: number[];
  
}

export default class TaskComponent extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      selectedTasks: [],
      
    };
    this.handleCheck = this.handleCheck.bind(this);
  }
  

  handleCheck(id: number) {
    const {tasks} = this.props;
    const selectedTasks = [...this.state.selectedTasks];
    const taskIndex = tasks.findIndex(task => task.id === id);
    const task = tasks[taskIndex];
    task.status = !task.status;

    if (task.status) {
      selectedTasks.push(id);
    } else {
      const index = selectedTasks.indexOf(id);
      if (index > -1) {
        selectedTasks.splice(index, 1);
      }
    }

    tasks.splice(taskIndex, 1);
    tasks.push(task);

    this.setState({ selectedTasks });
  }

  

  render() {

    const {tasks} = this.props;

    return (
      <ListGroup>
        {tasks.map(task => (
          <ListGroup.Item
            action
            variant="secondary"
            className={`mb-2 ${task.status ? "text-decoration-line-through" : ""}`}
            key={task.id}
          >
            <Row className="d-flex flex-row">
              <Col className="mt-1" sm="1">
                <FormCheck checked={task.status} onChange={() => this.handleCheck(task.id)} />
              </Col>
              <Col className="mt-1 ">
                <span>{task.taskDescription}</span>
              </Col>
              <Col className="itemRight">
                <ButtonEditTask />
                <Button onClick={this.props.propsOpen} variant="danger" className="btn-sm mx-2" >
                   <FaTrash /> Excluir
                </Button>
                <ModalExcluir showModal={this.props.showModal} handleConfirm={this.props.handleConfirm} handleCancel={this.props.handleCancel} propsOpen={this.props.propsOpen} handleDeleteTask={this.props.handleDeleteTask} />
              </Col>
            </Row>
          </ListGroup.Item>
        ))}
      </ListGroup>
    );
  }
}
