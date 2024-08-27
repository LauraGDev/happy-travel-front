import { useState } from 'react'

const InputImg = ({ id, title, onChange }) => {
    const presetName = "hxreahpb";
    const cloudName = "dugbix24o";
    const [loading, setLoading] = useState(false);
    const [selectedFile, setSelectedFile] = useState(false);

    const handleFileChange = async (e) => {
        const file = e.target.files[0];
        setSelectedFile(file);
        const imgUrl = await uploadImage(file);
        onChange(imgUrl);
    };

    const uploadImage = async (file)=>{
        const data = new FormData()
        data.append('file', file)
        data.append('upload_preset',presetName)
        setLoading(true)
        setSelectedFile(true)
        try {
            
            const response = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
                method: 'POST',
                body: data
            });
            const file = await response.json()
            setLoading(false)
            return file.secure_url
        } catch (error) {
            console.error('Error uploading image:', error);
            setLoading(false);
        }

    }

return (
    <div className="relative flex flex-col mx-2 my-4">
        
        <label htmlFor={id} className="text-blue text-[1.1rem] font-bold ml-2">{title}</label>
        <input 
        id={id}
        type="file"
        onChange={handleFileChange}
        className="rounded-[1.2rem] focus:ring-4 text-transparent font-[400] pr-[7rem] shadow-[inset_0_4px_4px_-0px_rgba(0,0,0,0.2)] bg-yellow h-[2.7rem]
        file:bg-blue file:bg-[url('./Assets/File-icon.svg')] file:bg-no-repeat file:bg-center file:rounded-tl-full file:text-transparent file:rounded-bl-full file:border-none file:h-[2.7rem] file:w-[3.5rem] file:cursor-pointer file:shadow-2xl"/>
        {/* <img src="./Assets/File-icon.svg" alt="icono carpeta" className="absolute pl-4 py-[2.2rem] w-[18%]"/> */}
        {/* <label htmlFor="file-upload"
        className={`absolute pl-[4rem] py-[2.3rem] text-l text-blue ${selectedFile ? 'hidden' : ''}`}>
            { loading ? 'Cargando imagen...' : 'Sube una imagen...' }
        </label> */}
        
    </div>
    )
}
    

export default InputImg