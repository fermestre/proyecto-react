import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [instrumento, setInstrumento ] = useState(null)
    const [ loading, setLoading ] = useState(true)
    const [error, setError] = useState(null)
    
    useEffect(() => {
        setLoading(true)
        fetch(url)
            .then((response) => response.json())
            .then((instrumento) => setInstrumento(instrumento))
            .catch((error) => setError(error))
            .finally(() => setLoading(false))
    }, []);

    return {instrumento, loading, error};

}

export default useFetch
