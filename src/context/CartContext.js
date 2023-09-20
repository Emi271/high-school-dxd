import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  const addItemToCart = (item, quantity) => {
      if(isInCart(item.id)){
        setCart(cart.map((product) => {
          if(product.id === item.id){
            return {...product, quantity: product.quantity + quantity}
          } else {
            return  product
          }
        }))
      } else {
        setCart([...cart,{ ...item , quantity }])
      }
  }

  const clearCart = () => {
    setCart([])
  }
  const isInCart = (id) => {
    return cart.some((item) => item.id === id)
  }
  const deleteItem = (id) => {
    setCart(cart.filter((item)=> item.id !== id))
  }
const cartQuantity = () => {
  return cart.reduce((acc, item) => acc + item.quantity, 0)
}
const total = () => {
  return cart.reduce((acc, item) => acc +item.quantity * item.precio, 0)
}
  return (
    <CartContext.Provider value={{ cart, addItemToCart, deleteItem, clearCart, cartQuantity, total }}>
      {children}
    </CartContext.Provider>
  );
};