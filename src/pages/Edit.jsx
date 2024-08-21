import React, { useEffect, useState } from 'react'
import Input from '../components/input/Input';
import Button from '../components/buttons/Button';
import InputTexArea from '../components/input/InputTexArea';
import InputImg from '../components/input/InputImg';

const Edit = () => {

    const [title, setTitle] = useState("")
    const [titleError, setTitleError] = useState(false)

    function handleTitle(e) {
      setTitle(e.target.value);
      if (e.target.value) {
        setTitleError(false)
      }
    }

    function handleSubmit(e) {

      if(!title) {
        setTitleError(true);
        e.preventDefault();
      } else {
        try {
          
        } catch (error) {
          
        }
      }
    }

  return (
    <div className="flex justify-center w-[auto] py-2">
      <section className="lg:w-[45%] w-[22rem] rounded-[1.2rem] bg-white border-4 border-yellow gap-2 py-[1.2rem] px-[1.5rem]">
      <form action="" onSubmit={handleSubmit} >
      <h1 className="text-pink font-jaldi font-bold text-center text-[1.4rem] py-1">Editar destino</h1>
      <hr className="w-[100%] size-2 border-pink"/>
        <section className="flex flex-col lg:grid lg:grid-cols-[repeat(2,50%)] lg:grid-rows-[repeat(3,auto)] pt-3 justify-center gap-[1rem]">
          <section className="w-[100%] lg:w-[88%] lg:row-[1_/_3] lg:col-[1_/_span_1] lg:items-start items-center lg:justify-items-between space-y-5">
              <Input 
                title="Título" 
                type="text"
                // value={destination.name}
                onChange={handleTitle}
              />
              {titleError && (
                  <p className="text-pink text-sm pl-3">Título requerido</p>
                )}
              <Input 
                title="Ubicación" 
                type="text"
                // value={destination.place} 
              />
              <InputImg 
              title="Imagen"
              placeholder="Escoge una imagen..."/>
              
          </section>
          <InputTexArea 
          title="¿Por qué quieres viajar allí?" 
          description="At w3schools.com you will learn how to make a website. They offer free tutorials in all web development technologies. At w3schools.com you will learn how to make a website. They offer free tutorials in all web development technologies. At w3schools.com you will learn how to make a website. They offer free tutorials in all web development technologies." 
          className="lg:row-[span_4] lg:w-[90%]" />
          <div className="flex flex-row justify-between lg:justify-start py-1 lg:row-start-[span_3] lg:col-[1_/_span_1] gap-[1rem]">
                <Button className="bg-green" text="Aceptar" type="submit"/>
                <Button className="bg-pink" text="Cancelar"/>
          </div>
        </section>
        </form>
      </section>
     
      
    </div>
  )
}

export default Edit
