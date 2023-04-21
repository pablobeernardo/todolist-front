import React from "react";
import { Card } from "react-bootstrap";
import TaskFormComponent from "./components/task-form-component";
import TaskTabGroup from "./components/task-tab-group";
import { ContainerFull, ContainerContent } from "../../shared/models/views/style";
import NavApp from "../../shared/models/views/navbar";
import UserModel from "../../shared/models/user-model";
import TaskModel from "../../shared/models/task-model";


interface Props{
    user: UserModel | undefined;
    handleChange: any;
    handleSubmit: any;
    handleDeleteTask: any;
    tasks: TaskModel[];
    handleCancel: any;
    handleConfirm: any;
    propsOpen: any;
    showModal: boolean;
    
}

export default class HomeView extends React.Component<Props >{

    render(){


        return (
            <ContainerFull className="vh-100">
                <NavApp user={this.props.user} /> 
                <ContainerContent >    
                    <Card className="row horizontal-card-80  ">
                        <Card.Body className="py-5 px-5">                                    
                            <TaskFormComponent  handleSubmit={this.props.handleSubmit} handleChange={this.props.handleChange} />                                    
                            <TaskTabGroup showModal={this.props.showModal} propsOpen={this.props.propsOpen} handleDeleteTask={this.props.handleDeleteTask} handleConfirm={this.props.handleConfirm} handleCancel={this.props.handleCancel} tasks={this.props.tasks} firstTabDescription="Novas Tarefas"/>                                    
                        </Card.Body>
                    </Card>
                </ContainerContent>
            </ContainerFull>
                            
        );
    }
}