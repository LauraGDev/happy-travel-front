import React from 'react'
import Button from '../components/buttons/Button'
import DestinationCard from '../components/home/DestinationCard'
import SearchBar from '../components/navbar/SearchBar'
import Input from '../components/input/Input'
import Login from './Login'


const Home = () => {
  return (
    <div>
      {/* <Button text="Aceptar" className="bg-green"/>
      <Button text="Cancelar" className="bg-pink"/> */}
      <DestinationCard/>
      <SearchBar/>
      <Login/>

    </div>
  )
}

export default Home
