import React, { useState } from 'react'
import imagenes from "../Images/Imagenes.jsx";
import "../Styles/Bodygrid.css"




export const Bodygrid = () => {

  const [showUkelele, setShowUkelele] = useState(false);
  const [showGuitarraA, setShowGuitarraA] = useState(false);
  const [showGuitarraE, setShowGuitarraE] = useState(false);

  const handleUkeleleToggle = () => {
    setShowUkelele(!showUkelele);
  };

  const handleGuitarraAToggle = () => {
    setShowGuitarraA(!showGuitarraA);
  };

  const handleGuitarraEToggle = () => {
    setShowGuitarraE(!showGuitarraE);
  };

  

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
        <img src={imagenes.producto1} alt="Product 4"/>
        <figcaption>Fender CD-60S</figcaption>
        <p>$1.200.000</p>
        <button>Añadir al carrito</button>
      </figure>
    )}

{showGuitarraA && (
      <figure className="product-item" name="guitarraacustica">
        <p>5.00 ⭐</p>
        <img src={imagenes.producto2} alt="Product 4"/>
        <figcaption>Fender Tim Armstrong Hell</figcaption>
        <p>$2.500.000</p>
        <button>Añadir al carrito</button>
      </figure>
)}
 {showGuitarraA && (
      <figure className="product-item" name="guitarraacustica">
        <p>5.00 ⭐</p>
        <img src={imagenes.producto3} alt="Product 4"/>
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
        <img src={imagenes.producto5} alt="Product 1"/>
        <figcaption>Player Stratocaster® HSS</figcaption>
        <p>$4.220.000</p>
        <button>Añadir al carrito</button>
      </figure>
)}
     {showGuitarraE && (
      <figure className="product-item">
        <p>5.00 ⭐</p>
        <img src={imagenes.producto6} alt="Product 1"/>
        <figcaption>Player + Stratocaster® HSS</figcaption>
        <p>$5.600.000</p>
        <button>Añadir al carrito</button>
      </figure>
     )}
      
      {showGuitarraE && (
      <figure className="product-item">
        <p>5.00 ⭐</p>
        <img src={imagenes.producto7} alt="Product 1"/>
        <figcaption>Landau Stratocaster®</figcaption>
        <p>$14.350.000</p>
        <button>Añadir al carrito</button>
      </figure>
      )}
 
 {showGuitarraE && (
      <figure className="product-item">
        <p>5.00 ⭐</p>
        <img src={imagenes.producto8} alt="Product 1"/>
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
        <img src={imagenes.producto13} alt="Product 1"/>
        <figcaption>Yamaha STORIA I</figcaption>
        <p>$300.000</p>
        <button>Añadir al carrito</button>
      </figure>
 )}
       {showGuitarraA && (
      <figure className="product-item">
        <p>5.00 ⭐</p>
        <img src={imagenes.producto14} alt="Product 1"/>
        <figcaption>Yamaha C40</figcaption>
        <p>$600.000</p>
        <button>Añadir al carrito</button>
      </figure>
       )}
      {showGuitarraA && (
      <figure className="product-item">
        <p>5.00 ⭐</p>
        <img src={imagenes.producto15} alt="Product 1"/>
        <figcaption>Yamaha F370</figcaption>
        <p>$1.150.000</p>
        <button>Añadir al carrito</button>
      </figure>
      )}

      {showGuitarraA && (
      <figure className="product-item">
        <p>5.00 ⭐</p>
        <img src={imagenes.producto16} alt="Product 1"/>
        <figcaption>Yamaha Classic C-70</figcaption>
        <p>$500.000</p>
        <button>Añadir al carrito</button>
      </figure>
      )}
      {showGuitarraE && (
      <figure className="product-item">
        <p>5.00 ⭐</p>
        <img src={imagenes.producto17} alt="Product 1"/>
        <figcaption>Yamaha Pacific 112VM</figcaption>
        <p>$1.600.000</p>
        <button>Yamaha Pacific 112J</button>
      </figure>
      )}
      
      {showGuitarraE && (
      <figure className="product-item">
        <p>5.00 ⭐</p>
        <img src={imagenes.producto18} alt="Product 1"/>
        <figcaption>Yamaha Pacific 012</figcaption>
        <p>$1.000.000</p>
        <button>Añadir al carrito</button>
      </figure>
      )}
      
      {showGuitarraE && (
      <figure className="product-item">
        <p>5.00 ⭐</p>
        <img src={imagenes.producto19} alt="Product 1"/>
        <figcaption>Yamaha Pacific 120H</figcaption>
        <p>$1.400.000</p>
        <button>Añadir al carrito</button>
      </figure>
      )}
      
      {showGuitarraE && (
      <figure className="product-item">
        <p>5.00 ⭐</p>
        <img src={imagenes.producto20} alt="Product 1"/>
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