import { useContext } from "react";

import { useNavigate } from "react-router-dom";

import { ProductsContext } from "../../providers/products";

import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";

import { Nav } from "./styles.js";

export const NavBar = () => {
  const navigate = useNavigate();

  const { populateProducts } = useContext(ProductsContext);

  const cartProducts = () => {
    navigate("/cart");
  };

  const shope = () => {
    navigate("/");
    populateProducts();
  };

  return (
    <>
      <Nav>
        <HomeOutlinedIcon
          fontSize="large"
          sx={{ color: "white" }}
          onClick={shope}
        />
        <PersonOutlineIcon
          fontSize="large"
          sx={{ color: "white" }}
          onClick={() => navigate("/login")}
        />
        <ShoppingCartOutlinedIcon
          fontSize="large"
          sx={{ color: "white" }}
          onClick={cartProducts}
        />
      </Nav>
    </>
  );
};
