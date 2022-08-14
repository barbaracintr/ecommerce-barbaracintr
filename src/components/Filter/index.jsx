import { useContext, useRef, useState } from "react";
import { api } from "../../data";
import { ProductsContext } from "../../providers/products";

export const Filter = () => {
  //electronics
  const [ filteredProduct, setFilteredProduct ] = useState([]);

  const { updateProducts } = useContext(ProductsContext);

  const inputRef = useRef("");

  const handlerClick = (e) => {
    e.preventDefault();
    const productFilter = inputRef.current.value

    api
      .get(`/products/category/${productFilter}`)
      .then((response) => updateProducts(response.request.response))
      .catch((err) => console.log(err));
  };

  return (
    <form onSubmit={handlerClick}>
      <input ref={inputRef} placeholder="Pesquise aqui" />
      <button>Pesquisar</button>
    </form>
  );
};
