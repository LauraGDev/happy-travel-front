import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';




const PopUp= () => {
  const location = useLocation();
  const id = location.state.data;
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };
  const navigate = useNavigate();

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
        const errorData = await response.text(); // O response.json() si la respuesta es JSON
        throw new Error(`Error al eliminar el destino: ${errorData}`);
      }
  
      console.log('Eliminado exitosamente');
      closePopup(); 
      navigate("/")

    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    if (isPopupOpen) {
      
      document.body.style.position = 'fixed';
      document.body.style.top = `-${window.scrollY}px`;
      document.body.style.left = '0';
      document.body.style.right = '0';
    } else {
      
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }
  }, [isPopupOpen]);

  return (
    <div>
      <div className="flex justify-end gap-[0.625rem] mr-[7%]">
        <button onClick={openPopup}>
          <img src="/Assets/Delete-icon.svg" alt="Eliminar" />
        </button>
      </div>
      {isPopupOpen && (
        <div className="absolute w-full h-full bg-[#000000a8] top-0 left-0 z-[9999]">
          <div className="ventana-popup">
          <div className="bg-yellow h-[10.5rem] w-[21.6875rem] text-center rounded-[10%] fixed inset-0 m-auto">
          <p className="text-blue pt-[1.25rem] text-[1.25rem]">¿Quieres eliminar</p>
              <p className="text-blue pt-[1%] pb-[8%] text-[1.25rem]">este destino?</p>
              <div className="flex justify-center gap-[0.625rem]">
                <button className="bg-green w-[7rem] h-[2.375rem] rounded-[1.1875rem] text-yellow" onClick={handleDelete}>
                  Aceptar
                </button>
                <button className="bg-pink w-[7rem] h-[2.375rem] rounded-[1.1875rem] text-yellow" onClick={closePopup}>
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
PopUp.propTypes = {
  id: PropTypes.oneOfType([PropTypes.number]).isRequired,
};

export default PopUp;