import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';


const MyComponent = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
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
            <div className="bg-yellow h-[10.5rem] w-[21.6875rem] text-center rounded-[10%] absolute top-[34rem] left-[1.25rem]">
              <p className="text-blue pt-[1.25rem] text-[1.25rem]">¿Quieres eliminar</p>
              <p className="text-blue pt-[1%] pb-[8%] text-[1.25rem]">este destino?</p>
              <div className="flex justify-center gap-[0.625rem]">
                <button className="bg-green w-[7rem] h-[2.375rem] rounded-[1.1875rem] text-yellow" onClick={closePopup}>
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

export default MyComponent;