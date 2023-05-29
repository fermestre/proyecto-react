import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App.jsx'
import {Footer} from './Components/JSX/Footer.jsx'
import {Bodygrid} from './Components/JSX/Bodygrid.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
<React.Fragment>

<App/>
<Bodygrid/>
<Footer/>


</React.Fragment>

)
