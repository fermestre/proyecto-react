import { useState } from 'react';

const LoginForm = ({ onSubmit, validateForm }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [formError, setFormError] = useState('');
  
    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    };
  
    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const validationResult = validateForm(email, password);
  
      if (validationResult.isValid) {
        setFormError('');
        onSubmit(email, password);
      } else {
        setFormError(validationResult.errorMessage);
      }
    };
  
    return (
      <form className="login-form" onSubmit={handleSubmit}>
        <input type="email" placeholder="Correo electrónico" value={email} onChange={handleEmailChange} />
        <input type="password" placeholder="Contraseña" value={password} onChange={handlePasswordChange} />
        {formError && <p className="error-message">{formError}</p>}
        <div className="button-container">
          <button type="submit">Iniciar sesión</button>
        </div>
      </form>
    );
  };
  
  const LoginPopup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [registeredUsers, setRegisteredUsers] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loginError, setLoginError] = useState(false);
  
    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    };
  
    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    };
  
    const handleRegisterSubmit = (e) => {
      e.preventDefault();
      console.log('Datos de registro:', email, password);
      setRegisteredUsers([...registeredUsers, { email, password }]);
      setEmail('');
      setPassword('');
    };
  
    const validateLoginForm = (email, password) => {
      // Realiza tus validaciones personalizadas aquí
      if (email.trim() === '') {
        return { isValid: false, errorMessage: 'Type a valid email.' };
      }
      if (password.trim() === '') {
        return { isValid: false, errorMessage: 'Type a valid password.' };
      }
      return { isValid: true, errorMessage: '' };
    };
  
    const handleLoginSubmit = (email, password) => {
      console.log('Datos de inicio de sesión:', email, password);
      const userFound = registeredUsers.find(
        (user) => user.email === email && user.password === password
      );
  
      if (userFound) {
        setIsLoggedIn(true);
        setLoginError(false);
      } else {
        setLoginError(true);
      }
    };
  
    if (isLoggedIn) {
      return null; // Ocultar el componente si el usuario ha iniciado sesión
    }
  
    return (
      <div className="popup-container2">
        <div className="popup-content2">
          <h2>Login</h2>
          <LoginForm onSubmit={handleLoginSubmit} validateForm={validateLoginForm} />
          {loginError && <p className="error-message">Values are wrong. Please try it again.</p>}
          <div className="divider">
            <span>o</span>
          </div>
          <h2>Sing up</h2>
          <form className="register-form" onSubmit={handleRegisterSubmit}>
            <input type="email" placeholder="Correo electrónico" value={email} onChange={handleEmailChange} />
            <input type="password" placeholder="Contraseña" value={password} onChange={handlePasswordChange} />
            <div className="button-container2">
              <button type="submit">Registrar usuario</button>
            </div>
          </form>
        </div>
      </div>
    );
  };
  
  export default LoginPopup;
