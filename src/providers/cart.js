import { createContext, useState } from "react";

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
  const [ itemCart, setItemCart ] = useState([]);

  const addToProdutctsCart = (item) => {
    setItemCart([...itemCart, item]);
  };

  const removeFromProductsCart = (item) => {
    const newItens = itemCart.filter((itensCart) => (itensCart.id !== item.id))
    setItemCart(newItens)
  }

  return (
    <CartContext.Provider value={{ itemCart, addToProdutctsCart, removeFromProductsCart }}>
        {children}
    </CartContext.Provider>
  );
};
