import React from 'react'
import Input from '../components/input/Input'
import Button from '../components/buttons/Button'

const Login = () => {
  return (
    <div className="flex flex-row justify-center w-auto py-2">
      <section className="w-[95%] rounded-[1.2rem] bg-white border-4 border-yellow gap-2 py-[1.2rem] px-[1.5rem]">
        <h1 className="text-pink font-jaldi font-bold text-center text-[1.4rem] py-1">Acceso de usuario</h1>
        <hr className="w-[100%] size-2 border-pink"/>
        <Input title="E-mail" placeholder="Escribe tu email..." type="text"/>
        <p className="text-pink text-sm pl-3">Debes escribir un e-mail</p>
        <Input title="Contraseña" placeholder="Escribe tu contraseña..." type="password" />
        <div className="flex flex-row justify-center py-1">
          <Button className="bg-green" text="Aceptar"/>
          <Button className="bg-pink" text="Cancelar"/>
        </div>
      </section>
      
    </div>
  )
}

export default Login
