import styled from "styled-components";

import * as muiStyles from "@mui/material/styles";
import { Typography, Button, Paper } from "@mui/material";

export const ItemList = styled.li`
  display: flex;
  justify-content: space-between;
  aling-items: center;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`;
export const ImgProduct = styled.img`
  width: 50px;
  height: 50px;
`;
export const StyledTypography = muiStyles.styled(Typography)`
    font-size: 15px;
`;
export const StyledButton = muiStyles.styled(Button)`
    font-family: 'Inter';
    background-color: #89f;
    color: #fff;
        :hover{
            color: #000; 
        }
`;
export const StyledPaper = muiStyles.styled(Paper)`
    margin: 0 auto;
    width: 90%;
    padding: 1rem;
    margin-bottom: 5px;
`;
