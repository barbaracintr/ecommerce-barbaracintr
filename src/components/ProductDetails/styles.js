import styled from "styled-components";

import * as muiStyles from "@mui/material/styles";
import { Typography, Button, InputLabel, Paper } from "@mui/material";

export const StyledPaper = muiStyles.styled(Paper)`
    width: 40vw;
    margin: 0 auto;
    margin-top: 4vw;
    margin-bottom: 2vw;

    @media only screen and (max-width: 600px) {
        width: 90vw;
    }
`;
export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  aling-items: flex-start;
  gap: 0.5rem;
  margin: 0 auto;
  padding: 20px;
`;
export const ImgProduct = styled.img`
  width: 15vw;
  height: 28vh;
  margin 0 auto;

    @media only screen and (max-width: 600px) {
        width: 32vw;
        height: 25vh;
    }
`;
export const StyledTypography = muiStyles.styled(Typography)`
    font-weight: ${(props) => (props.title ? "500" : "300")};
    font-size: ${(props) => (props.title ? "19px" : "13px")};
    background-color: ${(props) => (props.category ? "#89f8" : "none")};
    color: #000;
    font-family: 'Inter';
    margin: 0.2em;

    @media only screen and (max-width: 600px) {
        font-size: ${(props) => (props.title ? "15px" : "10px")};
    }
`;
export const StyledInputLabel = muiStyles.styled(InputLabel)`
    color: #000;
    font-style: normal;
    font-weight: 400; 
    font-size: 12.182px;
`;
export const InputQty = styled.input`
  width: 10vw;

  :focus {
    background-color: #ef32d9;
    color: #fff;
  }
`;
export const StyledButton = muiStyles.styled(Button)`
    font-family: 'Inter';
    background-color: #89f;
`;
