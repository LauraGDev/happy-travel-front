import React from 'react'
import { useNavigate } from 'react-router-dom'

const Result = ({result}) => {
    const navigate = useNavigate()
	
	const handleRedirect = () => {
		navigate(`/detail/${result.name}`, { state: { data: result.id} })
	}


  return (
    <div className="px-5 py-3 border-yellow hover:bg-pink hover:rounded-[1.5rem] hover:font-bold hover:text-yellow bg-yellow"  onClick={handleRedirect}>
      {result.name}
    </div>
  )
}

export default Result
