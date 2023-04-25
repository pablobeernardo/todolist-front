import { Button, Modal } from 'react-bootstrap';
import React from 'react';
import TaskModel from '../../../shared/models/task-model';

interface Props {
  handleConfirm: any;
  showModal: boolean;
  task: TaskModel;
  handleOpenCloseModal: any;
}


export default function ModalExcluir(props: Props) {

  return (
    <>

      <Modal show={props.showModal} onHide={props.handleOpenCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmar exclusão</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Tem certeza que deseja excluir a tarefa?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleOpenCloseModal}>
            Cancelar
          </Button>
          <Button variant="danger" onClick={() => props.handleConfirm(props.task, 'delete')}>
            Excluir
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
