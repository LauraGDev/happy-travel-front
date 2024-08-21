const PreviousNextIcons = ({page,onClick}) => {
    return(
        <div className="inline-flex items-center justify-center space-x-2">
            <div className="bg-blue w-[60px] h-[40px] p-1 rounded-full inline-flex items-center justify-center">
                <img src="/Assets/Arrows-icon.svg" alt="pagina anterior" onClick={onClick} className="rotate-[180deg]"/>
            </div>
            <p>{page}</p>
            <div className="bg-blue w-[60px] h-[40px] p-1 rounded-full inline-flex items-center justify-center">
                <img src="/Assets/Arrows-icon.svg" alt="pagina siguiente" onClick={onClick}/>
            </div>
        </div>
    )
}

export default PreviousNextIcons;