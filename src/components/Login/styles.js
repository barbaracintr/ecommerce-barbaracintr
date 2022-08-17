import styled from "styled-components";

import * as muiStyles from "@mui/material/styles";
import { Typography, Button, TextField, Paper, InputLabel } from "@mui/material";

export const StyledForm = styled.form`
  margin: 0 auto;
  width: 80%;
  padding: 6px;
  font-family: 'Inter';
  .error {
    color: #d32f2f;
    font-weight: 400;
    font-size: 0.75rem;
  }
`;
export const StyledTypography = muiStyles.styled(Typography)`
    color: ${(props) => (props.title ? "#89f" : "#0009")};
    font-size: ${(props) => (props.title ? "20px" : "15px")};
    text-align: center;
    padding: ${(props) => (props.title ? "50px" : "5px")};
`;
export const StyledButton = muiStyles.styled(Button)`
    background: #89f;
    font-family: 'Inter';
    width: 260px;
    margin-top: 20px;
`;
export const StyledTextField = muiStyles.styled(TextField)`
    width: 260px;
    margin-bottom: 20px;
`;
export const StyledPaper = muiStyles.styled(Paper)`
    width: 350px;
    margin: 0 auto;
    margin-top: 50px;
`;
export const StyledInputLabel = muiStyles.styled(InputLabel)`
    color: #0009;
    font-style: normal;
    font-weight: 400; 
    font-size: 12.182px;
`;
export const StyledButtonRegister = muiStyles.styled(Button)`
    font-family: 'Inter';
    color: #89f;
`;