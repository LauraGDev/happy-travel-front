import { useState, useEffect } from "react";
import DestinationCard from "./DestinationCard"
import PreviousNextIcons from "./PreviousNextIcons"

const CardsContainer = () => {
    const itemsPerPage = 8;
    const [actualPage, setActualPage] = useState(1);
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 768);
    const [destinations, setDestinations] = useState([])

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
        } catch (error) {
            console.error('Error fetching destinations:', error);
        }
    };

    console.log(destinations)

    const lastElementIndex = actualPage * itemsPerPage;
    const firstElementIndex = lastElementIndex - itemsPerPage;
    const actualItems = isLargeScreen ? destinations.slice(firstElementIndex, lastElementIndex) : destinations;

    return (
      <section className="flex flex-col">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mx-8 my-8 lg:mx-[4.375rem] z-[-1] relative">
          {actualItems?.map((des, index) => (
            <DestinationCard
              key={index}
              photo={des.image}
              name={des.name}
              country={des.country}
              createdBy={des.id_user}
              actualUser={2}
              isLoggedIn={false}
            />
          ))}
        </div>
        <div
          className={`flex justify-center ${
            destinations.length <= 8 || !isLargeScreen ? "hidden" : "block"
          }`}
        >
          <PreviousNextIcons
            page={actualPage}
            onClick={updatePageNumber}
            totalPages={destinations.length / itemsPerPage}
          />
        </div>
      </section>
    );
}

export default CardsContainer
