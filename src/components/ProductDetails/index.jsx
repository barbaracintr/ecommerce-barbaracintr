import { useContext, useEffect, useRef, useState } from "react";

import { useParams } from "react-router-dom";

import { toast } from "react-toastify";

import { CartContext } from "../../providers/cart";

import { ProductsContext } from "../../providers/products";

import {
  ImgProduct,
  Box,
  StyledTypography,
  StyledButton,
  StyledInputLabel,
  StyledPaper,
  InputQty,
} from "./styles.js";

export const ProductDetails = () => {
  const { products } = useContext(ProductsContext);
  const { addProductsToCart } = useContext(CartContext);

  const { productId } = useParams();

  const [selectedProduct, setSelectedProduct] = useState({});

  useEffect(() => {
    const product = products.find((item) => {
      return item.id === Number(productId);
    });
    setSelectedProduct(product);
  }, [productId]);

  const inputRef = useRef(0);
  const addToCart = () => {
    const qtd = inputRef.current.value;
    console.log(qtd);
    if (qtd > 0) {
      const mult = selectedProduct.price * qtd;
      selectedProduct.qtdTotal = mult;
      toast.success("Product added to cart");
      addProductsToCart(selectedProduct);
    }
  };

  return (
    <>
      <StyledPaper elevation={3}>
        <Box>
          <ImgProduct src={selectedProduct.image} />
          <StyledTypography component="p" title>
            {selectedProduct.title}
          </StyledTypography>
          <StyledTypography component="p">
            {selectedProduct.description}
          </StyledTypography>
          <StyledTypography component="p">
            $ {selectedProduct.price}
          </StyledTypography>
          <StyledInputLabel>Qty: </StyledInputLabel>
          <InputQty ref={inputRef} type="number" min="1" />
          <StyledButton
            variant="contained"
            color="secondary"
            onClick={addToCart}
          >
            Add to cart
          </StyledButton>
        </Box>
      </StyledPaper>
    </>
  );
};
