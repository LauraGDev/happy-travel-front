import  { useState , useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import EditIcon from '../components/buttons/EditIcon';
import { PropTypes } from "prop-types";
import DeleteIcon from '../components/buttons/DeleteIcon';




const Detail = () => {
    const location = useLocation();
    const id = location.state.data;
    
    const [destinationData, setDestinationData] = useState(null);  
    const [error, setError] = useState(null);
    const navigate= useNavigate();
    const handleDeleteSuccess=()=>{ navigate('/')};
    useEffect(() => {
        const fetchDestination = async () => {
            try {
                const response = await fetch(`http://localhost:4001/destinations/${id}`);
                const data = await response.json();
                if (response.ok) {
                    setDestinationData(data);
                    setError(null);
                } else {
                    setDestinationData(null);
                    setError(data.message);
                }
            } catch (err) {
                setError(err.message);
            }
        };

        fetchDestination();
    }, [id]);

    return (
        <div>
            {error && <div className="error">{error}</div>}
            {destinationData ? (
                <>
                    <div>
                        <img
                            className="placeImg rounded-b-xl h-96"
                            src={destinationData.image}
                            alt="Destination"
                        />
                    </div>
                    <div className="flex flex-col justify-center content-center items-center w-auto">
                        <div className="z-2 lg:relative bg-pink lg:bg-transparent w-[80%] px-[2rem] h-[5.25rem] text-center rounded-[1.25rem] -mt-[3rem] lg:text-left ">
                            <p className="text-yellow lg:text-pink  font-bold text-[1.5625rem] mt-[0.3125rem]">
                                {destinationData.name}
                            </p>
                            <p className="text-yellow  lg:text-pink  text-[1.25rem] font-thin">
                                {destinationData.country}
                            </p>
                        </div>
                        <article className="text-blue -500 mt-[15%] mx-[5%] mb-[1rem] text-sm">
                            <p>{destinationData.message}</p>
                        </article>
                        <div className="flex justify-end gap-[0.625rem] mr-[7%]">
                        <EditIcon id={id} name={destinationData.name}/>
                        <DeleteIcon id={id} onDeleteSuccess={handleDeleteSuccess} />
                    </div>
                    </div>
                   
                </>
            ) : (
                <div>Loading...</div>
            )}
        </div>
    );
};
Detail.propTypes = {
	id: PropTypes.number,
	name: PropTypes.string,
};

export default Detail;