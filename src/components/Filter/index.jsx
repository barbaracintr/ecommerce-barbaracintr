import { useContext, useState } from "react";

import { api } from "../../data";

import { ProductsContext } from "../../providers/products";

import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";

import { StyledSelect, StyledMenuItem } from "./styles.js";

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Filter = () => {
  const { updateProducts } = useContext(ProductsContext);

  const navigate = useNavigate();

  const [category, setCategory] = useState("");

  const handleChange = (e) => {
    setCategory(e.target.value);
  };

  useEffect(() => {
    api
      .get(`/products/category/${category}`)
      .then((response) => {
        updateProducts(response.request.response);
        navigate("/");
      })
      .catch((err) => console.log(err));
  }, [category]);

  return (
    <>
      <FormControl variant="standard" sx={{ width: 120 }}>
        <InputLabel id="label">Categories</InputLabel>
        <StyledSelect
          labelId="label"
          label="Categories"
          onChange={handleChange}
        >
          <StyledMenuItem value="">
            <em>None</em>
          </StyledMenuItem>
          <StyledMenuItem value="jewelery">Jewelery</StyledMenuItem>
          <StyledMenuItem value="electronics">Electronics</StyledMenuItem>
          <StyledMenuItem value="men's clothing">Men's Clothing</StyledMenuItem>
          <StyledMenuItem value="women's clothing">
            Women's Clothing
          </StyledMenuItem>
        </StyledSelect>
        <FormHelperText>Select a category</FormHelperText>
      </FormControl>
    </>
  );
};
