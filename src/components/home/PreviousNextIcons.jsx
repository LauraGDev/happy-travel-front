const PreviousNextIcons = ({ page, onClick, totalPages }) => {

    const handlePrevious = () => {
            if(page > 1 ) {
                onClick( page - 1 );
            }
        };
    const handleNext = () => {
        if(page < totalPages ) {
            onClick( page + 1 );
        }
    };

    return(
        <div className="inline-flex items-center justify-center space-x-2">
            <div 
            onClick={() => handlePrevious() }
            className="bg-blue w-[3.75rem] h-[2.5rem] p-1 rounded-full inline-flex items-center justify-center">
                <img src="/Assets/Arrows-icon.svg" alt="pagina anterior" className="rotate-[180deg]"/>
            </div>
            <p className="text-blue font-bold text-[1.563rem] px-5">{page}</p>
            <div 
            onClick={() => handleNext()}
            className="bg-blue w-[3.75rem] h-[2.5rem] p-1 rounded-full inline-flex items-center justify-center">
                <img src="/Assets/Arrows-icon.svg" alt="pagina siguiente"/>
            </div>
        </div>
    )
}

export default PreviousNextIcons;