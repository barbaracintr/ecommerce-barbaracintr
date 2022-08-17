import styled from "styled-components";

import * as muiStyles from "@mui/material/styles";
import { Typography, Paper } from "@mui/material";

import { Link } from "react-router-dom";

export const StyledTypography = muiStyles.styled(Typography)`
    font-weight: ${(props) => (props.title ? "400" : "300")};
    font-size: ${(props) => (props.title ? "14px" : "13px")};
    background-color: ${(props) => (props.category ? "#89f8" : "none")};
    display: ${(props) => (props.category ? "inline" : "block")};
    color: #000;
    font-family: 'Inter';
    margin: 0.2em;
`;
export const StyledPaper = muiStyles.styled(Paper)`
  font-size: 1rem;
  width: 17vw;
`;
export const ImgProduct = styled.img`
  width: 150px;
  height: 150px;
  display: flex;
  align-self: center;
`;
export const ProductsDetail = styled(Link)`
  text-decoration: none;
`;
export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  aling-items: flex-start;
  height: 20vh;
`;