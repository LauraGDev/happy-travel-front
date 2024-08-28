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
        <div className="mb-[7rem]">
            {error && <div className="error">{error}</div>}
            {destinationData ? (
                
                    <div className="flex flex-col lg:grid lg:grid-cols-[1fr_1fr] w-auto justify-center lg:items-start content-center items-center lg:mx-4 -mx-2 my-4 lg:mt-[4rem]">
                        <img
                            className="rounded-[1.25rem] aspect-square object-cover lg:w-[80%] w-full lg:m-3 lg:justify-self-end lg:mr-[2.5rem]"
                            src={destinationData.image}
                            alt="Destination"
                        />
                        <div className="lg:w-[100%] w-[90%] lg:relative lg:pr-[3rem]">
                            <div className="z-2 lg:relative relative h-auto lg:text-left lg:justify-center lg:items-center">
                                <div className=" bg-pink lg:bg-transparent h-auto lg:text-left text-center rounded-[1.25rem] ">
                                    <p className="text-yellow lg:text-pink font-bold lg:text-[2.4rem] text-[1.6rem] lg:mt-[0.3125rem] -mt-6 ">
                                        {destinationData.name}
                                    </p>
                                    <p className="text-yellow  lg:text-pink  text-[1.3rem] font-thin">
                                        {destinationData.country}
                                    </p>
                                </div> 
                                <article className="text-blue mb-[1rem] lg:text-[1.3rem] text-[1rem] leading-relaxed lg:leading-loose mt-[1.2rem]">
                                <p>{destinationData.message}</p>
                            </article>
                            </div>
                           
                            <div className="flex justify-end gap-[0.625rem] mr-[7%] lg:absolute lg:right-0 lg:top-5">
                                    <EditIcon id={id} name={destinationData.name}/>
                                    <DeleteIcon id={id} onDeleteSuccess={handleDeleteSuccess} />
                            </div>
                        </div>
                    </div>
                   
                
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