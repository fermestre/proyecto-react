import {useState} from "react"
import imagenes from "../Images/Imagenes.jsx";
import "../Styles/Login.css"


export const Login = ({setUser}) => {

  const [show,setShow] = useState(false);
  const [usuario, setUsuario] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault()

    if(usuario === "" || contraseña === ""){
        setError(true)
        return
    }
      setError(false)

      setUser([usuario])

  }


  return (
<div className="bodycontainer">
    <section className={`wrapper ${show ? 'active': ''}`}>
    <div className="form signup">
      <header onClick={()=>{
        setShow(false)
      }}>REGISTRATE</header>
      <form action="#">
        <input type="text" placeholder="Nombre completo" required />

        <input type="text" placeholder="Correo Electronico" required />

        <input type="password" placeholder="Contraseña" required />

        <div className="checkbox">
          <input type="checkbox" id="signupCheck" />
          <label htmlFor="signupCheck">I accept all terms & conditions</label>
        </div>
        <input type="submit" value="Registro" />
      </form>
    </div>

    <div className="form login">
      <header onClick={()=>{
        setShow(true)
      }}>INICIA SESION</header>
      <form action="#"      
      onSubmit={handleSubmit}>
       
        <input  
        value={usuario}
        onChange={e => setUsuario(e.target.value)}
        type="text" placeholder="Correo Electronico" required  />

        <input value={contraseña}
         onChange={e => setContraseña(e.target.value)} 
         type="password" placeholder="Contraseña" required />

        <a href="#">¿Olvidaste tu contraseña?</a>
        <input type="submit" value="Ingresar" />
   {error && <p>Todos los campos son obligatorios</p>}
        {/* El mensaje de error anterior podria eliminarse, pero se dejara para evitar el error (snip) que nunca se use */}
      </form>
    </div>
    </section>
    </div>
  )

}