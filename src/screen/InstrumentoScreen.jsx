import useFetch from '../hook/useFetch'
import React from 'react';

const añadirInstrumento = (instrumento) => {
    console.log(instrumento);   
}

function InstrumentoScreen() {
        const {instrumento, loading, error}  = useFetch('https://64710bc93de51400f72545a4.mockapi.io/instrumento');
        
        return (
        <main>
            <article className='instrumentos' id='contenedor'>
                {loading ? (<div>Cargando...</div>) : 
                    error ? (<div>Error: {error}</div>) : (

                        instrumento?.map((instrumento) => (
                        <section className="instrumento" key={instrumento.id}>
            
                            <img src={instrumento.imagen} alt={instrumento.nombre} />
                                
            
                            <section className="instrumento-info">
                                    
                                <p>{instrumento.nombre}</p>
                                <p>${instrumento.precio}</p>
            
                                <button onClick={() => añadirInstrumento(instrumento)}>Agregar al carrito</button>
                            </section>
            
                        </section>
                        )))
                        }
            </article>
        </main>
    )     
  
}

export default InstrumentoScreen;