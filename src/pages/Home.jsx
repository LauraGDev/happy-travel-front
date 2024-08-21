/* import Button from '../components/buttons/Button' */
import CardsContainer from '../components/home/CardsContainer'
import SearchBar from '../components/navbar/SearchBar'


const Home = () => {
  return (
    <div>
      {/* <Button text="Aceptar" className="bg-green"/>
      <Button text="Cancelar" className="bg-pink"/> */}
      <CardsContainer/>
      <SearchBar/>

    </div>
  )
}

export default Home
