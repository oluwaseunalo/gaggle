import { createContext, useContext, useState} from "react";

const ResultContext = createContext();
const baseUrl = 'https://google-search3.p.rapidapi.com/api/v1';

export const ResultContextProvider = ({children}) => {
        const [results, setResults] = useState([]);
        const [isLoading, setIsLoading] = useState(false)
        const [searchTerm, setSearchTerm] = useState('elon musk');


const getResults = async (type) => {
    setIsLoading(true);

    const response = await fetch(`${baseUrl}${type}`, {
        method: 'Get',
        headers: {
            'x-user-agent': 'desktop',
            'x-rapidapi-host': 'google-search3.p.rapidapi.com',
            'x-rapidapi-key': 'ca1f4e7103mshf62990c8b796226p19cc5ejsnfd1f386798de'
        }
    });

    const data = await response.json();


    if (type.includes('/news')){
        setResults(data.entries);
    } else if (type.includes('/images')) {
        setResults(data.image_results);
    } else {
        setResults(data.results);
    }

    console.log(data);

    
    setIsLoading(false)

}
return (
    <ResultContext.Provider value={{getResults, results, searchTerm,setSearchTerm, isLoading}}>
        {children}
    </ResultContext.Provider>
);

}

export const useResultContext = () => useContext(ResultContext);


