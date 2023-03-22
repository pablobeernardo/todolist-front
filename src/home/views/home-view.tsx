import React from "react";
import { Card, Col, Container,Row} from "react-bootstrap";
import TaskFormComponent from "./components/task-form-component";
import TaskTabGroup from "./components/task-tab-group";
import { ContainerFull, ContainerContent } from "../../shared/models/views/style";
import NavApp from "../../shared/models/views/navbar";


interface Props{
    
    
}

export default class HomeView extends React.Component<Props >{

    render(){


        return (
            <ContainerFull className="vh-100">
                <NavApp/> 
                <ContainerContent >    
                    <Card className="row horizontal-card-80  ">
                        <Card.Body className="py-5 px-5">                                    
                            <TaskFormComponent />                                    
                            <TaskTabGroup 
                                firstTabDescription="Novas Tarefas" 
                            />                                    
                        </Card.Body>
                    </Card>
                </ContainerContent>
            </ContainerFull>
                            
        );
    }
}