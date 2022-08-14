import { Link } from "@mui/material";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ProductsContext } from "../../providers/products";

export const NavBar = () => {
  const navigate = useNavigate();

  const { populateProducts } = useContext(ProductsContext);

  // const [btnHome, setBtnHome] = useState(true);

  const cartProducts = () => {
    // setBtnHome(false);
    navigate("/cart");
  };

  const shope = () => {
    // setBtnHome(true);
    navigate("/");
    populateProducts()
  };

  return (
    <nav>
      <button onClick={cartProducts}>Carrinho</button>
      <button onClick={shope}>Loja</button>
      <button onClick={() => navigate("/login")}>Login</button>
      <button onClick={() => navigate("/register")}>Cadastro</button>
    </nav>
  );
};
