import React, { useState } from "react";
import Input from "../components/input/Input";
import Button from "../components/buttons/Button";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [formError, setFormError] = useState("");
  const [ loading, setLoading ] = useState( false );
  
  const navigate = useNavigate();

  const handleEmail = (e) => {
    setEmail(e.target.value);
    if (e.target.value) {
      setEmailError("");
    }
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    if (e.target.value) {
      setPasswordError("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let hasError = false;

    if (!email) {
      setEmailError("Debes escribir un e-mail");
      hasError = true;
    }

    if (!password) {
      setPasswordError("Debes escribir una contraseña");
      hasError = true;
    }

    if (hasError) {
      return;
    }

    setLoading(true);
    setFormError("");

    try {
      const response = await fetch("http://localhost:4001/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Error en el servidor");
      }

      const data = await response.json();
      console.log( "Login exitoso", data );
      navigate("/");
      
    } catch (error) {
      setFormError(`Error: ${error.message}`);
      console.error("Error durante el login", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-row justify-center w-[auto] py-2">
      <section className="w-[22rem] rounded-[1.2rem] bg-white border-4 border-yellow gap-2 py-[1.2rem] px-[1.5rem]">
        <h1 className="text-pink font-jaldi font-bold text-center text-[1.4rem] py-1">Acceso de usuario</h1>
        <hr className="w-[100%] size-2 border-pink"/>
        <form onSubmit={handleSubmit} >
          <Input 
            title="E-mail" 
            placeholder="Escribe tu email..." 
            type="email"
            value={email}
            onChange={handleEmail}
          />
          {emailError && (
            <p className="text-pink text-sm pl-3">E-mail requerido</p>
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
            <Button
              className={`bg-green ${loading ? "opacity-50" : ""}`}
              text={loading ? "Cargando..." : "Aceptar"}
              type="submit"
              disabled={loading}
            />
            <Button
              className="bg-pink"
              text="Cancelar"
              type="button"
              onClick={() => {
                setEmail("");
                setPassword("");
                setEmailError("");
                setPasswordError("");
                setFormError("");
              }}
            />
          </div>
        </form>
      </section>
    </div>
  );
};

export default Login;
