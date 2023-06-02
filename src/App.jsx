import './App.css'
import Header from './components/Header'
import InstrumentoScreen from './screen/InstrumentoScreen'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import DataProvider from './context/dataContext';


function App() {

  return (
    <>
      <DataProvider>
      <BrowserRouter>
          
       <Header />
 
           <Routes>
             <Route path='/' element={<InstrumentoScreen />} />
            {/* <Route path='/cart' element={<Carrito />} /> */}
           </Routes>
          
              
       </BrowserRouter>   
       </DataProvider>
    </>
  )
}

export default App
