import React from 'react'
import { useNavigate } from 'react-router-dom'

const Result = ({result}) => {
    const navigate = useNavigate()
	
	const handleRedirect = () => {
		navigate(`/detail/${result.name}`, { state: { data: result.id} })
	}


  return (
    <div className="px-5 py-2.5 hover:bg-[#efefef]"  onClick={handleRedirect}>
      {result.name}
    </div>
  )
}

export default Result
