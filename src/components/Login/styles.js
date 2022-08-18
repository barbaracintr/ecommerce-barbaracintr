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
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 80%;
  font-family: "Inter";
  margin-top: 50px;

  .error {
    color: #d32f2f;
    font-weight: 400;
    font-size: 0.75rem;
  }

  @media only screen and (max-width: 600px) {
    width: 60vw;
  }
`;
export const StyledTypography = muiStyles.styled(Typography)`
    color: ${(props) => (props.title ? "#89f" : "#0009")};
    font-size: ${(props) => (props.title ? "20px" : "15px")};
    padding:  ${(props) => (props.title ? "20px" : "5px")};
    text-align: center;

    @media only screen and (max-width: 600px) {
        width: 60vw;
        padding:  ${(props) => (props.title ? "5px" : "0")};
    }
`;
export const StyledButton = muiStyles.styled(Button)`
    background: #89f;
    font-family: 'Inter';
    margin-top: 10px;
    width: 16vw;

    @media only screen and (max-width: 600px) {
        width: 60vw;
    }
`;
export const StyledTextField = muiStyles.styled(TextField)`
    // width: 260px;
`;
export const StyledPaper = muiStyles.styled(Paper)`
    width: 20vw;
    margin: 0 auto;

    @media only screen and (max-width: 600px) {
        width: 80vw;
    }
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
