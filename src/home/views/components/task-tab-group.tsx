import React from "react";
import { Tab, Tabs } from "react-bootstrap";
import TaskComponent from "./task-component-din";
import TaskCompleted from "./task-completed-din";
import TaskModel from "../../../shared/models/task-model";

interface Props{
    firstTabDescription: string;
    tasks: TaskModel[];

}

export default class TaskTabGroup extends React.Component<Props>{
    render(){
        return(
            <Tabs defaultActiveKey="new" id="uncontrolled-tab-example" className="mb-3 ">
                <Tab eventKey="new" title="Lista de Tarefas">
                    <TaskComponent tasks={this.props.tasks}
 />
                </Tab>  

                <Tab eventKey="done" title="Tarefas Concluídas">
                    <TaskCompleted/>
                </Tab>  
            </Tabs>
        )
    }
}
