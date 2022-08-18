import {
  Box,
  ImgProduct,
  ProductsDetail,
  StyledPaper,
  StyledTypography,
  BoxContainer,
} from "./styles.js";

import { FlexContainer } from "../../styles/global";

export const Product = ({ product }) => {
  return (
    <>
      <ProductsDetail to={`/details/${product.id}`}>
        <BoxContainer>
          <StyledPaper elevation={3} key={product.id}>
            <FlexContainer
              flexDirection="column"
              justifyContent="center"
              padding="10px"
              gap="10px"
            >
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
        </BoxContainer>
      </ProductsDetail>
    </>
  );
};
