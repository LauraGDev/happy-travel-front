/* import  { useState } from 'react';
import React from 'react'
import PopUp from '../components/popUp/popUp'


const Detail = () => {
  const [searchInput, setSearchInput] = useState('');
    const [destinationData, destionationData] = useState(null);
    const [error, setError] = useState(null);

    const handleSearch = async () => {
        try {
            const response = await fetch(`http://localhost:4001/destinations`);
            method:'GET',
            header
            const data = await response.json();
            if (data.status === 'ok') {
              destinationData(data.data);
                setError(null);
            } else {
              destinationData(null);
                setError(data.data);
            }
        } catch (err) {
            setError(err.message);
        }
    }; 
  return (
    <div>
      
      <div >
        <img className="placeImg rounded-b-xl h-96 "  src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Playa_Blanca%2C_Bar%C3%BA.jpg/320px-Playa_Blanca%2C_Bar%C3%BA.jpg"></img>
        </div>
        <div className="lol">
        <div className="absolute bg-pink w-[90%] h-[5.25rem] ml-5 mr-5 text-center rounded-[1.25rem] -mt-[6.40rem] mx-[3.5625rem]">

        <p className="text-yellow text-[1.5625rem] mt-[0.3125rem]">
        Isla Barú
        </p>
        <p className="text-yellow text-[1.25rem] font-thin">
          Colombia
        </p>
        </div>
        
      
      <article className="text-blue -500 mt-[15%] mx-[5%] mb-[5%] text-sm">

        
            <h3>La península de Barú (a veces denominada Isla de Barú o simplemente Barú), es una zona costera situada al sur y a 45 minutos en lancha de Cartagena, Colombia, famosa por sus playas blancas y agua turquesa. Está separada del territorio por el canal del Dique.
            Hoy en día es un lugar de gran auge turístico. La mayoría de las playas son privadas, propiedad de particulares o emprendimientos turísticos, salvo Playa Blanca que es la única playa pública.
            En las aguas de mar que están en frente de Barú tuvo lugar la famosa batalla de Barú en 1708, durante la cual se hundió el galeón San José.</h3>
      </article>
      </div>
      <div className="flex justify-end gap-[0.625rem] mr-[7%]">
      <PopUp/>
      </div>
    
      </div>
    
  )
}

export default Detail
 */

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PopUp from '../components/popUp/popUp';

const Detail = ({ id }) => {
    const [destinationData, setDestinationData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchDestination = async () => {
            try {
                const response = await fetch(`http://localhost:4001/destinations/11`);
                
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
                        <PopUp />
                    </div>
                </>
            ) : (
                <div>Loading...</div>
            )}
        </div>
    );
};

Detail.propTypes = {
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
};

export default Detail;