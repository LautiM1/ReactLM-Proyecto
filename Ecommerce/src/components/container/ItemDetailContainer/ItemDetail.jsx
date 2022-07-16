import { ItemCount } from "../ItemListContainer/itemCount";
import React, {useContext} from "react";
import { CartContext } from 'react';
function ItemDetail({producto2}){

 const [cart, setCart] = useContext(CartContext);
 console.log(cart)

 const funcionContador = (contador)=>{
    console.log( "valor", contador)
 }

    const{name, precio, imagen} = producto2;
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




            <ItemCount stock={5} initial={0} onAdd={funcionContador} />
        </div>
    
    )
}

export default ItemDetail