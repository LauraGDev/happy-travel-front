const DestinationCard = () => {
	return (
		<article className="relative text-blue bg-yellow rounded-[1.25rem] m-6">
			<a className="absolute right-0 p-2" href="#"><img src="Assets/Info-icon.svg" alt="Más información" /></a>
			<img
					className="rounded-[1.25rem]"
					src="Assets/foto-prueba-BORRAR.png"
					alt="Imágen destino"
			/>
			<section className="flex justify-between items-center px-5 py-4 leading-none">
					<section className="label">
							<h3 className="font-bold text-[1.563rem] mb-1">Islas Azores</h3>
							<p className="text-[1.25rem]">Portugal</p>
					</section>
					<section className="icons flex justify-between gap-[0.625rem]">
						<a href="#"><img src="Assets/Edit-icon.svg" alt="Editar destino" /></a>
						<a href="#"><img src="Assets/Delete-icon.svg" alt="Eliminar destino" /></a>
					</section>
			</section>
		</article>
    );
};

export default DestinationCard;
