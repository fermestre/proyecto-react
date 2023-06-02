import React, { useState } from 'react'
import imagenes from "../Images/Imagenes.jsx";
import "../Styles/Bodygrid.css"




export const Bodygrid = () => {

  
  
  const [showUkelele, setShowUkelele] = useState(true);
  const [showGuitarraA, setShowGuitarraA] = useState(true);
  const [showGuitarraE, setShowGuitarraE] = useState(true);
  

  const handleUkeleleToggle = () => {
    setShowUkelele(!showUkelele);
  };

  const handleGuitarraAToggle = () => {
    setShowGuitarraA(!showGuitarraA);
  };

  const handleGuitarraEToggle = () => {
    setShowGuitarraE(!showGuitarraE);
  };


// La funcion del boton mostraba la misma imagen para todos, y no añadia nada
{/* <button onClick={() => handleBuyButtonClick("Producto 3", imagenes.producto3)}> Añadir al carrito</button> */}


// Está por ahora está en Comment, pero funciona sin problema

  // const handleBuyButtonClick = (productName, productImage) => {
  //   const product = {
  //     name: productName,
  //     image: productImage,
  //   };
  //   onAddProduct(product);
  // };
  

  return (

    <React.Fragment>

      <div className="bodygrid-globalcontainer">
      <h1>La Cuerda Mágica</h1>
    <section className="product-container">
    <aside className="filters">
      <article className="filter-box">
        <h3>Filtros:</h3>
        <ul id="list1">
        <div>
          <input 
         type="checkbox"
         id="ukelele"
         value="ukelele"
         checked={showUkelele}
         onChange={handleUkeleleToggle}

          />
            <label htmlFor="ukelele"> Ukelele</label>
        </div>
          <div>
            <input 
          type="checkbox" 
          name="instrumentos" 
          value="fguitarraacustica"
          id="fguitarraacustica"
          checked={showGuitarraA}
         onChange={handleGuitarraAToggle}

          />
            <label htmlFor="guitarra-acustica"> Guitarra Acustica</label> 
            </div>

          <div>    

             <input 
          type="checkbox" 
          name="instrumentos" 
          value="fguitarraelectrica" 
          id="fguitarraelectrica"
          checked={showGuitarraE}
          onChange={handleGuitarraEToggle}/>
            <label htmlFor="Ukelele"> Guitarra Electrica</label> 
            </div>

        </ul>
      </article>
    </aside>




    <article className="product-grid">
 

        
    {showGuitarraA && (
      <figure className="product-item" name="guitarraacustica" >
        <p>5.00 ⭐</p>
        <img src={imagenes.producto1} alt="Product 1"/>
        <figcaption>Fender CD-60S</figcaption>
        <p>$1.200.000</p>
        <button>Añadir al carrito</button>
      </figure>
    )}


{showGuitarraA && (
      <figure className="product-item" name="guitarraacustica">
        <p>5.00 ⭐</p>
        <img src={imagenes.producto2} alt="Product 2"/>
        <figcaption>Fender Tim Armstrong Hell</figcaption>
        <p>$2.500.000</p>
        <button>Añadir al carrito</button>
      </figure>
)}
 {showGuitarraA && (
      <figure className="product-item" name="guitarraacustica">
        <p>5.00 ⭐</p>
        <img src={imagenes.producto3} alt="Product 3"/>
        <figcaption>Fender LE PO-220E Orch.</figcaption>
        <p>$3.965.000</p>
        <button>Añadir al carrito</button>
      </figure>
 )}
 
      {showGuitarraA && (
      <figure className="product-item" name="guitarraacustica">
        <p>5.00 ⭐</p>
        <img src={imagenes.producto4} alt="Product 4"/>
        <figcaption>Fender FA-135CE Concert</figcaption>
        <p>$1.200.000</p>
        <button>Añadir al carrito</button>
      </figure>
      )}

{showGuitarraE && (
      <figure className="product-item">
        <p>5.00 ⭐</p>
        <img src={imagenes.producto5} alt="Product 5"/>
        <figcaption>Player Stratocaster® HSS</figcaption>
        <p>$4.220.000</p>
        <button>Añadir al carrito</button>
      </figure>
)}
     {showGuitarraE && (
      <figure className="product-item">
        <p>5.00 ⭐</p>
        <img src={imagenes.producto6} alt="Product 6"/>
        <figcaption>Player + Stratocaster® HSS</figcaption>
        <p>$5.600.000</p>
        <button>Añadir al carrito</button>
      </figure>
     )}
      
      {showGuitarraE && (
      <figure className="product-item">
        <p>5.00 ⭐</p>
        <img src={imagenes.producto7} alt="Product 7"/>
        <figcaption>Landau Stratocaster®</figcaption>
        <p>$14.350.000</p>
        <button>Añadir al carrito</button>
      </figure>
      )}
 
 {showGuitarraE && (
      <figure className="product-item">
        <p>5.00 ⭐</p>
        <img src={imagenes.producto8} alt="Product 8"/>
        <figcaption>Tash Sultana Stratocaster®</figcaption>
        <p>$7.050.000</p>
        <button>Añadir al carrito</button>
      </figure>
 )}

      {showUkelele && (
    
      <figure className="product-item">
        <p>5.00 ⭐</p>
        <img src={imagenes.producto9} alt="Product 9" name="ukelele"/>
        <figcaption>Lanikai MA-C Concierto</figcaption>
        <p>$150.000</p>
        <button>Añadir al carrito</button>
      </figure>

      )}

{showUkelele && (

      <figure className="product-item">
        <p>5.00 ⭐</p>
        <img src={imagenes.producto10} alt="Product 10" name="ukelele"/>
        <figcaption>3x Kahakai SOP CON</figcaption>
        <p>$400.000</p>
        <button>Añadir al carrito</button>
      </figure>

)}
{showUkelele && (
    
      <figure className="product-item">
        <p>5.00 ⭐</p>
        <img src={imagenes.producto11} alt="Product 11" name="ukelele"/>
        <figcaption>KA-S Ukelele Soprano</figcaption>
        <p>$450.000</p>
        <button>Añadir al carrito</button>
      </figure>
      
)}
{showUkelele && (
    
      <figure className="product-item">
        <p>5.00 ⭐</p>
        <img src={imagenes.producto12} alt="Product 12" name="ukelele"/>
        <figcaption>BS1 Soprano</figcaption>
        <p>$300.000</p>
        <button>Añadir al carrito</button>
      </figure>

)}
 {showGuitarraA && (
      <figure className="product-item">
        <p>5.00 ⭐</p>
        <img src={imagenes.producto13} alt="Product 13"/>
        <figcaption>Yamaha STORIA I</figcaption>
        <p>$300.000</p>
        <button>Añadir al carrito</button>
      </figure>
 )}
       {showGuitarraA && (
      <figure className="product-item">
        <p>5.00 ⭐</p>
        <img src={imagenes.producto14} alt="Product 14"/>
        <figcaption>Yamaha C40</figcaption>
        <p>$600.000</p>
        <button>Añadir al carrito</button>
      </figure>
       )}
      {showGuitarraA && (
      <figure className="product-item">
        <p>5.00 ⭐</p>
        <img src={imagenes.producto15} alt="Product 15"/>
        <figcaption>Yamaha F370</figcaption>
        <p>$1.150.000</p>
        <button>Añadir al carrito</button>
      </figure>
      )}

      {showGuitarraA && (
      <figure className="product-item">
        <p>5.00 ⭐</p>
        <img src={imagenes.producto16} alt="Product 16"/>
        <figcaption>Yamaha Classic C-70</figcaption>
        <p>$500.000</p>
        <button onClick={() => handleBuyButtonClick("Producto 1", imagenes.producto1)}> Añadir al carrito</button>
      </figure>
      )}
      {showGuitarraE && (
      <figure className="product-item">
        <p>5.00 ⭐</p>
        <img src={imagenes.producto17} alt="Product 17"/>
        <figcaption>Yamaha Pacific J117</figcaption>
        <p>$1.350.000</p>
        <button onClick={() => handleBuyButtonClick("Producto 2", imagenes.producto2)}> Añadir al carrito</button>
      </figure>
      )}
      
      {showGuitarraE && (
      <figure className="product-item">
        <p>5.00 ⭐</p>
        <img src={imagenes.producto18} alt="Product 18"/>
        <figcaption>Yamaha Pacific VXM</figcaption>
        <p>$3.550.000</p>
        <button> Añadir al carrito</button>
      </figure>
      )}
      
      {showGuitarraE && (
      <figure className="product-item">
        <p>5.00 ⭐</p>
        <img src={imagenes.producto19} alt="Product 19"/>
        <figcaption>Yamaha Pacific 192VX</figcaption>
        <p>$2.450.000</p>
        <button>Añadir al carrito</button>
      </figure>
      )}
      
      {showGuitarraE && (
      <figure className="product-item">
        <p>5.00 ⭐</p>
        <img src={imagenes.producto20} alt="Product 20"/>
        <figcaption>Yamaha Pacific 112J</figcaption>
        <p>$1.350.000</p>
        <button>Añadir al carrito</button>
      </figure>
      )}

    </article>

  </section>

  <section className="navigation">

    <a href="#">Anterior</a>
    <a href="#">Página 1</a>
    <a href="#">Página 2</a>
    <a href="#">Página 3</a>
    <a href="#">Página 4</a>
    <a href="#">Página 5</a>
    <a href="#">Siguiente</a>

  </section>
  </div>

</React.Fragment>

  );
};