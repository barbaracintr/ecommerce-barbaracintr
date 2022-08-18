import { useContext } from "react";

import { CartContext } from "../../providers/cart";

import { ProductsCart } from "../ProductsCart";
import { Total } from "../Total";

import { StyledTypography, StyledPaper, List, BoxContainer } from "./styles";

export const Cart = () => {
  const { itemCart, removeFromProductsCart } = useContext(CartContext);

  return (
    <>
      <BoxContainer>
        <StyledPaper elevation={8}>
          <StyledTypography title component="h1">
            SHOPPING CART
          </StyledTypography>
          <List>
            {itemCart.length !== 0 ? (
              itemCart.map((item, index) => (
                <ProductsCart
                  key={index}
                  product={item}
                  removeFromProductsCart={removeFromProductsCart}
                />
              ))
            ) : (
              <StyledTypography>Empty cart</StyledTypography>
            )}
          </List>
        </StyledPaper>
        <Total productsCart={itemCart} />
      </BoxContainer>
    </>
  );
};
