import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
  const [itemCart, setItemCart] = useState([]);

  const addToProdutctsCart = (item) => {
    if (itemCart.includes(item)) {
      const indexProduct = itemCart.findIndex((currentValue) => {
        return currentValue === item;
      });
      itemCart.splice(indexProduct, 1);
      setItemCart([...itemCart, item]);
    } else {
      setItemCart([...itemCart, item]);
    }
  };

  const removeFromProductsCart = (item) => {
    const newItens = itemCart.filter((itensCart) => itensCart.id !== item.id);
    setItemCart(newItens);
    toast.success("Produto removido do carrinho");
  };

  return (
    <CartContext.Provider
      value={{ itemCart, addToProdutctsCart, removeFromProductsCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
