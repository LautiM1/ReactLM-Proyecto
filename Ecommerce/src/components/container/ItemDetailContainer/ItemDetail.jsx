import React from "react";

function ItemDetail({producto2}){
    const{name, precio, imagen} = producto2;
    return(

        <div>
            <div>
                <h1>{name} </h1>
                <img src= {imagen} />
                <p> ${precio} </p>
                <button className="btn btn-dark btn-sm">

                    Detalles

                 </button>



            </div>





        </div>
    )
}

export default ItemDetail