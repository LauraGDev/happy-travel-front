import { useEffect, useState } from 'react'
import ResultsList from './ResultsList';
import { useAuth } from '../../../hooks/useAuth';



const SearchBar = ({ setResults }) => {
    const userAuth = useAuth().isAuthenticated;

    const [value, setValue] = useState("");
    const [result, setResultState] = useState([]);

    const fetchData = async (value) => {
        try {
            const res = await fetch('http://localhost:4001/destinations');
            const data = await res.json();
            
            const results = data.filter((destination) => {
                return (
                    value && 
                    destination && 
                    (destination.name.toLowerCase().includes(value.toLowerCase()) || 
                     destination.country.toLowerCase().includes(value.toLowerCase()))
                );
            });
            setResults(results);
            setResultState(results);
        } catch (error) {
            console.error('Error fetching data:', error);
        };
    }

    const handleChange =  (value) => {
        setValue(value);
        if (value === "") {
            setResults([]);
            setResultState([]);
        } else {
            fetchData(value); 
        }
    }

    useEffect(() => {
        setValue("");
        setResults([]);
        setResultState([]);
    }, []);

  return (
    <div className={`flex relative ${userAuth ? "block" : "hidden"} `}>
        <form 
        onSubmit={(e) => e.preventDefault()}  
        method="post" >
            <label className="flex flex-row items-stretch " />
            <input 
                type="text" 
                className={`rounded-[1.2rem] focus:ring-4 text-l font-jaldi pl-4 pr-4 py-[1.2rem] shadow-[inset_0_5px_6px_-1px_rgba(0,0,0,0.3)] bg-yellow h-[2rem] placeholder-blue`}
                placeholder='Busca un destino...'
                value={value}
                onChange={(e) => handleChange(e.target.value)}
            />
            <button
                type="submit"
                className="ml-[-2.5rem] mt-[0.4rem] absolute "
                >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.59366 17.569C14.0675 17.5535 17.6491 14.0066 17.6374 9.60384C17.627 5.19982 14.0623 1.62059 9.67157 1.60639C5.23283 1.5922 1.56027 5.19982 1.58365 9.5535C1.60832 14.0066 5.18478 17.5858 9.59366 17.569ZM22.9242 20.9172C23.6099 21.6039 23.6631 22.3719 23.0774 22.9604C22.4904 23.549 21.7074 23.5026 21.023 22.8249C19.7646 21.5819 18.5192 20.3273 17.2556 19.0895C16.8751 18.7165 16.6401 18.2983 16.7518 17.7691C16.8608 17.2528 16.405 17.116 16.1557 16.8746C15.9193 16.6448 15.757 17.0011 15.5934 17.1224C12.6792 19.2715 9.49236 19.8085 6.1172 18.4971C2.63685 17.1444 0.575905 14.5332 0.0876167 10.8442C-0.703255 4.86681 3.96016 -0.173541 10.0274 0.00458141C15.1025 0.153017 19.1542 4.34793 19.2477 9.54963C19.249 11.7955 18.5634 13.8026 17.1582 15.5684C17.044 15.7129 16.7193 15.8627 16.9362 16.0834C17.1712 16.3247 17.3128 16.7739 17.7673 16.6874C18.3712 16.5713 18.8049 16.8139 19.2088 17.2192C20.4425 18.4583 21.6879 19.682 22.9242 20.9172Z" fill="#FF0060"/>
                </svg>
            </button>
        </form>
    </div>
)
}


export default SearchBar
