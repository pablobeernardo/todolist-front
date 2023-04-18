import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { FaTrash } from 'react-icons/fa';
import React from 'react';

interface Props{
  handleConfirm: any;
  handleCancel: any;
  propsOpen: boolean;
  handleDeleteTask:any;

}


export default function ButtonExcluir(props:Props) {
  

  return (
    <>
      <Button variant="danger" className="btn-sm mx-2" >
        <FaTrash /> Excluir
      </Button>

      <Modal showModal={props.propsOpen}>
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
          <Button variant="danger" onClick={props.handleConfirm}>
            Excluir
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
