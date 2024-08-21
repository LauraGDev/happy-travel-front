import React from 'react'
import Button from '../components/buttons/Button'
import { Link } from 'react-router-dom'
import Input from '../components/input/Input'

const SignIn = () => {
  return (
  <div className="flex flex-row justify-center w-[auto] py-2"> 
        <section className="w-[22rem] rounded-[1.2rem] bg-white border-4 border-yellow gap-2 py-[1.2rem] px-[1.5rem]">
        <h1 className="text-pink font-jaldi font-bold text-center text-[1.4rem] py-1">Registro de usuario</h1>
        <hr className="w-[100%] size-2 border-pink"/>
        <Input title="Nombre" placeholder="Escribe tu nombre..." type="text"/>
        <p className="text-pink text-sm pl-3">Nombre requerido</p>
        <Input title="E-mail" placeholder="Escribe tu email..." type="text"/>
        <Input title="Contraseña" placeholder="Escribe tu contraseña..." type="password" />
        <div className="flex flex-row justify-center py-1">
          <Button className="bg-green" text="Aceptar"/>
          <Button className="bg-pink" text="Cancelar"/>
        </div>
        <h2 className="font-bold text-blue text-center">¿Ya tienes cuenta? Accede <Link to="/login" className="text-green">aquí</Link></h2>
      </section>
    </div>
  )
}

export default SignIn
