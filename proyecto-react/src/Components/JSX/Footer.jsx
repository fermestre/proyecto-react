import imagenes from "../Images/Imagenes.jsx";
export const Footer = () => {

  return (

      <footer>
        <nav className='footer-social-media'>

           <a href="#" target="_blank" rel="external"/><img src={imagenes.icogh} alt="GitHub icon"
          title="#"/>

           <a href="#" target="_blank" rel="external"/><img src={imagenes.icofb}
          alt="Facebook icon top" title="#"/>

           <a href="#" target="_blank" rel="external"/><img src={imagenes.icoig}
          alt="Instagram icon" title="#"/>

           <a href="#" target="_blank" rel="external"/><img src={imagenes.icotw}
          alt="Twitter icon" title="#"/>


        </nav>
        <ul className='footer-lista-horizontal'>
          
          <li><img src={imagenes.icocard1} alt="1" /></li>
          <li><img src={imagenes.icocard2} alt="2" /></li>
          <li><img src={imagenes.icocard3} alt="3" /></li>
          <li><img src={imagenes.icocard4} alt="4" /></li>
          <li><img src={imagenes.icocard5} alt="5" /></li>
          <li><img src={imagenes.icocard6} alt="6" /></li>

        </ul>

  </footer>

  )
}