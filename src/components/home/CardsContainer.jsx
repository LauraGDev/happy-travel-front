import DestinationCard from "./DestinationCard"

const CardsContainer = () => {
    //ESTO SE BORRA ES PARA PROBAR COMO SE VEN
    let destinations = []
    for(let i = 0; i < 6; i++) {
        destinations.push(["Assets/foto-prueba-BORRAR.png", "Islas Azores", "Portugal"])
    }
  return (
    <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mx-12 my-8 lg:mx-[4.375rem] z-[-1] relative">
      {destinations?.map((des, index) => (
        <DestinationCard key={index} photo={des[0]} destination={des[1]} country={des[2]} createdBy={2} actualUser={3} isLoggedIn={false}/>
      ))}
    </section>
  )
}

export default CardsContainer
