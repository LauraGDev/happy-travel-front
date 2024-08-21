import React from 'react'
import Button from '../components/buttons/Button'
import DestinationCard from '../components/home/DestinationCard'
import SearchBar from '../components/navbar/SearchBar'
import Input from '../components/input/Input'


const Home = () => {
  return (
    <div>
      {/* <Button text="Aceptar" className="bg-green"/>
      <Button text="Cancelar" className="bg-pink"/> */}
      <DestinationCard/>
      <SearchBar/>
      <Input type="text" placeholder="Escribe tu nombre..." title="Nombre"/>

    </div>
  )
}

export default Home
