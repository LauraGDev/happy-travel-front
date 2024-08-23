import React from 'react'
import Button from '../components/buttons/Button'
import DestinationCard from '../components/home/DestinationCard'
import SearchBar from '../components/navbar/SearchBar'
import PopUp from '../components/popUp/popUp'
import Navbar from '../components/navbar/Navbar'


const Home = () => {
  return (
    <div>

      {/* <Button text="Aceptar" className="bg-green"/>
      <Button text="Cancelar" className="bg-pink"/> */}
      <Navbar/>
      <DestinationCard/>
      <SearchBar/>
      <PopUp/>

    </div>
  )
}

export default Home
