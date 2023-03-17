import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { FaTrash } from 'react-icons/fa';

export default function ButtonExcluir() {
  const [showModal, setShowModal] = useState(false);

  const handleDeleteClick = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleConfirmDelete = () => {
    // aqui você pode colocar a lógica para excluir a tarefa
    console.log('Tarefa excluída');
    setShowModal(false);
  };

  return (
    <>
      <Button variant="danger" className="btn-sm mx-2" onClick={handleDeleteClick}>
        <FaTrash /> Excluir
      </Button>

      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmar exclusão</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Tem certeza que deseja excluir a tarefa?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            Cancelar
          </Button>
          <Button variant="danger" onClick={handleConfirmDelete}>
            Excluir
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
