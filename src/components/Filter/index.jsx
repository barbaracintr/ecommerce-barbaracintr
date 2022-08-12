import { useRef, useState } from "react";
import { api } from "../../data";

export const Filter = () => {
  //electronics
  const [filtrationProduct, setFiltrationProduct] = useState("");

  const inputRef = useRef("");

  const handlerClick = (e) => {
    e.preventDefault();
    const productFilter = inputRef.current.value
    setFiltrationProduct(productFilter);

    api
      .get(`/products/category/${filtrationProduct}`)
      .then((response) => console.log(response.request.response))
      .catch((err) => console.log(err));
  };

  return (
    <form onSubmit={handlerClick}>
      <input ref={inputRef} placeholder="Pesquise aqui" />
      <button>Pesquisar</button>
    </form>
  );
};
