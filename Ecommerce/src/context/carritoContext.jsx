import React, { createContext, useState} from "react";
import { useEffect } from "react";
import { useContext } from "react";
const CartContext = createContext()
export const useCartContext = () => useContext(CartContext)


export  const CarritoContext = ({ children })=>{
    const [cartItems, setCartItems] = useState(() => {
        try {
            const productosEnLocalStorage = localStorage.getItem("cartProducts");
            return productosEnLocalStorage ? JSON.parse(productosEnLocalStorage) : [];
        } catch(error){
            return [];
        }
    });

    useEffect(() => {
        localStorage.setItem("cartProducts", JSON.stringify(cartItems));
    }, [cartItems]);
        
    const addItemToCard = (product) =>{
        const inCart = cartItems.find(
            (productoInCart)=> productoInCart.id === product.id
        );

        if(inCart){
            setCartItems(
                cartItems.map((productoInCart)=> {
                    if(productoInCart.id === product.id){
                        return {...inCart, amount: inCart.amount + 1}
                    } else return productoInCart;
                })
            );
        } else {
            setCartItems([...cartItems, {...product, amount: 1}]);
        }
    };
    
    const deleteItemToCart = (product) =>{
        const inCart = cartItems.find(
            (productoInCart) => productoInCart.id === product.id
        );
        if (inCart.quantity === 1){
            setCartItems(
                cartItems.filter((productoInCart) => productoInCart.id !== product.id)
            );
        } else {
            setCartItems((productoInCart) => {
                if (productoInCart.id === product.id) {
                    return {...inCart, amount: inCart.amount -1};
                } else return productoInCart;
            });
        }


    }
    const vaciar = () => {
        setCart ([])
    }
    const yaEsta = (id) =>{}

    return(
        <CartContext.Provider value={[cartItems, addItemToCard, deleteItemToCart, vaciar]}>
            {children}
        </CartContext.Provider>
    )
    
     
    
    
}

export default CarritoContext