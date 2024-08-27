import React, { useState } from 'react';
import Button from '../components/buttons/Button';
import { Link } from 'react-router-dom';
import Input from '../components/input/Input';

const SignIn = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  function handleName(e) {
    setName(e.target.value);
    if (e.target.value) {
      setNameError(false);
    }
  }

  function handleEmail(e) {
    setEmail(e.target.value);
    if (e.target.value) {
      setEmailError(false);
    }
  }

  function handlePassword(e) {
    setPassword(e.target.value);
    if (e.target.value) {
      setPasswordError(false);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    // Verificar si hay campos vacíos
    if (!name) {
      setNameError(true);
    }
    if (!email) {
      setEmailError(true);
    }
    if (!password) {
      setPasswordError(true);
    }

    if (!name || !email || !password) {
      return;
    }

    try {
      console.log("Usuario registrado:", { name, email, password });

      setName("");
      setEmail("");
      setPassword("");


      alert("Registro exitoso!");
    } catch (error) {
      
      console.error("Error al registrar usuario:", error);
      alert("Ocurrió un error al registrar el usuario. Por favor, inténtalo de nuevo.");
    }
  }

  return (
    <div className="flex flex-row justify-center w-[auto] py-2">
      <section className="w-[22rem] rounded-[1.2rem] bg-white border-4 border-yellow gap-2 py-[1.2rem] px-[1.5rem]">
        <h1 className="text-pink font-jaldi font-bold text-center text-[1.4rem] py-1">Registro de usuario</h1>
        <hr className="w-[100%] size-2 border-pink"/>
        <form action="" onSubmit={handleSubmit}>
          <Input 
            title="Nombre" 
            placeholder="Escribe tu nombre..." 
            type="text" 
            value={name}
            onChange={handleName}
          />
          {nameError && (
            <p className="text-pink text-sm pl-3">Nombre requerido</p>
          )}
          <Input 
            title="E-mail" 
            placeholder="Escribe tu email..." 
            type="text"
            value={email}
            onChange={handleEmail}
          />
          {emailError && (
            <p className="text-pink text-sm pl-3">Email requerido</p>
          )}
          <Input 
            title="Contraseña" 
            placeholder="Escribe tu contraseña..." 
            type="password" 
            value={password}
            onChange={handlePassword}
          />
          {passwordError && (
            <p className="text-pink text-sm pl-3">Contraseña requerida</p>
          )}
          <div className="flex flex-row justify-center py-1">
            <Button className="bg-green" text="Aceptar" type="submit"/>
            <Button className="bg-pink" text="Cancelar"/>
          </div>
        </form>
        <h2 className="font-bold text-blue text-center">¿Ya tienes cuenta? Accede <Link to="/login" className="text-green hover:text-blue">aquí</Link></h2>
      </section>
    </div>
  );
}

export default SignIn;