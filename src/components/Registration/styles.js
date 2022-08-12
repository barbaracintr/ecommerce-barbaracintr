import styled from "styled-components";
import * as muiStyles from "@mui/material/styles";
import {
  Typography,
  Button,
  TextField,
  Paper,
  InputLabel,
} from "@mui/material";

export const StyledForm = styled.form`
  margin: 0 auto;
  padding: 30px;
  max-width: 400px;
  color: #000;
`;
export const StyledTypography = muiStyles.styled(Typography)`
    color: #000;
    line-height: 0px;
    font-size: 18px;
    text-align: center;
`;
export const StyledButton = muiStyles.styled(Button)`
    background-color: #59323F;
    font-family: 'Inter';
    width: 260px;
`;
export const StyledTextField = muiStyles.styled(TextField)`
    color: #000;
    width: 260px;
`;
export const StyledPaper = muiStyles.styled(Paper)`
    background-color: #212529;
    padding: 20px;
`;
export const StyledInputLabel = muiStyles.styled(InputLabel)`
    color: #000;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400; 
    font-size: 12.182px;
`;
export const StyledButtonLogin = muiStyles.styled(Button)`
    font-family: 'Inter';
    color: #000;
    
`;
export const StyledTypographyLogo = muiStyles.styled(Typography)`
    color: #000;
    font-size: 20px;
    text-align: center;
    margin-top: 90px;
    color: #FF577F;
    font-family: 'Inter';
    font-weight: bold;
`;
