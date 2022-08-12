import "./style.css";

import { Link } from "react-router-dom";

export const Product = ({ product }) => {
  return (
    <li key={product.id}>
      <Link to={`/details/${product.id}`}>
        <img src={product.image} />
        <p>{product.category}</p>
        <p>{product.title}</p>
        <p>{product.price}</p>
      </Link>
    </li>
  );
};
