import { useEffect } from "react"
import { useCartContext } from "../../../context/carritoContext"
import Item from "../ItemListContainer/item"
 const Cart = () => {

  const{ cart, deleteItemToCart, vaciar} = useCartContext()
  return (
    <div>
        <h1>Carrito</h1>
        <div className="row">
            <div className="col-md-6">
                <h2>Producto</h2>
                <ul>
                    {cart.map(product => (
                        <>
                            <li key={product.id}>
                                    <img src={product.foto} alt='foto de producto' className='w-25' />
                                <span> - Nombre: {product.name}</span>
                                <span> - Precio: {product.price}</span>
                                <span> - Cantidad:  {product.cantidad}</span>     
                                <button onClick={()=> deleteItemToCart(product.id)} > X </button>                           
                            </li>
                        </>                            
                    ))}
                </ul>
            </div>
    
        </div>               
        
    </div>
)

}


export default Cart
