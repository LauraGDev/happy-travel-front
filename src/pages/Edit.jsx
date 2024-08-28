import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Input from "../components/input/Input";
import Button from "../components/buttons/Button";
import InputTextArea from "../components/input/InputTextArea";
import InputImg from "../components/input/InputImg";
import Popup from "../components/popUp/Popup";

const Edit = ({ onUpdate }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const id = location.state.data;

    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [newTitle, setNewTitle] = useState("");
    const [newImage, setNewImage] = useState("");
    const [newMessage, setNewMessage] = useState("");
    const [newCountry, setNewCountry] = useState("");
    const [userId, setUserId] = useState(0);
    const [errors, setErrors] = useState({
        title: false,
        image: false,
        country: false,
        message: false,
    });

    const closePopup = () => setIsPopupOpen(false);

    const validateFields = () => {
        const newErrors = {
            title: newTitle.trim() === "",
            image: newImage === "",
            country: newCountry.trim() === "",
            message: newMessage.trim() === "",
        };
        setErrors(newErrors);
        return Object.values(newErrors).some((error) => error === true);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(
                    `http://localhost:4001/destinations/${id}`
                );
                const data = await res.json();

                if (data) {
                    setNewTitle(data.name);
                    setNewCountry(data.country);
                    setNewImage(data.image);
                    setNewMessage(data.message);
                    setUserId(data.id_user);
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [id]);

    const handleUpdate = async (e) => {
        e.preventDefault();
        if (!validateFields()) {
            try {
                const response = await fetch(`http://localhost:4001/${id}`, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        id,
                        name: newTitle,
                        country: newCountry,
                        image: newImage,
                        message: newMessage,
                        id_user: userId,
                    }),
                });

                if (response.ok) {
                    if (onUpdate) {
                        onUpdate(newTitle, newCountry, newImage, newMessage);
                    }
                    navigate("/");
                } else {
                    console.error(
                        "Error al actualizar el destino:",
                        response.statusText
                    );
                    alert("Error al actualizar el destino");
                }
            } catch (error) {
                console.error("Error al enviar la solicitud:", error);
                alert("Error al enviar la solicitud");
            }
        }
    };

    const navigateHome = () => {
        navigate("/");
    };

    return (
        <div className="flex justify-center w-auto py-2 lg:mt-28">
            <section className="lg:w-[45%] w-[22rem] rounded-[1.2rem] bg-white border-4 border-yellow gap-2 py-[1.2rem] px-[1.5rem]">
                {newTitle && newCountry && newImage && newMessage ? (
                    <form onSubmit={(e) => e.preventDefault()}>
                        <h1 className="text-pink font-jaldi font-bold text-center text-[1.4rem] py-1">
                            Editar destino
                        </h1>
                        <hr className="w-[100%] size-2 border-pink" />
                        <section className="flex flex-col lg:grid lg:grid-cols-[repeat(2,50%)] lg:grid-rows-[repeat(2)] pt-3 justify-center gap-[1rem]">
                            <section className="w-[100%] lg:w-[88%] lg:items-start items-center lg:justify-items-between space-y-5">
                                <Input
                                    title="Título"
                                    type="text"
                                    value={newTitle}
                                    onChange={(e) =>
                                        setNewTitle(e.target.value)
                                    }
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
                                    onChange={(e) =>
                                        setNewCountry(e.target.value)
                                    }
                                />
                                {errors.country && (
                                    <p className="text-pink text-sm pl-3">
                                        Ubicación requerida
                                    </p>
                                )}
                                <InputImg
                                    id="image"
                                    title="Imagen"
                                    onChange={(imgUrl) => setNewImage(imgUrl)}
                                />
                                {errors.image && (
                                    <p className="text-pink text-sm pl-3">
                                        Imagen requerida
                                    </p>
                                )}
                            </section>
                            <section className="lg:row-start-1 lg:row-end-3 lg:col-start-2 lg:h-full">
                            <InputTextArea
                                className=""
                                title="¿Por qué quieres viajar allí?"
                                value={newMessage}
                                onChange={(e) => setNewMessage(e.target.value)}
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
                                    type="button"
                                    onClick={() => setIsPopupOpen(true)}
                                />
                                <Popup
                                    isPopupOpen={isPopupOpen}
                                    closePopup={closePopup}
                                    onConfirm={handleUpdate}
                                    message="¿Quieres guardar los cambios?"
                                />
                                <Button
                                    className="bg-pink"
                                    text="Cancelar"
                                    type="button"
                                    onClick={navigateHome}
                                />
                            </section>
                        </section>
                    </form>
                ) : (
                    <p>Cargando...</p>
                )}
            </section>
        </div>
    );
};

export default Edit;
