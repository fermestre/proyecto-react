import React from 'react'
import imagenes from "../Images/Imagenes.jsx";
import "../Styles/Bodygrid.css"



export const Bodygrid = () => {
  return (

    <React.Fragment>
      <h1>NOMBRE DE LA TIENDA: MUSIC</h1>
    <section className="product-container">
    <aside className="filters">
      <article className="filter-box">
        <h3>Filtros:</h3>
        <ul id='list1'>
          <li><input type="checkbox" name="#" id="#"/>Categoria 1</li>
          <li><input type="checkbox" name="#" id="#"/>Categoria 2</li>
          <li><input type="checkbox" name="#" id="#"/>Categoria 3</li>
          <li><input type="checkbox" name="#" id="#"/>Categoria 4</li>
          <li><input type="checkbox" name="#" id="#"/>Categoria 5</li>
        </ul>
        <ul id='list2'>
          <li><input type="checkbox" name="#" id="#"/>Categoria 1</li>
          <li><input type="checkbox" name="#" id="#"/>Categoria 2</li>
          <li><input type="checkbox" name="#" id="#"/>Categoria 3</li>
          <li><input type="checkbox" name="#" id="#"/>Categoria 4</li>
          <li><input type="checkbox" name="#" id="#"/>Categoria 5</li>
        </ul>
      </article>
    </aside>

    <article className="product-grid">
      <figure className="product-item">
        <p>5.00 ⭐</p>
        <img src={imagenes.producto1} alt="Product 1"/>
        <figcaption>Producto 1</figcaption>
        <p>$500.000</p>
        <button>Añadir al carrito</button>
      </figure>

      <figure className="product-item">
        <p>5.00 ⭐</p>
        <img src={imagenes.producto1} alt="Product 1"/>
        <figcaption>Producto 2</figcaption>
        <p>$500.000</p>
        <button>Añadir al carrito</button>
      </figure>

      <figure className="product-item">
        <p>5.00 ⭐</p>
        <img src={imagenes.producto1} alt="Product 1"/>
        <figcaption>Producto 3</figcaption>
        <p>$500.000</p>
        <button>Añadir al carrito</button>
      </figure>

      <figure className="product-item">
        <p>5.00 ⭐</p>
        <img src={imagenes.producto1} alt="Product 1"/>
        <figcaption>Producto 4</figcaption>
        <p>$500.000</p>
        <button>Añadir al carrito</button>
      </figure>

      <figure className="product-item">
        <p>5.00 ⭐</p>
        <img src={imagenes.producto1} alt="Product 1"/>
        <figcaption>Producto 1</figcaption>
        <p>$500.000</p>
        <button>Añadir al carrito</button>
      </figure>

      <figure className="product-item">
        <p>5.00 ⭐</p>
        <img src={imagenes.producto1} alt="Product 1"/>
        <figcaption>Producto 1</figcaption>
        <p>$500.000</p>
        <button>Añadir al carrito</button>
      </figure>

      <figure className="product-item">
        <p>5.00 ⭐</p>
        <img src={imagenes.producto1} alt="Product 1"/>
        <figcaption>Producto 1</figcaption>
        <p>$500.000</p>
        <button>Añadir al carrito</button>
      </figure>

      <figure className="product-item">
        <p>5.00 ⭐</p>
        <img src={imagenes.producto1} alt="Product 1"/>
        <figcaption>Producto 1</figcaption>
        <p>$500.000</p>
        <button>Añadir al carrito</button>
      </figure>

      <figure className="product-item">
        <p>5.00 ⭐</p>
        <img src={imagenes.producto1} alt="Product 1"/>
        <figcaption>Producto 1</figcaption>
        <p>$500.000</p>
        <button>Añadir al carrito</button>
      </figure>

      <figure className="product-item">
        <p>5.00 ⭐</p>
        <img src={imagenes.producto1} alt="Product 1"/>
        <figcaption>Producto 1</figcaption>
        <p>$500.000</p>
        <button>Añadir al carrito</button>
      </figure>

      <figure className="product-item">
        <p>5.00 ⭐</p>
        <img src={imagenes.producto1} alt="Product 1"/>
        <figcaption>Producto 1</figcaption>
        <p>$500.000</p>
        <button>Añadir al carrito</button>
      </figure>

      <figure className="product-item">
        <p>5.00 ⭐</p>
        <img src={imagenes.producto1} alt="Product 1"/>
        <figcaption>Producto 1</figcaption>
        <p>$500.000</p>
        <button>Añadir al carrito</button>
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

</React.Fragment>

  )
}