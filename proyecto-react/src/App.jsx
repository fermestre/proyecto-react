
import {useState} from "react"
import {Footer} from "./Components/JSX/Footer.jsx"
import {Bodygrid} from "./Components/JSX/Bodygrid.jsx"
import {Check} from "./Components/JSX/Check.jsx"
import {Login} from  "./Components/JSX/Login.jsx"
import {Navbar} from "./Navbar.jsx"
/* import {unsplash} from "../public/unsplash.jpg" */



function App (){

  const [user,setUser] = useState([])

  return(

   <>
    <Navbar/>
      {
        !user.length > 0
        ? <Login setUser = {setUser} />
        : <Check user={user} setUser={setUser} />
      }

<Footer/>
  {/* <Check/>*/}
  </>
  )
}

export default App


