import { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import { FaEdit } from 'react-icons/fa';
import React from 'react';

export default function ButtonEdit() {
  const [showModal, setShowModal] = useState(false);

  const handleEditClick = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleConfirmEdit = () => {
    // aqui você pode colocar a lógica para editar a tarefa
    console.log('Tarefa editada');
    setShowModal(false);
  };

  return (
    <>
      <Button variant="primary" className="btn-sm mx-2" onClick={handleEditClick}>
        <FaEdit /> Editar 
      </Button>

      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Editar Perfil</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Nome</Form.Label>
                <Form.Control
                  autoFocus
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Data de Nascimento</Form.Label>
                <Form.Control
                  autoFocus
                />
              </Form.Group>
            </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleConfirmEdit}>
            Salvar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}