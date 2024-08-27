import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Button from '../buttons/Button';


const Popup = ({ isPopupOpen, closePopup, handleDelete }) => {

  
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

  return(

    isPopupOpen &&(
      <div className="absolute w-full h-full bg-[#000000a8] top-0 left-0 z-[9999]">
      <div className="ventana-Popup">
        <div className="bg-yellow h-[10.5rem] w-[21.6875rem] text-center rounded-[10%] fixed inset-0 m-auto">
          <p className="text-blue pt-[1.25rem] text-[1.25rem]">¿Quieres eliminar</p>
          <p className="text-blue pt-[1%] pb-[8%] text-[1.25rem]">este destino?</p>
          <div className="flex justify-center gap-[0.625rem]">
            <Button
              text="Aceptar"
              type="button"
              className="bg-green"
              onClick={handleDelete}
            />
            
            <Button
              text="Cancelar"
              className="bg-pink" 
              onClick={closePopup}
              type='button'
          
              />
            </div>
          </div>
        </div>
      </div>
      )
    );
  };
  
  Popup.propTypes = {
    isPopupOpen: PropTypes.bool.isRequired,
    closePopup: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired,
  };
  
  export default Popup;

