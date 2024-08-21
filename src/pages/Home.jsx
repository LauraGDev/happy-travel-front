// import React from 'react'
// import Button from '../components/buttons/Button'
import DestinationCard from '../components/home/DestinationCard'
import SearchBar from '../components/navbar/SearchBar'
import PreviousNextIcons from '../components/footer/PreviousNextIcons'


const Home = () => {
  return (
    <div>
      {/* <Button text="Aceptar" className="bg-green"/>
      <Button text="Cancelar" className="bg-pink"/> */}
      <DestinationCard/>
      <SearchBar/>
      <PreviousNextIcons/>
      

    </div>
  )
}

export default Home
