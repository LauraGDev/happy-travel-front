import React, { useState } from 'react'

const InputImg = ({value, title, onChange}) => {
    // const fileInputRef = React.useRef(null);

    // const handleFileClick = () => {
    //     fileInputRef.current.click();
    // };

    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setSelectedFile(file);
        console.log('Archivo seleccionado:', file);
    };

return (
    <div className="relative flex flex-col mx-2 my-4">
        
        <h2 className="font-jaldi text-blue text-[1.1rem] font-bold ml-2">{title}</h2>
        <input 
        id="file-upload"
        type="file"
        value={value} 
        onChange={handleFileChange}
        className=" rounded-[1.2rem] focus:ring-4 text-transparent font-jaldi font-[400] pr-[7rem] shadow-[inset_0_4px_4px_-0px_rgba(0,0,0,0.2)] bg-yellow h-[2.7rem]
        file:bg-blue file:rounded-tl-full file:text-transparent file:rounded-bl-full file:border-none file:h-[2.7rem] file:w-[3.5rem] file:cursor-pointer file:shadow-2xl "/>
        <img src="./Assets/File-icon.svg" alt="icono carpeta" className="absolute pl-4 py-[2.2rem] w-[18%]"/>
        <label htmlFor="file-upload"
        className={`absolute pl-[4rem] py-[2.3rem] text-l text-blue ${selectedFile ? 'hidden' : ''}`}>
            Sube una imagen...
        </label>
        
    </div>
    )
}
    

export default InputImg
