import { Button, Modal } from 'react-bootstrap';
import React from 'react';

interface Props{
  handleConfirm: any;
  handleCancel: any;
  propsOpen: any;
  handleDeleteTask:any;
  showModal: boolean;

}


export default function ModalExcluir(props:Props) {
  

  return (
    <>
  
  <Modal show={props.showModal} onHide={props.handleCancel}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmar exclusão</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Tem certeza que deseja excluir a tarefa?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleCancel}>
            Cancelar
          </Button>
          <Button variant="danger" onClick={props.handleDeleteTask}>
            Excluir
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
