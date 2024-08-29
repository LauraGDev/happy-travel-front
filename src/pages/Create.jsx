import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../components/input/Input";
import Button from "../components/buttons/Button";
import InputTexArea from "../components/input/InputTextArea";
import InputImg from "../components/input/InputImg";
import Popup from "../components/popUp/Popup";

const Create = () => {
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [country, setCountry] = useState("");
    const [message, setMessage] = useState("");
    const [errors, setErrors] = useState({
        title: false,
        image: false,
        country: false,
        message: false,
    });
    const [popUpMessage, setPopUpMessage] = useState("");
    const [popUpFunction, setPopUpFunction] = useState(null);
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const closePopup = () => setIsPopupOpen(false);

    const validateFields = () => {
        console.log(message);
        const newErrors = {
            title: title.trim() == "",
            image: image == "",
            country: country.trim() == "",
            message: message.trim() == "",
        };
        setErrors(newErrors);
        return Object.values(newErrors).some((error) => error === true);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateFields()) {
            try {
                const response = await fetch(
                    "http://localhost:4001/destinations",
                    {
                        method: "POST",
                        headers: {
                            "Content-type": "application/json",
                        },
                        body: JSON.stringify({
                            name: title,
                            image: image,
                            country: country,
                            message: message,
                            id_user: 1,
                        }), // Modificar cuando tengamos autenticación
                    }
                );

                if (response.ok) {
                    setPopUpMessage(
                        `El destino ${title} se ha creado correctamente`
                    );
                    setTitle("");
                    setCountry("");
                    setImage("");
                    setMessage("");
                    setPopUpFunction(() => navigateHome);
                    setIsPopupOpen(true);
                } else {
                    setPopUpMessage(
                        `No se ha podido crear el destino ${title}`
                    );
                    setPopUpFunction(() => reloadPage);
                    setIsPopupOpen(true);
                }
            } catch {
                setPopUpMessage(`No se ha podido crear el destino ${title}`);
                setPopUpFunction(() => reloadPage);
                setIsPopupOpen(true);
            }
        }
    };

    const navigateHome = () => {
        if (isPopupOpen) setIsPopupOpen(false);
        navigate("/");
    };

    const reloadPage = () => {
        if (isPopupOpen) setIsPopupOpen(false);
        window.location.reload();
    }

    return (
        <div className="flex justify-center w-auto py-2 lg:mt-28">
            <section className="lg:w-[45%] w-[22rem] rounded-[1.2rem] bg-white border-4 border-yellow gap-2 py-[1.2rem] px-[1.5rem]">
                <form onSubmit={handleSubmit}>
                    <h1 className="text-pink font-jaldi font-bold text-center text-[1.4rem] py-1">
                        Crear destino
                    </h1>
                    <hr className="w-[100%] size-2 border-pink" />
                    <section className="flex flex-col lg:grid lg:grid-cols-[repeat(2,50%)] lg:grid-rows-[repeat(2)] pt-3 justify-center gap-[1rem]">
                        <section className="w-[100%] lg:w-[88%] lg:items-start items-center lg:justify-items-between space-y-5">
                            <Input
                                id="titulo"
                                htmlFor="titulo"
                                title="Título"
                                type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                            {errors.title && (
                                <p className="text-pink text-sm pl-3">
                                    Título requerido
                                </p>
                            )}
                            <Input
                                id="ubicacion"
                                htmlFor="ubicacion"
                                title="Ubicación"
                                type="text"
                                value={country}
                                onChange={(e) => setCountry(e.target.value)}
                            />
                            {errors.country && (
                                <p className="text-pink text-sm pl-3">
                                    Ubicación requerida
                                </p>
                            )}

                            <InputImg
                                id="image"
                                title="Imagen"
                                onChange={(imgUrl) => setImage(imgUrl)}
                            />
                            {errors.image && (
                                <p className="text-pink text-sm pl-3">
                                    Imagen requerida
                                </p>
                            )}
                        </section>
                        <section className="lg:row-start-1 lg:row-end-3 lg:col-start-2 lg:h-full">
                            <InputTexArea
                                className=""
                                title="¿Por qué quieres viajar allí?"
                                onChange={(e) =>
                                    setMessage(e.target.value.trim())
                                }
                            />
                            {errors.message && (
                                <p className="text-pink text-sm pl-3">
                                    Debes poner la razón por la que quieres
                                    viajar a este destino
                                </p>
                            )}
                        </section>
                        <section className="flex flex-row justify-between lg:justify-start py-1 lg:row-start-2 gap-[1rem] lg:items-end">
                            <Button
                                className="bg-green"
                                text="Aceptar"
                                type="submit"
                            />
                            <Button
                                className="bg-pink"
                                text="Cancelar"
                                onClick={navigateHome}
                            />
                        </section>
                    </section>
                </form>
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

export default Create;
