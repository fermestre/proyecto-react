import imagenes from "../Images/Imagenes.jsx";
import "../Styles/Footer.css"

export const Footer = () => {

  return (

      <footer>

        <nav className='footer-social-media'>

           <a href="#" target="_blank" rel="external"/><img src={imagenes.icogh} alt="GitHub icon"
          title="Resitorio proyecto"/>

           <a href="#" target="_blank" rel="external"/><img src={imagenes.icofb}
          alt="Facebook icon top" title="Facebook oficial"/>

           <a href="#" target="_blank" rel="external"/><img src={imagenes.icoig}
          alt="Instagram icon" title="Instagram oficial"/>

           <a href="#" target="_blank" rel="external"/><img src={imagenes.icotw}
          alt="Twitter icon" title="Twitter oficial"/>

        </nav>

        
        <figure className='footer-lista-horizontal'>
          <img src={imagenes.icocard1} alt="Method: Paypal" title="Tarjeta Paypal"/>
          <img src={imagenes.icocard2} alt="Method: Mastercard" title="Tarjeta Mastercard"/>
          <img src={imagenes.icocard3} alt="Method: Amex" title="Tarjeta American Express"/>
          <img src={imagenes.icocard4} alt="Method: Maestro" title="Tarjeta Maestro"/>
          <img src={imagenes.icocard5} alt="Method: Dinners" title="Tarjeta Dinners"/>
          <img src={imagenes.icocard6} alt="Method: Visa" title="Tarjeta Visa"/>
          <img src={imagenes.icocard7} alt="Method: MercadoPago" title="MercadoPago"/>
          <img src={imagenes.icocard8} alt="Method: JCB" title="Tarjeta JCB"/>
          <img src={imagenes.icocard9} alt="Method: AliPay" title="Tarjeta AliPay"/>
          <img src={imagenes.icocard10} alt="Method: MIR" title="Tarjeta MIR"/>
          <img src={imagenes.icocard11} alt="Method: Generic" title="Tarjetas Genericas"/>
          <img src={imagenes.icocard12} alt="Method: UnionPay" title="Tarjeta UnionPay"/>
          <img src={imagenes.icocard13} alt="Method: Discover" title="Tarjeta Discover"/>
        </figure>

  </footer>

  )
}