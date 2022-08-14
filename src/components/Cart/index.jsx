import { FormControlUnstyledContext } from "@mui/base";
import { useContext } from "react";
import { CartContext } from "../../providers/cart";
import { ProductsCart } from "../ProductsCart";
import { Total } from "../Total";

export const Cart = () => {
  const { itemCart, removeFromProductsCart } = useContext(CartContext);

  return (
    <>
      <h1>Carrinho de Produtos</h1>
      <ul>
        {itemCart.length !== 0 ? (
          itemCart.map((item, index) => (
            <ProductsCart
              key={index}
              product={item}
              removeFromProductsCart={removeFromProductsCart}
            />
          ))
        ) : (
          <p>Ainda não há itens no carrinho</p>
        )}
      </ul>
      <Total productsCart={itemCart}/>
    </>
  );
};
