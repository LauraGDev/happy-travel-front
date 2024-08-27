import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PopUp from '../popUp/popUp';

const DeleteIcon = ({ id, onDeleteSuccess }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const handleDelete = async () => {
    try {
      const response = await fetch(`http://localhost:4001/destinations/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log('Response Status:', response.status);

      if (!response.ok) {
        const errorData = await response.text();
        throw new Error(`Error al eliminar el destino: ${errorData}`);
      }

      console.log('Eliminado exitosamente');
      closePopup();
      onDeleteSuccess();

    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <div className="flex justify-end gap-[0.625rem] mr-[7%]">
        <button onClick={openPopup}>
          <img src="/Assets/Delete-icon.svg" alt="Eliminar" />
        </button>
      </div>
      <PopUp
        isPopupOpen={isPopupOpen}
        closePopup={closePopup}
        handleDelete={handleDelete}
        message='¿Quieres eliminar este destino? '
      />
    </div>
  );
};

DeleteIcon.propTypes = {
  id: PropTypes.number.isRequired,
  onDeleteSuccess: PropTypes.func.isRequired,
};

export default DeleteIcon;