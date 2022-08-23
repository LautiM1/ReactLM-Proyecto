import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'

import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/container/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/container/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/container/Cart/Cart';

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { CarritoContext } from './context/carritoContext';

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
      <CarritoContext>
      <BrowserRouter>
          <div>
              <NavBar/>
              <Routes>
                <Route index path='/' element={<ItemListContainer saludos={'¡Bienvenidos a D-SHIRT!'} />} />
                <Route path='/categoria/:categoryId' element={<ItemListContainer saludos={'¡Bienvenidos a D-SHIRT!'} />} />
                <Route path='/detalle:id' element={<ItemDetailContainer />} />
                <Route path='/cart' element={<Cart />} />
                <Route path="/carrito" element={<Cart/>} />

                <Route path='*' element={ <Navigate to='/'/>} />
              </Routes>
          </div>
      </BrowserRouter> 
      </CarritoContext>
    )
  }
export default App
