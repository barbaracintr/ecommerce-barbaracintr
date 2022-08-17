import * as muiStyles from "@mui/material/styles";
import { Select, MenuItem } from "@mui/material";

export const StyledSelect = muiStyles.styled(Select)`
    background: #fff;
    font-family: 'Inter';
    width: 260px;
    margin-top: 20px;
    color: #000;
`;
export const StyledMenuItem = muiStyles.styled(MenuItem)`
    color: #000;
    font-family: 'Inter';
`;