import { createContext } from "react";
import useFetch from "../hook/useFetch";

export const dataContext = createContext();

const DataProvider = ({children}) => {
    
const  {instrumento, loading, error}  = useFetch('https://64710bc93de51400f72545a4.mockapi.io/instrumento');
    
    return (
        // Retornar los valores que están dentro de mi
        <dataContext.Provider value={instrumento}>{children}</dataContext.Provider>
    )
}

export default DataProvider;