import { useState } from "react";
import "../Styles/Nav.css";
// import LoginPopup from "./Login.jsx"
import imagenes from "../Images/Imagenes.jsx";


// Componente para el menú desplegable
const DropdownMenu = () => {
  return (
    <ul className="dropdown-menu">
      <a className="link-drop">Acoustic</a>
      <a className="link-drop">Percussion</a>
      <a className="link-drop">Electric</a>
      <a className="link-drop">Keyboards</a>
      <a className="link-drop">Wind instruments</a>
      <a className="link-drop">Ensembles</a>
    </ul>
  );
};

const DropdownMenu2 = () => {
  return (
    <ul className="dropdown-menu2">
      <a className="link-drop">Week give away</a>
      <a className="link-drop">month give away</a>
      <a className="link-drop">year give away</a>
    </ul>
  );
};



// Componente para la barra de navegación
const Navbar = ({addedProducts}) => {
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

  const UserPopup = ({ username, onClose }) => {
    const handleLogout = () => {
      onClose();
    };
    return (
      <div className="user-popup">
        <h2>Bienvenido, {username}!</h2>
        <button onClick={handleLogout}>Cerrar sesión</button>
      </div>
    );
  };

  return (
    <>
     {/* <LoginPopup />  */}
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={imagenes.imglogo} alt="Logo" />
      </div>
      <div className="navbar-search">
        <form>
          <input type="text" placeholder="Buscar" />
          <button type="submit">Buscar</button>
        </form>
      </div>
      <div className="profile-img">
        <button onClick={handleButtonClickbtn}>
        {showUserPopup && <UserPopup username={username} onClose={handleClosePopup} />}
          <img className="logo-profile" src={imagenes.login} alt="logo-profile"></img>
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
          <img className="btncar" src={imagenes.imgcart} alt="btn car"></img>
          {isPopupVisible && 
          <div className="popup">
            <div className="popup-content">
            {addedProducts.map((product, index) => (
            <div className="popup-content" key={index}>
                <img className="img-popup" src={product.image} alt={product.name} />
                <p className="titlle-popup">{product.name}</p>
                <button> Buy Now </button>
                <button> Cancel </button>
            </div>))}
              {/* <h2 className="title-popup"> Item BOUGHT</h2>
              <div>
                <img className="img-popup" src={imagenes.drum} alt="item-scart"></img>
              </div> */}
              
            </div>
          </div>}
        </button>
      </div>
    </nav>
    </>
  );
};

export default Navbar;
