import React from "react";
import imagenes from "../Images/Imagenes.jsx";
import "../Styles/Check.css"
import { Creditcard } from "./Creditcard.jsx";


export const Check = () => {
  return (

    <React.Fragment>
   


   <h1>CARRITO DE COMPRAS</h1>
<section className="product-container2">
  <article className="product-grid2">
    <figure className="product-item2">
      <p>5.00 ⭐</p>
      <img src={imagenes.producto1} alt="Product 1" />
      <figcaption>Producto 1</figcaption>
      <p>$500.000</p>
      <button>Eliminar del carrito</button>
    </figure>

    <figure className="product-item2">
      <p>5.00 ⭐</p>
      <img src={imagenes.producto1} alt="Product 1" />
      <figcaption>Producto 2</figcaption>
      <p>$500.000</p>
      <button>Eliminar del carrito</button>
    </figure>

    <figure className="product-item2">
      <p>5.00 ⭐</p>
      <img src={imagenes.producto1} alt="Product 1" />
      <figcaption>Producto 3</figcaption>
      <p>$500.000</p>
      <button>Eliminar del carrito</button>
    </figure>

    <figure className="product-item2">
      <p>5.00 ⭐</p>
      <img src={imagenes.producto1} alt="Product 1" />
      <figcaption>Producto 3</figcaption>
      <p>$500.000</p>
      <button>Eliminar del carrito</button>
    </figure>


    <figure className="product-item2">
      <p>5.00 ⭐</p>
      <img src={imagenes.producto1} alt="Product 1" />
      <figcaption>Producto 3</figcaption>
      <p>$500.000</p>
      <button>Eliminar del carrito</button>
    </figure>

    <figure className="product-item2">
      <p>5.00 ⭐</p>
      <img src={imagenes.producto1} alt="Product 1" />
      <figcaption>Producto 3</figcaption>
      <p>$500.000</p>
      <button>Eliminar del carrito</button>
    </figure>

    <figure className="product-item2">
      <p>5.00 ⭐</p>
      <img src={imagenes.producto1} alt="Product 1" />
      <figcaption>Producto 3</figcaption>
      <p>$500.000</p>
      <button>Eliminar del carrito</button>
    </figure>

    <figure className="product-item2">
      <p>5.00 ⭐</p>
      <img src={imagenes.producto1} alt="Product 1" />
      <figcaption>Producto 3</figcaption>
      <p>$500.000</p>
      <button>Eliminar del carrito</button>
    </figure>

    <figure className="product-item2">
      <p>5.00 ⭐</p>
      <img src={imagenes.producto1} alt="Product 1" />
      <figcaption>Producto 3</figcaption>
      <p>$500.000</p>
      <button>Eliminar del carrito</button>
    </figure>

    <figure className="product-item2">
      <p>5.00 ⭐</p>
      <img src={imagenes.producto1} alt="Product 1" />
      <figcaption>Producto 3</figcaption>
      <p>$500.000</p>
      <button>Eliminar del carrito</button>
    </figure>



  </article>
  <aside>
   
   <Creditcard/>

  </aside>
</section>

  
</React.Fragment>

 



  )
}