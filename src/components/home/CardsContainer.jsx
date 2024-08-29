import { useState, useEffect } from "react";
import DestinationCard from "./DestinationCard"
import PreviousNextIcons from "./PreviousNextIcons"
import { useAuth } from "../../hooks/useAuth";

const CardsContainer = () => {
    const userAuth = useAuth().isAuthenticated;
    const actualUser = parseInt(localStorage.getItem("user"));
    const itemsPerPage = 8;
    const [actualPage, setActualPage] = useState(1);
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 768);
    const [destinations, setDestinations] = useState([])
    const [noDestinations, setNoDestinations] = useState(true);

    const updatePageNumber = (page) => {
        setActualPage(page);
    };

    useEffect(() => {
        fetchDestinations();
        const handleResize = () => {
            setIsLargeScreen(window.innerWidth >= 768);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    
    const fetchDestinations = async () => {
        try {
            const response = await fetch('http://localhost:4001/destinations');
            if (!response.ok) {
                throw new Error('Failed to fetch destinations');
            }
            const data = await response.json();
            setDestinations(data);
            setNoDestinations(false);
        } catch {
            setNoDestinations(true);
        }
    };

    const lastElementIndex = actualPage * itemsPerPage;
    const firstElementIndex = lastElementIndex - itemsPerPage;
    const actualItems = isLargeScreen ? destinations.slice(firstElementIndex, lastElementIndex) : destinations;

    return (
      <section className="flex flex-col">
        { noDestinations && ( 
        <section className="flex justify-center items-center">
            <h2 className="text-blue font-extrabold text-3xl py-64">Aún no hay destinos disponibles</h2>
        </section>)}
        <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mx-8 my-8 lg:mx-[4.375rem] relative">
          {actualItems?.map((des) => (
            <DestinationCard
              key={des.id} 
              id={des.id} 
              photo={des.image}
              name={des.name}
              country={des.country}
              createdBy={des.id_user}
              actualUser={actualUser}
              isLoggedIn={userAuth}
            />
          ))}
        </section>
        <section
          className={`flex justify-center ${
            destinations.length <= 8 || !isLargeScreen ? "hidden" : "block"
          }`}
        >
          <PreviousNextIcons
            page={actualPage}
            onClick={updatePageNumber}
            totalPages={destinations.length / itemsPerPage}
          />
        </section>
      </section>
    );
}

export default CardsContainer
