import React from 'react'
import Result from './Result'

const ResultsList = ({ results }) => {

  return (
    <div className="w-full bg-[white] flex flex-col shadow-[0px_0px_8px_#ddd] max-h-[300px] overflow-y-scroll mt-4 rounded-[10px]">
      {results.map((result, id) =>{
        return <Result result={result} key={id} />
      })}
    </div>
  )
}

export default ResultsList
