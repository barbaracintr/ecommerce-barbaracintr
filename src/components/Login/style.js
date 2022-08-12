import styled from "styled-components";
import * as muiStyles from "@mui/material/styles";
import { Typography, Button, TextField, Paper, InputLabel } from "@mui/material";

export const StyledForm = styled.form`
  margin: 0 auto;
  padding: 30px;
  max-width: 400px;
  .error {
    color: #d32f2f;
    font-weight: 400;
    font-size: 0.75rem;
  }
`;
export const StyledTypography = muiStyles.styled(Typography)`
    color: #F8F9FA;
    font-size: 18px;
    text-align: center;
    margin-bottom: 50px;
`;
export const StyledTypographyLogo = muiStyles.styled(Typography)`
    color: #F8F9FA;
    font-size: 20px;
    text-align: center;
    margin-top: 90px;
    color: #FF577F;
    font-family: 'Inter';
    font-weight: bold;
`;
export const StyledButton = muiStyles.styled(Button)`
    background: #FF577F;
    font-family: 'Inter';
    width: 260px;
    margin-top: 20px;
`;
export const StyledTextField = muiStyles.styled(TextField)`
    background-color: #343B41;
    color: #fff;
    width: 260px;
    margin-bottom: 20px;
`;
export const StyledPaper = muiStyles.styled(Paper)`
    background-color: #212529;
    width: 350px;
    margin: 0 auto;
    margin-top: 50px;
`;
export const StyledInputLabel = muiStyles.styled(InputLabel)`
    color: #F8F9FA;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400; 
    font-size: 12.182px;
`;
export const StyledButtonRegister = muiStyles.styled(Button)`
    font-family: 'Inter';
    color: #fff;
    
    `