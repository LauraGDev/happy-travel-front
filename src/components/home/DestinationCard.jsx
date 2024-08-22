import { PropTypes } from "prop-types";
import { Link } from 'react-router-dom';

const DestinationCard = ({photo, name, country, createdBy, actualUser, isLoggedIn}) => {
	return (
        
		<article className="relative text-blue bg-yellow rounded-[1.25rem]">
			<Link to="/detail" className={`absolute right-0 p-2 ${!isLoggedIn ? "hidden" : "block"}`}>
                <img src="Assets/Info-icon.svg" alt="Más información" />
            </Link>
			<img
					className="rounded-[1.25rem] aspect-square object-cover w-full"
					src={photo}
					alt={`Imágen de ${name}`}
			/>
			<section className="flex justify-between items-center px-5 py-4 leading-none">
					<section className="label">
							<h3 className="font-bold text-[1.563rem] mb-1">{name}</h3>
							<p className="text-[1.25rem]">{country}</p>
					</section>
					<section className={`icons flex justify-between gap-[0.625rem] ${createdBy === actualUser ? "block" : "hidden"}`}>
						<a href="#"><img src="Assets/Edit-icon.svg" alt="Editar destino" /></a>
						<a href="#"><img src="Assets/Delete-icon.svg" alt="Eliminar destino" /></a>
					</section>
			</section>
		</article>
    );
};

DestinationCard.propTypes = {
    photo: PropTypes.string,
    name: PropTypes.string,
    country: PropTypes.string,
    createdBy: PropTypes.integer,
    actualUser: PropTypes.integer,
    isLoggedIn: PropTypes.boolean
  };

export default DestinationCard;
