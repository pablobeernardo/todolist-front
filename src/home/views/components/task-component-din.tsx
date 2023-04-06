import React from "react";
import { ListGroup, Row, Col, FormCheck } from "react-bootstrap";
import ButtonExcluir from "./button-excluir";
import ButtonEditTask from "./button-edit";

const tasks = [
  {
    id: 1,
    name: 'Tarefa 1',
    checked: false,
  },
  {
    id: 2,
    name: 'Tarefa 2',
    checked: false,
  },
  {
    id: 3,
    name: 'Tarefa 3',
    checked: false,
  },
  {
    id:4,
    name: 'Tarefa 4',
    checked: false,
  },
  {
    id:5,
    name: 'Tarefa 5',
    checked: false,
  },
];

interface Props {}

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
    const selectedTasks = [...this.state.selectedTasks];
    const taskIndex = tasks.findIndex(task => task.id === id);
    const task = tasks[taskIndex];
    task.checked = !task.checked;

    if (task.checked) {
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
    return (
      <ListGroup>
        {tasks.map(task => (
          <ListGroup.Item
            action
            variant="secondary"
            className={`mb-2 ${task.checked ? "text-decoration-line-through" : ""}`}
            key={task.id}
          >
            <Row className="d-flex flex-row">
              <Col className="mt-1" sm="1">
                <FormCheck checked={task.checked} onChange={() => this.handleCheck(task.id)} />
              </Col>
              <Col className="mt-1 ">
                <span>{task.name}</span>
              </Col>
              <Col className="itemRight">
                <ButtonEditTask />
                <ButtonExcluir />
              </Col>
            </Row>
          </ListGroup.Item>
        ))}
      </ListGroup>
    );
  }
}
