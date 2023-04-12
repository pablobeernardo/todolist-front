import React from "react";
import { Tab, Tabs } from "react-bootstrap";
import TaskComponent from "./task-component-din";
import TaskCompleted from "./task-completed-din";

interface Props{
    firstTabDescription: string;
}

export default class TaskTabGroup extends React.Component<Props>{
    render(){
        return(
            <Tabs defaultActiveKey="new" id="uncontrolled-tab-example" className="mb-3 ">
                <Tab eventKey="new" title="Lista de Tarefas">
                    <TaskComponent/>
                </Tab>  

                <Tab eventKey="done" title="Tarefas Concluídas">
                    <TaskCompleted/>
                </Tab>  
            </Tabs>
        )
    }
}
