import { useState } from "react";
import Input from "../components/input/Input";
import Button from "../components/buttons/Button";
import InputTexArea from "../components/input/InputTexArea";

const Create = () => {
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

	const validateFields = () => {
		const newErrors = {
			title: title.trim() == "",
			image: image.trim() == "",
			country: country.trim() == "",
			message: message.trim() == "",
		};
		setErrors(newErrors);
		return Object.values(newErrors).some(error => error === true);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log(validateFields())
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
					const result = await response.json();
					alert("Se ha creado el destino correctamente"); //Falta pop-up

					setTitle("");
					setCountry("");
					setImage("");
					setMessage("");
					window.location.reload();
				} else {
					alert("Error al crear el destino"); //Falta pop-up
				}
			} catch (error) {
				window.location.reload();
			}
		}
	}

	return (
		<div className="flex justify-center w-auto py-2">
			<section className="lg:w-[45%] w-[22rem] rounded-[1.2rem] bg-white border-4 border-yellow gap-2 py-[1.2rem] px-[1.5rem]">
				<form onSubmit={handleSubmit}>
					<h1 className="text-pink font-jaldi font-bold text-center text-[1.4rem] py-1">
						Crear destino
					</h1>
					<hr className="w-[100%] size-2 border-pink" />
					<section className="flex flex-col lg:grid lg:grid-cols-[repeat(2,50%)] lg:grid-rows-[repeat(3,auto)] pt-3 justify-center gap-[1rem]">
						<section className="w-[100%] lg:w-[88%] lg:row-[1_/_3] lg:col-[1_/_span_1] lg:items-start items-center lg:justify-items-between space-y-5">
							<Input
								id="titulo"
								htmlFor="titulo"
								title="Título"
								type="text"
								value={title}
								onChange={(e) => setTitle(e.target.value)}

							// {handleTitle}
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
							<Input
								id="imagen"
								htmlFor="imagen"
								title="Imagen"
								type="text"
								value={image}
								onChange={(e) => setImage(e.target.value)}
							/>
							{errors.image && (
								<p className="text-pink text-sm pl-3">
									Imagen requerida
								</p>
							)}
							{/* <InputImg 
              title="Imagen"
              value={imagen} 
              onChange={(e) => setImage(e.target.value)} /> */}
						</section>
						<InputTexArea
							className="lg:row-start-1 lg:row-end-3 lg:h-full lg:col-start-2"
							title="¿Por qué quieres viajar allí?"
							onChange={(e) => setMessage(e.target.value)}
						/>
						{errors.message && (
								<p className="text-pink text-sm pl-3">
									Mensaje requerido
								</p>
							)}
						<div className="flex flex-row justify-between lg:justify-start py-1 lg:row-start-3 gap-[1rem] lg:items-end">
							<Button
								className="bg-green"
								text="Aceptar"
								type="submit"
							/>
							<Button className="bg-pink" text="Cancelar" />
						</div>
					</section>
				</form>
			</section>
		</div>
	);
};

export default Create;
