import {
  Box,
  ImgProduct,
  ProductsDetail,
  StyledPaper,
  StyledTypography,
} from "./styles.js";

import { FlexContainer } from "../../styles/global";

export const Product = ({ product }) => {
  return (
    <>
      <ProductsDetail to={`/details/${product.id}`}>
        <FlexContainer
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          width="10%"
          gap="0px"
          padding="0px"
        >
          <StyledPaper elevation={3} key={product.id}>
            <FlexContainer flexDirection="column" justifyContent="center">
              <ImgProduct src={product.image} />
              <Box>
                <StyledTypography category component="span">
                  {product.category}
                </StyledTypography>
                <StyledTypography title component="h2">
                  {product.title}
                </StyledTypography>
                <StyledTypography>
                  $ {product.price.toFixed(2)}
                </StyledTypography>
              </Box>
            </FlexContainer>
          </StyledPaper>
        </FlexContainer>
      </ProductsDetail>
    </>
  );
};
