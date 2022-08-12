import { useContext, useEffect, useRef, useState } from "react";

import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { CartContext } from "../../providers/cart";

import { ProductsContext } from "../../providers/products";

export const ProductDetails = () => {
  const { products } = useContext(ProductsContext);
  const { addToProdutctsCart } = useContext(CartContext);

  const { productId } = useParams();

  const [ selectedProduct, setSelectedProduct ] = useState({});

  useEffect(() => {
    const product = products.find((item) => {
      return item.id === Number(productId);
    });
    setSelectedProduct(product);
  }, [productId]);


  function addToCart() {
      toast.success("Produto adicionado ao carrinho");
      addToProdutctsCart(selectedProduct);
      totalPrice()
  };

  const inputRef = useRef(0);
  function totalPrice() {
    const qtd = inputRef.current.value;
    if (qtd > 0) {
      const mult = selectedProduct.price * qtd;
      selectedProduct.qtdTotal = mult
    }
  }


  return (
    <>
      <img src={selectedProduct.image} />
      <p>{selectedProduct.category}</p>
      <p>{selectedProduct.title}</p>
      <p>{selectedProduct.price}</p>
      <p>{selectedProduct.description}</p>
      <label>Quantidade</label>
      <input ref={inputRef} type="number" min="1" max="10" />
      <button onClick={addToCart}>Adicionar ao carrinho</button>
    </>
  );
};
