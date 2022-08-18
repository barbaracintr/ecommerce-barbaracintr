import * as muiStyles from "@mui/material/styles";
import { Select, MenuItem } from "@mui/material";

export const StyledSelect = muiStyles.styled(Select)`
    background: #fff4;
    font-family: 'Inter';
    width: 15vw;
    color: #000;

    @media only screen and (max-width: 600px) {
        width: 70vw;
    }
`;
export const StyledMenuItem = muiStyles.styled(MenuItem)`
    color: #000;
    font-family: 'Inter';
`;
