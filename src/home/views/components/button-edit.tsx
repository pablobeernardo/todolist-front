import { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import { FaEdit } from 'react-icons/fa';
import React from 'react';
import TaskModel from '../../../shared/models/task-model';

interface Props{
  handleUpdateTask: any;
  handleConfirm: any;
  task: TaskModel;
  handleChange: any;
  handleOpenCloseEdit: any;
  showModalEdit: boolean;
}


export default function ButtonEditTask(props:Props) {
  
  return (
    <>

      <Modal show={props.showModalEdit} onHide={props.handleOpenCloseEdit}>
        <Modal.Header closeButton>
          <Modal.Title>Editar Tarefa</Modal.Title>
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
          <Button variant="secondary" onClick={props.handleOpenCloseEdit}>
            Cancelar
          </Button>
          <Button variant="primary"onClick={() => props.handleConfirm(props.task, 'update')}>
            Salvar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
