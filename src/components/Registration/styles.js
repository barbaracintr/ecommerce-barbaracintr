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
  width: 80%;
  padding: 25px;
  .error {
    color: #d32f2f;
    font-weight: 400;
    font-size: 0.75rem;
  }
`;
export const StyledTypography = muiStyles.styled(Typography)`
    color: ${(props) => (props.title ? "#89f" : "#0009")};
    font-size: ${(props) => (props.title ? "20px" : "15px")};
    padding: ${(props) => (props.title ? "30px" : "5px")};
    text-align: center;
`;
export const StyledButton = muiStyles.styled(Button)`
    background-color: #89f;
    width: 260px;
`;
export const StyledTextField = muiStyles.styled(TextField)`
    color: #0009;
    width: 260px;
    margin-bottom: 20px;
`;
export const StyledPaper = muiStyles.styled(Paper)`
    width: 25%;
    margin: 0 auto;
    margin-top: 50px;
    font-family: 'Inter';
`;
export const StyledInputLabel = muiStyles.styled(InputLabel)`
    color: #0009;
    font-style: normal;
    font-weight: 400; 
    font-size: 12.182px;
`;
export const StyledButtonLogin = muiStyles.styled(Button)`
    font-family: 'Inter';
    color: #89f;
`;
