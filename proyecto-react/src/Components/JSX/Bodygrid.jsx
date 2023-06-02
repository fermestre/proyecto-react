import React from 'react'
import imagenes from "../Images/Imagenes.jsx";
import "../Styles/Bodygrid.css"



export const Bodygrid = ({onAddProduct}) => {

    const handleBuyButtonClick = (productName, productImage) => {
      const product = {
        name: productName,
        image: productImage,
      };
      onAddProduct(product);
    };

  return (

    <React.Fragment>
      <div className="bodygrid-globalcontainer">
      <h1>La Cuerda Mágica</h1>
    <section className="product-container">
    <aside className="filters">
      <article className="filter-box">
        <h3>Filtros:</h3>
        <ul id='list1'>
          <li><input type="checkbox" name="#" id="#"/> Bateria</li>
          <li><input type="checkbox" name="#" id="#"/> Viola y Violin</li>
          <li><input type="checkbox" name="#" id="#"/> Piano y teclado</li>
          <li><input type="checkbox" name="#" id="#"/> Guitarra acustica</li>
          <li><input type="checkbox" name="#" id="#"/> Guitarra electrica</li>

        </ul>
        <ul id='list2'>
        <li><input type="checkbox" name="#" id="#"/> Rojo</li>
          <li><input type="checkbox" name="#" id="#"/> Rosa</li>
          
          <li><input type="checkbox" name="#" id="#"/> Negro</li>
          <li><input type="checkbox" name="#" id="#"/> Blanco</li>
          <li><input type="checkbox" name="#" id="#"/> Morado</li>

        </ul>
      </article>
    </aside>

    <article className="product-grid">
      <figure className="product-item">
        <p>5.00 ⭐</p>
        <img src={imagenes.producto1} alt="Product 1"/>
        <figcaption>Producto 1</figcaption>
        <p>$500.000</p>
        <button onClick={() => handleBuyButtonClick("Producto 1", imagenes.producto1)}> Añadir al carrito</button>
      </figure>

      <figure className="product-item">
        <p>5.00 ⭐</p>
        <img src={imagenes.producto1} alt="Product 1"/>
        <figcaption>Producto 2</figcaption>
        <p>$500.000</p>
        <button onClick={() => handleBuyButtonClick("Producto 2", imagenes.producto2)}> Añadir al carrito</button>
      </figure>

      <figure className="product-item">
        <p>5.00 ⭐</p>
        <img src={imagenes.producto1} alt="Product 1"/>
        <figcaption>Producto 3</figcaption>
        <p>$500.000</p>
        <button onClick={() => handleBuyButtonClick("Producto 3", imagenes.producto3)}> Añadir al carrito</button>
      </figure>

      <figure className="product-item">
        <p>5.00 ⭐</p>
        <img src={imagenes.producto1} alt="Product 1"/>
        <figcaption>Producto 4</figcaption>
        <p>$500.000</p>
        <button onClick={() => handleBuyButtonClick("Producto 4", imagenes.producto4)}>Añadir al carrito</button>
      </figure>





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

  )
}