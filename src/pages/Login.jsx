import React, { useState } from 'react'
import Input from '../components/input/Input'
import Button from '../components/buttons/Button'

const Login = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false)

  function handleEmail(e) {
    setEmail(e.target.value);
    if (e.target.value) {
      setEmailError(false);
    }
  }

  function handleSubmit(e) {

    if(!email) {
      setEmailError(true);
      e.preventDefault();
    } else {
      try {
        
      } catch (error) {
        
      }
    }
  }

  return (
    <div className="flex flex-row justify-center w-[auto] py-2">
      <section className="w-[22rem] rounded-[1.2rem] bg-white border-4 border-yellow gap-2 py-[1.2rem] px-[1.5rem]">
        <h1 className="text-pink font-jaldi font-bold text-center text-[1.4rem] py-1">Acceso de usuario</h1>
        <hr className="w-[100%] size-2 border-pink"/>
        <form action="" onSubmit={handleSubmit} >
          <Input 
            title="E-mail" 
            placeholder="Escribe tu email..." 
            type="text"
            value={email}
            onChange={handleEmail} />
            {emailError && (
              <p className="text-pink text-sm pl-3">Debes escribir un e-mail</p>
            )}
          
          <Input title="Contraseña" placeholder="Escribe tu contraseña..." type="password" />
          <div className="flex flex-row justify-center py-1">
            <Button className="bg-green" text="Aceptar" type="submit"/>
            <Button className="bg-pink" text="Cancelar"/>
          </div>
        </form>
      </section>
      
    </div>
  )
}

export default Login
