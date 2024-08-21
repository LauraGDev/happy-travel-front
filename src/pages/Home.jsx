/* import Button from '../components/buttons/Button' */
import CardsContainer from '../components/home/CardsContainer'
import SearchBar from '../components/navbar/SearchBar'
import Input from '../components/input/Input'
import Login from './Login'
import SignIn from './SignIn'
import Edit from './Edit'


const Home = () => {
  return (
    <div>
      {/* <Button text="Aceptar" className="bg-green"/>
      <Button text="Cancelar" className="bg-pink"/> */}
      <CardsContainer/>
      <SearchBar/>

      <Login/>
      <Edit />

    </div>
  )
}

export default Home
