import { useContext } from "react";

import { ProductsContext } from "../../providers/products";

import { Product } from "../Product";

import { FlexContainer } from "../../styles/global";

export const ProductsList = () => {
  const { products } = useContext(ProductsContext);

  return (
    <>
      <FlexContainer width="70%">
        {products !== undefined &&
          products?.map((product, id) => (
            <Product key={id} product={product} />
          ))}
      </FlexContainer>
    </>
  );
};
