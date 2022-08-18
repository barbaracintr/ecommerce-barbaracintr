import styled from "styled-components";

import * as muiStyles from "@mui/material/styles";
import { Typography, Paper } from "@mui/material";

import { Link } from "react-router-dom";

export const BoxContainer = styled.li`
  margin: 0 auto;
`;
export const StyledTypography = muiStyles.styled(Typography)`
    font-weight: ${(props) => (props.title ? "400" : "300")};
    font-size: ${(props) => (props.title ? "15px" : "14px")};
    background-color: ${(props) => (props.category ? "#89f8" : "none")};
    color: #000;
    font-family: 'Inter';
    margin: 0.2em;
`;
export const StyledPaper = muiStyles.styled(Paper)`
  font-size: 1rem;
  width: 17vw;
  height: 45vh;

  @media only screen and (max-width: 600px) {
    width: 95vw;
    margin: 10px;
  }
`;
export const ImgProduct = styled.img`
  width: 10vw;
  height: 22vh;
  display: flex;
  align-self: center;

  @media only screen and (max-width: 600px) {
    width: 20vw;
    height: 20vh;
  }
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
