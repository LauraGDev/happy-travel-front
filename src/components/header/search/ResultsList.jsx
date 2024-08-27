import React from 'react'
import Result from './Result'

const ResultsList = ({ results }) => {

  return (
    <div className="absolute w-auto bg-[white] flex flex-col shadow-[0px_0px_8px_#ddd] max-h-[300px] overflow-y-scroll  rounded-[10px] lg:mt-[4.8rem] mt-[8.4rem] z-50 top-0 max-w-[15rem] ">
      {results.map((result, id) =>{
        return <Result result={result} key={id} />
      })}
    </div>
  )
}

export default ResultsList
