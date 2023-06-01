
import {useState} from "react"
import {Footer} from "./Components/JSX/Footer.jsx"
import {Bodygrid} from "./Components/JSX/Bodygrid.jsx"
import {Check} from "./Components/JSX/Check.jsx"
import {Login} from  "./Components/JSX/Login.jsx"




function App (){

  const [user,setUser] = useState([])

  return(

   <>

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


