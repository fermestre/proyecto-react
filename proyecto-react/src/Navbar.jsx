import { useState } from 'react';
import './App.css';
import {imglogo} from '../public/music.png'
import {imgcart} from '../public/shopping-cart.png'
import {drum} from '../public/drum.png'
import {login} from '../public/profile.png'
import {LoginPopup} from './Login.jsx';

// Componente para el menú desplegable
const DropdownMenu = () => {
  return (
    <ul className="dropdown-menu">
      <a className='link-drop'>Acoustic</a>
      <a className='link-drop'>Percussion</a>
      <a className='link-drop'>Electric</a>
      <a className='link-drop'>Keyboards</a>
      <a className='link-drop'>Wind instruments</a>
      <a className='link-drop'>Ensembles</a>
    </ul>
  );
};

const DropdownMenu2 = () => {
  return (
    <ul className="dropdown-menu2">
      <a className='link-drop'>Week give away</a>
      <a className='link-drop'>month give away</a>
      <a className='link-drop'>year give away</a>
    </ul>
  );
};

const UserPopup = ({ username, onClose }) => {
  return (
    <div className="user-popup">
      <h2>Bienvenido, {username}!</h2>
      <button onClick={onClose}>Cerrar sesión</button>
    </div>
  );
};

// Componente para la barra de navegación
const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isDropdownOpen2, setDropdownOpen2] = useState(false);
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [showUserPopup, setShowUserPopup] = useState(false);
  const [username, setUsername] = useState(`Custumer`); // El nombre de usuario actual

  const handleButtonClickbtn = () => {
    setShowUserPopup(true);
  };

  const handleClosePopup = () => {
    setShowUserPopup(false);
  };

  const handleDropdownToggle = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleDropdownToggle2 = () => { 
    setDropdownOpen2(!isDropdownOpen2);
  };

  const handleButtonClick = () => {
    setPopupVisible(!isPopupVisible);
  }

  return (
    <>
    <LoginPopup />
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={imglogo} alt="Logo" />
      </div>
      <div className="navbar-search">
        <form>
          <input type="text" placeholder="Buscar" />
          <button type="submit">Buscar</button>
        </form>
      </div>
      <div className='profile-img'>
        <button onClick={handleButtonClickbtn}>
        {showUserPopup && <UserPopup username={username} onClose={handleClosePopup} />}
        {handleClosePopup && UserPopup}
          <img className='logo-profile' src={login} alt='logo-profile'></img>
        </button>
      </div>
      <div className="navbar-menu">
        <button className="navbar-menu-button" onMouseEnter={handleDropdownToggle} onMouseLeave={handleDropdownToggle}>
          Category
          {isDropdownOpen && <DropdownMenu />}
        </button>
        <button className="navbar-menu-button2" onMouseEnter={handleDropdownToggle2} onMouseLeave={handleDropdownToggle2}>
          Give away
          {isDropdownOpen2 && <DropdownMenu2 />}
        </button>  
        <button className="navbar-cart-button" onClick={handleButtonClick}>
          <img className='btncar' src={imgcart} alt="btn car"></img>
          {isPopupVisible && 
          <div className="popup">
            <div className="popup-content">
              <h2 className='title-popup'> Item BOUGHT</h2>
              <div>
                <img className='img-popup' src={drum} alt='item-scart'></img>
              </div>
              <button> Buy Now </button>
              <button> Cancel </button>
            </div>
          </div>}
        </button>
      </div>
    </nav>
    </>
  );
};

export default Navbar;
