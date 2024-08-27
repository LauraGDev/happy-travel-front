import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import Input from '../components/input/Input';
import Button from '../components/buttons/Button';
import InputTextArea from '../components/input/InputTextArea';
import InputImg from '../components/input/InputImg';

const Edit = ({ onUpdate}) => {

    const location = useLocation();
    const id = location.state.data; //hacer un get con este id

    if (!id) {
      return <p>Este destino no existe.</p>;
    }

    const [newTitle, setNewTitle] = useState("")
    const [newImage, setNewImage] = useState("")
    const [newMessage, setNewMessage] = useState("")
    const [newCountry, setNewCountry] = useState("")
    const [errors, setErrors] = useState({
      title: false,
      image: false,
      country: false,
      message: false,
    });

    const validateFields = () => {
      const newErrors = {
        title: newTitle.trim() == "",
        image: newImage.trim() == "",
        country: newCountry.trim() == "",
        message: newMessage.trim() == "",
      };
      setErrors(newErrors);
      return Object.values(newErrors).some(error => error === true);
    } 

    
    useEffect(() => {
      const fetchData = async () => {
        try {
          const res = await fetch(`http://localhost:4001/destinations/${id}`);
          const data = await res.json();

          if (data) {
          setNewTitle(data.name);
          setNewCountry(data.country);
          setNewImage(data.image);
          setNewMessage(data.message);
          }
          
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

      fetchData();
      
  }, [id]);



    const handleUdpate = async (e) => {
      e.preventDefault();
      if (!validateFields()) {
        try {
          const response = await fetch(`http://localhost:4001/${id}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              id,
              name: newTitle, 
              country: newCountry, 
              image: newImage, 
              message: newMessage,
              id_user: 2 
            }),
          });

          if (response.ok) {
            console.log('Destino actualizado correctamente');
            if(onUpdate) {
              onUpdate(newTitle, newCountry, newImage, newMessage);
            }
            window.location.reload();
          } else {
            console.error('Error al actualizar el destino:', response.statusText);
            alert('Error al actualizar el destino');
          }
        } catch (error) {
          console.error('Error al enviar la solicitud:', error);
          alert('Error al enviar la solicitud');
        }
      };
    }
    

  return (
    <div className="flex justify-center w-auto py-2 mb-[5rem]">
      <section className="lg:w-[45%] w-[22rem] rounded-[1.2rem] bg-white border-4 border-yellow gap-2 py-[1.2rem] px-[1.5rem]">
      { newTitle && newCountry && newImage && newMessage ? (
      <form onSubmit={handleUdpate} >
      <h1 className="text-pink font-jaldi font-bold text-center text-[1.4rem] py-1">Editar destino</h1>
      <hr className="w-[100%] size-2 border-pink"/>
        <section className="flex flex-col lg:grid lg:grid-cols-[repeat(2,50%)] lg:grid-rows-[repeat(3,auto)] pt-3 justify-center gap-[1rem]">
          <section className="w-[100%] lg:w-[88%] lg:row-[1_/_3] lg:col-[1_/_span_1] lg:items-start items-center lg:justify-items-between space-y-5">
              <Input 
                title="Título" 
                type="text"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
              />
              {errors.title && (
                <p className="text-pink text-sm pl-3">
                  Título requerido
                </p>
              )}
              <Input 
                title="Ubicación" 
                type="text"
                value={newCountry}
                onChange={(e) => setNewCountry(e.target.value)}
              />
              {errors.country && (
                <p className="text-pink text-sm pl-3">
									Ubicación requerida
                </p>
              )}
              <Input 
                title="Imagen" 
                type="text"
                value={newImage}
                onChange={(e) => setNewImage(e.target.value)}
              />
              {errors.image && (
                <p className="text-pink text-sm pl-3">
                Imagen requerida
              </p>
            )}
              {/* <InputImg 
              title="Imagen"
              value="" 
              onChange="" />
               */}
          </section>
          <InputTextArea 
          className="lg:row-start-1 lg:row-end-3 lg:h-full lg:col-start-2"
          title="¿Por qué quieres viajar allí?" 
          description={newMessage}
          onChange={(e) => setNewMessage(e.target.value)} 
           />
           {errors.message && (
              <p className="text-pink text-sm pl-3">
              Debes poner la razón por la que quieres viajar a este destino
              </p>
           )}
          <div className="flex flex-row justify-between lg:justify-start py-1 lg:row-start-3 gap-[1rem] lg:items-end">
                <Button className="bg-green" text="Aceptar" type="submit" />
                <Button className="bg-pink" text="Cancelar"/>
          </div>
        </section>
        </form>
        ): (
          <p>Cargando...</p>
        )}
      </section>
     
      
    </div>
  )
}

export default Edit