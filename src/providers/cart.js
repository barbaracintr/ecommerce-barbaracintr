import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
  const [itemCart, setItemCart] = useState([]);

  const addProductsToCart = (item) => {
    if (itemCart.includes(item)) {
      const indexProduct = itemCart.findIndex((currentValue) => (currentValue === item));
      itemCart.splice(indexProduct, 1);
    }
    setItemCart([...itemCart, item]);
  };

  const removeFromProductsCart = (item) => {
    const newItens = itemCart.filter((itensCart) => itensCart.id !== item.id);
    setItemCart(newItens);
    toast.success("Product removed from cart");
  };

  return (
    <CartContext.Provider
      value={{
        itemCart,
        addProductsToCart,
        removeFromProductsCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
