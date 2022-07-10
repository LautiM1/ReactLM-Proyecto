import { BrowserRouter, Routes, Route} from 'react-router-dom'

import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/container/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/container/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/container/cart/cart';

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

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
      <BrowserRouter>
          <div className="App" style={ objStyle }>
              <NavBar/>
              <Routes>
                <Route index path='/' element={<ItemListContainer saludos={'¡Bienvenidos a D-SHIRT!'} />} />
                <Route index path='/categoria:categoryId' element={<ItemListContainer saludos={'¡Bienvenidos a D-SHIRT!'} />} />
                <Route path='/detalle:id' element={<ItemDetailContainer />} />
                <Route path='/cart' element={<Cart />} />
              </Routes>
          </div>
      </BrowserRouter> 
    )
  }
export default App
