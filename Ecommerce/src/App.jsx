import { useState } from 'react'

import NavBar from './components/NavBar/NavBar'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ComponenteClase from './ComponenteClase'
import CartWidget from './components/NavBar/CartWidget';
import ItemListContainer from './components/container/ItemListContainer/ItemListContainer';

function Name(props) {
    console.log(props)
    return(
        <div>
            <h1> Name </h1>
        </div>


    )


}

function App() {
    const count = 0

    const objStyle = {fontSize: 30 }
    return(
      <div className="App" style={ objStyle }>
        <NavBar/>
        <ItemListContainer saludos={'¡Bienvenidos a D-SHIRT!'} />
      </div>
    )
  }
export default App
