import React from "react";
import { Link } from 'react-router-dom'

function Item({productos}){
    const{name, precio, imagen} = productos;
    return(

        <div className="col-md-4 p-5">
            <div className="card w-50 mt-5">
                <h1 className="card-title">{name} </h1>
                <img src= {imagen} />
                <p className="card-text"> ${precio} </p>
                <Link to={`/detalle${productos.id}`}>
                <button className="btn btn-dark btn-sm">

                    Detalles

                 </button>
                 </Link>



            </div>





        </div>
    )
}

export default Item