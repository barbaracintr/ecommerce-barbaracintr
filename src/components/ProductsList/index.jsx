import { useContext } from "react";
import { ProductsContext } from "../../providers/products";
import { Product } from "../Product";

export const ProductsList = () => {

  const { products } = useContext(ProductsContext);
  console.log(products)

  return (
    <ul>
      {products?.map((product, id) => (
        <Product key={id} product={product}/>
      ))}
    </ul>
  );
};
