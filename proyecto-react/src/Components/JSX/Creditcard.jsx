import React from "react"
import imagenes from "../Images/Imagenes.jsx";
import "../Styles/Creditcard.css"


export const Creditcard = () => {
  return (
    <React.Fragment>


<div className="container">

<form action="">

    <div className="row">

        <div className="col">

            <h3 className="title">direccion de facturacion</h3>

            <div className="inputBox">
                <span>nombre completo :</span>
                <input type="text" placeholder="Lucia Fernanda Uribe Lopez"/>
            </div>
            <div className="inputBox">
                <span>correo :</span>
                <input type="email" placeholder="Lucifer@example.com"/>
            </div>
            <div className="inputBox">
                <span>direccion :</span>
                <input type="text" placeholder="Manzana - Calle - Localidad"/>
            </div>
            <div className="inputBox">
                <span>ciudad :</span>
                <input type="text" placeholder="Bogota"/>
            </div>

            <div className="flex">
                <div className="inputBox">
                    <span>pais :</span>
                    <input type="text" placeholder="Colombia"/>
                </div>
                <div className="inputBox">
                    <span>codigo postal :</span>
                    <input type="text" placeholder="123456"/>
                </div>
            </div>

        </div>

        <div className="col">

            <h3 className="title">pago</h3>

            <div className="inputBox">
                <span id="centerspan">se aceptan todas las tarjetas:</span>
                <img src={imagenes.icocard2} alt=""/>
                <img src={imagenes.icocard3} alt=""/>
                <img src={imagenes.icocard4} alt=""/>
                <img src={imagenes.icocard5} alt=""/>
                <img src={imagenes.icocard6} alt=""/>
                <img src={imagenes.icocard11} alt=""/>
                
                
            </div>
            <div className="inputBox">
                <span>nombre de titular :</span>
                <input type="text" placeholder="Lucia Fernanda"/>
            </div>
            <div className="inputBox">
                <span>Numero de tarjeta :</span>
                <input type="number" placeholder="1111-2222-3333-4444"/>
            </div>
            <div className="inputBox">
                <span>Fecha de expiracion :</span>
                <input type="text" placeholder="Mayo"/>
            </div>

            <div className="flex">
                <div className="inputBox">
                    <span>Año de expiracion :</span>
                    <input type="number" placeholder="2025"/>
                </div>
                <div className="inputBox">
                    <span>CCV/CVV :</span>
                    <input type="text" placeholder="123"/>
                </div>
            </div>

        </div>

    </div>

    <input type="submit" value="REALIZAR PAGO" className="submit-btn"/>

</form>

</div>   


    </React.Fragment>
  )
}