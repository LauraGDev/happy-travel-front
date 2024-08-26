import  { useState , useEffect } from 'react';
import PopUp from '../components/popUp/popUp'
import { useLocation } from 'react-router-dom';


const Detail = () => {
    const location = useLocation();
    const id = location.state.data;
    alert(id);
    const [destinationData, setDestinationData] = useState(null);  
    const [error, setError] = useState(null);
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
                    setError(data);
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
                    <div className="lol">
                        <div className="absolute bg-pink w-[90%] h-[5.25rem] ml-5 mr-5 text-center rounded-[1.25rem] -mt-[6.40rem] mx-[3.5625rem]">
                            <p className="text-yellow text-[1.5625rem] mt-[0.3125rem]">
                                {destinationData.name}
                            </p>
                            <p className="text-yellow text-[1.25rem] font-thin">
                                {destinationData.country}
                            </p>
                        </div>
                        <article className="text-blue -500 mt-[15%] mx-[5%] mb-[5%] text-sm">
                            <h3>{destinationData.message}</h3>
                        </article>
                    </div>
                    <div className="flex justify-end gap-[0.625rem] mr-[7%]">
                        <PopUp id={id} />
                    </div>
                </>
            ) : (
                <div>Loading...</div>
            )}
        </div>
    );
};


export default Detail;