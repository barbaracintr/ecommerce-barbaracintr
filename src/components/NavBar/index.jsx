import { Link } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const NavBar = () => {
  const navigate = useNavigate();

  const [btnHome, setBtnHome] = useState(true);

  const cartProducts = () => {
    setBtnHome(false);
    navigate("/cart");
  };

  const shope = () => {
    setBtnHome(true);
    navigate("/");
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
