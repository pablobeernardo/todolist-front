import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';


interface Props{
  handleChange: any;
  handleSubmit: any;
}


export default function ModalsTask(props:Props) {
  const [show, setShow] = useState(false);

  const handleClose = () => {    
    setShow(false);
  }
  const handleShow = () => setShow(true);

  const handleSubmit = (event) => {
    props.handleSubmit(event);
    handleClose();
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Nova Tarefa
      </Button>

      <Modal show={show} onHide={handleClose}>
        
        <Modal.Header closeButton>
          <Modal.Title>Nova Tarefa</Modal.Title>
        </Modal.Header>
        
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Digite sua nova tarefa</Form.Label>
              <Form.Control id="task" name="task" onChange={props.handleChange} 
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fechar
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Salvar
          </Button>
        </Modal.Footer>
      
      </Modal>
    </>
  );
}

