import React from "react";
import { Form, Col } from "react-bootstrap";
import ModalsTask from "./modal-newTask";

interface Props{
    handleChange: any;
    handleSubmit: any;

}


export default class TaskFormComponent extends React.Component<Props>{

    render(){
        return(
            <Form className="d-flex justify-content-between mb-5">
                <Col sm='11'>
                    <ModalsTask handleSubmit={this.props.handleSubmit} handleChange={this.props.handleChange}/>
                </Col>
            </Form>
        )
    }

}

