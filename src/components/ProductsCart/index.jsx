export const ProductsCart = ({ product, removeFromProductsCart }) => {

  return (
    <li key={product.id}>
      <h2>{product.title}</h2>
      <img src={product.image} />
      <button id={product.id} onClick={() => removeFromProductsCart(product)}>
        Remover do carrinho
      </button>
    </li>
  );
};
