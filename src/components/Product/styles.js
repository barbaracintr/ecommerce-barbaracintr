import styled from "styled-components";

import * as muiStyles from "@mui/material/styles";
import { Typography, Paper } from "@mui/material";

import { Link } from "react-router-dom";

export const BoxContainer = styled.li`
  margin: 0 auto;
  margin-left: 9px;
`;
export const StyledTypography = muiStyles.styled(Typography)`
    font-weight: ${(props) => (props.title ? "400" : "300")};
    font-size: ${(props) => (props.title ? "15px" : "14px")};
    background-color: ${(props) => (props.category ? "#89f8" : "none")};
    display: ${(props) => (props.category ? "inline-block" : "block")};
    width: ${(props) => (props.category ? "8vw" : "")};
    color: #000;
    font-family: 'Inter';
    margin: 0.2em;

    @media only screen and (max-width: 600px) {
      font-size: ${(props) => (props.title ? "12px" : "11px")};
      font-weight: ${(props) => (props.title ? "600" : "300")};
      display: ${(props) => (props.category ? "inline-block" : "block")};
      width: ${(props) => (props.category ? "28vw" : "")};
    }
`;
export const StyledPaper = muiStyles.styled(Paper)`
  font-size: 1rem;
  width: 17vw;
  height: 45vh;

  @media only screen and (max-width: 600px) {
    width: 70vw;
    margin: 10px;
    padding: 5px;
  }
`;
export const ImgProduct = styled.img`
  width: 10vw;
  height: 22vh;
  display: flex;
  align-self: center;

  @media only screen and (max-width: 600px) {
    width: 30vw;
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

  @media only screen and (max-width: 600px) {
    justify-content: space-around;
  }
`;
