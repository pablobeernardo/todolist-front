import React from "react";
import { Tab, Tabs } from "react-bootstrap";
import TaskComponent from "./task-component-din";
import TaskCompleted from "./task-completed";
import TaskModel from "../../../shared/models/task-model";

interface Props{
    firstTabDescription: string;
    tasks: TaskModel[];
    handleDeleteTask: any;
    handleConfirm: any;
    handleCancel: any;
    propsOpen: any;
    showModal: boolean;

}

export default class TaskTabGroup extends React.Component<Props>{
    render(){
        return(
            <Tabs defaultActiveKey="new" id="uncontrolled-tab-example" className="mb-3 ">
                <Tab eventKey="new" title="Lista de Tarefas">
                    <TaskComponent showModal={this.props.showModal} handleDeleteTask={this.props.handleDeleteTask} handleCancel={this.props.handleCancel} handleConfirm={this.props.handleConfirm} propsOpen={this.props.propsOpen} tasks={this.props.tasks}
 />
                </Tab>  

                <Tab eventKey="done" title="Tarefas Concluídas">
                    <TaskCompleted showModal={this.props.showModal} handleDeleteTask={this.props.handleDeleteTask} handleCancel={this.props.handleCancel} handleConfirm={this.props.handleConfirm} propsOpen={this.props.propsOpen} tasks={this.props.tasks}/>
                </Tab>  
            </Tabs>
        )
    }
}
