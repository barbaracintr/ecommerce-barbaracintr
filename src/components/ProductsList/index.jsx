import { useContext } from "react";

import { ProductsContext } from "../../providers/products";

import { Product } from "../Product";

import { StyledList } from "./styles.js";

export const ProductsList = () => {
  const { products } = useContext(ProductsContext);

  return (
    <>
      <StyledList>
        {products !== undefined &&
          products?.map((product, id) => (
            <Product key={id} product={product} />
          ))}
      </StyledList>
    </>
  );
};
