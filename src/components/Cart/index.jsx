import { useContext } from "react";
import { CartContext } from "../../providers/cart";

export const Cart = () => {
  const { itemCart, addToProdutctsCart, removeFromProductsCart } =
    useContext(CartContext);

  return (
    <>
      <h1>Carrinho de Produtos</h1>
      <ul>
        {itemCart.map((item, index) => (
          <li key={index}>
            <h2>{item.title}</h2>
            <p>R$ {item.price.toFixed(2)}</p>
            <img src={item.image} />
            <button id={index} onClick={() => removeFromProductsCart(item)}>
              Remover do carrinho
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};
