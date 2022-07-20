import React, { createContext, useState} from "react";

export const CartContext = React.createContext()

export  const CarritoContext = ({ children })=>{
    const [cart, setCart] = useState([])
        
    const agregar = (item) =>{}
    const quitar = (id) =>{}
    const vaciar = () => {}
    const yaEsta = (id) =>{}

    return(
        <CartContext.Provider value={[cart, agregar]}>
            {children}
        </CartContext.Provider>
    )
    
     
    
    
}

export default CarritoContext