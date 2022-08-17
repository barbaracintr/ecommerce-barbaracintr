import styled from "styled-components";

import * as muiStyles from "@mui/material/styles";
import { Typography, Paper } from "@mui/material";

export const StyledTypography = muiStyles.styled(Typography)`
    color: ${(props) => (props.title ? "#99f" : "#0009")};
    font-size: ${(props) => (props.title ? "30px" : "15px")};
    padding: ${(props) => (props.title ? "50px" : "5px")};
    font-family: 'Inter';
    font-weight: 700;
`;
export const StyledPaper = muiStyles.styled(Paper)`
    width: 60%;
    padding: 20px;
`;
export const List = styled.ul`
    font-family: 'Inter';
    display: flex;
    flex-direction: column;
`;