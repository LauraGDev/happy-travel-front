import React from 'react'

const InputTexArea = ({description, title}) => {
  return (
    <div className="py-1">
        <h2 className="font-jaldi text-blue text-[1.1rem] font-bold ml-2">{title}</h2>
        <textarea name="descripción" id="" className="rounded-[1.2rem] focus:ring-4 text-base font-jaldi font-[400] py-[1.2rem] pl-[1rem] pr-[1rem] w-[22rem] shadow-[inset_0_4px_4px_-0px_rgba(0,0,0,0.2)] bg-yellow h-[90%] text-blue">{description}</textarea>
    </div>
  )
}

export default InputTexArea
