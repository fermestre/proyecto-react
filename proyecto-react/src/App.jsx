import {useState} from "react"
import {Footer} from "./Components/JSX/Footer.jsx"
import {Bodygrid} from "./Components/JSX/Bodygrid.jsx"
import {Check} from "./Components/JSX/Check.jsx"
import {Login} from  "./Components/JSX/Login.jsx"
import Navbar from "./Components/JSX/Navbar.jsx"




function App (){

  const [user,setUser] = useState([]);
  const [addedProducts, setAddedProducts] = useState([]);

  const handleAddProduct = (product) => {
    setAddedProducts([...addedProducts, product]);
  };

  return(

   <>
       {
        !user.length > 0
        ? <Login setUser = {setUser} />
        : <> <Navbar addedProducts={addedProducts} /><Bodygrid onAddProduct={handleAddProduct} user={user} setUser={setUser}/> <Footer/>  </>
      } 


{/* <><Navbar/> <Check/> <Footer/> </> */}


  </>
  )
}

export default App


