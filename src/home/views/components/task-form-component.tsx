import React from "react";
import { Form, Col, Button } from "react-bootstrap";
import Example from "../modal";

interface Props{

}


export default class TaskFormComponent extends React.Component<Props>{

    render(){
        return(
            <Form className="d-flex justify-content-between mb-5">
                <Col sm='11'>
                    <Example/>
                </Col>
            </Form>
        )
    }

}

