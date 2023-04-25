import React from "react";
import { Tab, Tabs } from "react-bootstrap";
import TaskComponent from "./task-component-din";
import TaskCompleted from "./task-completed";
import TaskModel from "../../../shared/models/task-model";

interface Props {
    firstTabDescription: string;
    tasks: TaskModel[];
    handleConfirm: any;
    showModal: boolean;
    handleOpenCloseModal: any

}

export default class TaskTabGroup extends React.Component<Props>{
    render() {
        return (
            <Tabs defaultActiveKey="new" id="uncontrolled-tab-example" className="mb-3 ">
                <Tab eventKey="new" title="Lista de Tarefas">
                    <TaskComponent
                        handleOpenCloseModal={this.props.handleOpenCloseModal}
                        showModal={this.props.showModal}
                        handleConfirm={this.props.handleConfirm}
                        tasks={this.props.tasks}
                    />
                </Tab>

            </Tabs>
        )
    }
}
