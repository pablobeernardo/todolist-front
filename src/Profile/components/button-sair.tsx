import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { FaSignOutAlt } from 'react-icons/fa';
import React from 'react';

export default function SairButton() {
  const [showModal, setShowModal] = useState(false);

  const handleSairClick = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleConfirmSair = () => {
    // aqui você pode colocar a lógica para sair da conta
    console.log('Conta saída');
    setShowModal(false);
  };

  return (
    <>
      <Button variant="danger" className="btn-sm mx-2" onClick={handleSairClick}>
        <FaSignOutAlt /> Sair
      </Button>

      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sair da Conta</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Tem certeza de que deseja sair da sua conta?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            Cancelar
          </Button>
          <Button variant="danger" onClick={handleConfirmSair}>
            Sair
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}