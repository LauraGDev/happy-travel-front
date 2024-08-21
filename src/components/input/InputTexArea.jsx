import React, { useEffect, useRef } from 'react'

const InputTexArea = ({description, title}) => {
  const textareaRef = useRef(null);

  const adjustHeight = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  };

  useEffect(() => {
    adjustHeight();
  }, []);

  return (
    <div className="py-1 pl-1">
        <h2 className="font-jaldi text-blue text-[1.1rem] font-bold ml-2">{title}</h2>
        <textarea name="descripción" id="" className="rounded-[1.2rem] focus:ring-4 text-base font-jaldi font-[400] py-[1.2rem] pl-[1rem] pr-[1rem] lg:w-[95%] w-[18rem] shadow-[inset_0_4px_4px_-0px_rgba(0,0,0,0.2)] bg-yellow lg:h-[100%] 
       h-[auto] text-blue" ref={textareaRef} onInput={adjustHeight}>{description}</textarea>
    </div>
  )
}

export default InputTexArea
