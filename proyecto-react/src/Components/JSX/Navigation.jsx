import { useState } from 'react';
import '../Styles/Nav.css';
// import {LoginPopup} from './Login.jsx'
import imagenes from "../Images/Imagenes.jsx";


export const Navigation = () => {

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



    <nav className="navbar">
      <div className="navbar-logo">
        <img src={imagenes.navlogo} alt="Logo" />
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
          <img className='logo-profile' src={imagenes.login} alt='logo-profile'></img>
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
          <img className='btncar' src={imagenes.imgcart} alt="btn car"></img>
          {isPopupVisible && 
          <div className="popup">
            <div className="popup-content">
              <h2 className='title-popup'> Item BOUGHT</h2>
              <div>
                <img className='img-popup' src={imagenes.drum} alt='item-scart'></img>
              </div>
              <button> Buy Now </button>
              <button> Cancel </button>
            </div>
          </div>}
        </button>
      </div>
    </nav>




  )
}};