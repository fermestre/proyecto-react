
import {useState} from "react"
import {Footer} from "./Components/JSX/Footer.jsx"
import {Bodygrid} from "./Components/JSX/Bodygrid.jsx"
import {Check} from "./Components/JSX/Check.jsx"
import {Login} from  "./Components/JSX/Login.jsx"
import Navbar from "./Components/JSX/Navbar.jsx"
/* import {unsplash} from "../public/unsplash.jpg" */




function App (){

  const [user,setUser] = useState([])

  return(

   <>
 
       {
        !user.length > 0
        ? <Login setUser = {setUser} />
        : <> <Navbar/> <Check  user={user} setUser={setUser} /> <Footer/>  </>
      } 


 <Bodygrid/>
  </>
  )
}

export default App


