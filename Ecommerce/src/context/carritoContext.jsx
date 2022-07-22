import React, { createContext, useState} from "react";

export const CartContext = React.createContext()

export  const CarritoContext = ({ children })=>{
    const [cart, setCart] = useState([])
        
    const agregar = (item) =>{
        const inCart = cart.find(
            (productoInCart)=> productoInCart.id === item.id
        );

        if(inCart){
            setCart(
                cart.map((productoInCart)=> {
                    if(productoInCart.id === item.id){
                        return {...inCart, quantity: inCart.quantity + item.quantity}
                    } else return productoInCart
                })
            );
        } else {
            setCart([...cart, {...item, quantity: item.quantity}])
        }
    };
    
    const quitar = (id) =>{}
    const vaciar = () => {
        setCart ([])
    }
    const yaEsta = (id) =>{}

    return(
        <CartContext.Provider value={[cart, agregar]}>
            {children}
        </CartContext.Provider>
    )
    
     
    
    
}

export default CarritoContext