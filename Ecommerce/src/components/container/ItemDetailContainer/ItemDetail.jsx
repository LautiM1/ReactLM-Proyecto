import { ItemCount } from "../ItemListContainer/itemCount";
import React, {useContext, useState} from "react";
import { useCartContext } from "../../../context/carritoContext";
import { Link } from "react-router-dom";
function ItemDetail({producto2}){

 const [cart, addItemToCard] = useCartContext();
 const [cantidad, setCantidad] = useState();
 console.log(cart)

 const funcionContador = (contador)=>{
    console.log( "valor", contador)
    setCantidad(contador)
    const product ={item: producto2, quantity: contador}
    addItemToCard(product )
 }

    const{name, precio, imagen, stock} = producto2;
    console.log(producto2, "En itemdetail");
    return(

        <div>
            <div style={{
                   flexDirection: 'row',
                   flexWrap: 'wrap',
            }}>
                <h1>{name} </h1>
                <img src= {imagen} width= '300'/>
                <p> ${precio} </p>
                <button className="btn btn-dark btn-sm">

                    Detalles

                 </button>



            </div>




            {cantidad? <Link to="/carrito"><button>Terminar Compra</button></Link> : <ItemCount stock={stock} initial={0} onAdd={funcionContador} />  }
        </div>
    
    )
}

export default ItemDetail