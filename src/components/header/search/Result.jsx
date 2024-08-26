import React from 'react'

const Result = ({result}) => {
  return (
    <div className="px-5 py-2.5 hover:bg-[#efefef]">
        {/* onClick={(e) => } */}
      {result.name}
    </div>
  )
}

export default Result
