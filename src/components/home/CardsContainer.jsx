import { useState, useEffect } from "react";
import DestinationCard from "./DestinationCard"
import PreviousNextIcons from "./PreviousNextIcons"

const CardsContainer = () => {
    const itemsPerPage = 8;
    const [actualPage, setActualPage] = useState(1);
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 768);

    const updatePageNumber = (page) => {
        setActualPage(page);
    };

    useEffect(() => {
        const handleResize = () => {
            setIsLargeScreen(window.innerWidth >= 768);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    

    //ESTO SE BORRA ES PARA PROBAR COMO SE VEN y aquí iría el fetch creo
    let destinations = []
    for(let i = 0; i < 18; i++) {
        if(i < 8) {
            destinations.push(["Assets/foto-prueba-BORRAR.png", "Islas Azores", "Portugal"]);
        } else if ( i > 7 && i < 16) {
            destinations.push(["Assets/foto-prueba-BORRAR-2.jpg", "Marina D'Or", "Españita"]);
        } else {
            destinations.push(["Assets/foto-prueba-BORRAR-3.jpg", "Phuket", "Tailandia"]);
        }
    }

    const lastElementIndex = actualPage * itemsPerPage;
    const firstElementIndex = lastElementIndex - itemsPerPage;
    const actualItems = isLargeScreen ? destinations.slice(firstElementIndex, lastElementIndex) : destinations;

    return (
    <section className="flex flex-col">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mx-12 my-8 lg:mx-[4.375rem]">
            {actualItems?.map((des, index) => (
                <DestinationCard 
                key={index} 
                photo={des[0]} 
                destination={des[1]} 
                country={des[2]} 
                createdBy={3} 
                actualUser={2} 
                isLoggedIn={false}/>
            ))}
        </div>
        <div className={`flex justify-center ${destinations.length <= 8 || !isLargeScreen ? "hidden" : "block"}`}>
            <PreviousNextIcons 
            page={actualPage}
            onClick={updatePageNumber}
            totalPages = {destinations.length/itemsPerPage}
            />
        </div>
    </section>
  )
}

export default CardsContainer
