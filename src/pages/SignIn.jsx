import { useState } from "react";
import Button from "../components/buttons/Button";
import { Link, useNavigate } from "react-router-dom";
import Input from "../components/input/Input";
import Popup from "../components/popUp/popUp";

const SignIn = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [nameError, setNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [popUpMessage, setPopUpMessage] = useState("");
    const [popUpFunction, setPopUpFunction] = useState(null);
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const navigate = useNavigate();

    const closePopup = () => setIsPopupOpen(false);

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

    async function handleSubmit(e) {
        e.preventDefault();

        if (!name || !email || !password) {
            setNameError(!name);
            setEmailError(!email);
            setPasswordError(!password);
            return;
        }

        try {
            const response = await fetch(
                "http://localhost:4001/auth/register",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ name, email, password }),
                }
            );

            if (!response.ok) {
                setPopUpMessage(`Error, no se ha podido crear el usuario.`);
                setPopUpFunction(() => reloadPage);
                setIsPopupOpen(true);
            }

            setPopUpMessage(
                `El usuario se ha creado correctamente, ya puedes iniciar sesión.`
            );
            setPopUpFunction(() => navigateLogin);
            setIsPopupOpen(true);
        } catch {
            setPopUpMessage(`Error, no se ha podido crear el usuario.`);
            setPopUpFunction(() => reloadPage);
            setIsPopupOpen(true);
        }
    }

    const navigateLogin = () => {
        if (isPopupOpen) setIsPopupOpen(false);
        navigate("/login");
    };

    const reloadPage = () => {
        if (isPopupOpen) setIsPopupOpen(false);
        window.location.reload();
    };

    return (
        <div className="flex flex-row justify-center w-[auto] py-2">
            <section className="w-[22rem] rounded-[1.2rem] bg-white border-4 border-yellow gap-2 py-[1.2rem] px-[1.5rem]">
                <h1 className="text-pink font-jaldi font-bold text-center text-[1.4rem] py-1">
                    Registro de usuario
                </h1>
                <hr className="w-[100%] size-2 border-pink" />
                <form action="" onSubmit={handleSubmit}>
                    <Input
                        title="Nombre"
                        placeholder="Escribe tu nombre..."
                        type="text"
                        value={name}
                        onChange={handleName}
                    />
                    {nameError && (
                        <p className="text-pink text-sm pl-3">
                            Nombre requerido
                        </p>
                    )}
                    <Input
                        title="E-mail"
                        placeholder="Escribe tu email..."
                        type="email"
                        value={email}
                        onChange={handleEmail}
                    />
                    {emailError && (
                        <p className="text-pink text-sm pl-3">
                            Email requerido
                        </p>
                    )}
                    <Input
                        title="Contraseña"
                        placeholder="Escribe tu contraseña..."
                        type="password"
                        value={password}
                        onChange={handlePassword}
                    />
                    {passwordError && (
                        <p className="text-pink text-sm pl-3">
                            Contraseña requerida
                        </p>
                    )}
                    <div className="flex flex-row justify-center py-1">
                        <Button
                            className="bg-green"
                            text="Aceptar"
                            type="submit"
                        />
                        <Button className="bg-pink" text="Cancelar" />
                    </div>
                </form>
                <h2 className="font-bold text-blue text-center">
                    ¿Ya tienes cuenta? Accede{" "}
                    <Link to="/login" className="text-green hover:text-blue">
                        aquí
                    </Link>
                </h2>
            </section>
            <Popup
                isPopupOpen={isPopupOpen}
                closePopup={closePopup}
                onConfirm={popUpFunction}
                message={popUpMessage}
                showCancel={false}
            />
        </div>
    );
};

export default SignIn;
