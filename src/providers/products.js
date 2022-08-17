import { createContext, useEffect, useState } from "react";

import { api } from "../data";

export const ProductsContext = createContext([]);

export const ProductsProvider = ({ children }) => {

  const [ products, setProducts ] = useState([]);

  const populateProducts = () => {
    api
      .get("/products")
      .then((response) => setProducts(response.data))
      .catch((err) => console.log(err));
  };

  const updateProducts = (newProducts) => {
    const selectedCategory = JSON.parse(newProducts)
    setProducts(selectedCategory)
  }

  useEffect(() => {
    populateProducts()
  }, []);

//   render() {

// console.log('aaaaaa')
//     }

  return (
    <ProductsContext.Provider value={{ products, updateProducts, populateProducts }}>
      {children}
    </ProductsContext.Provider>
  );
};
