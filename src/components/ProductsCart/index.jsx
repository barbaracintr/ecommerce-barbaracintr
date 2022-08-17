import {
  ImgProduct,
  StyledTypography,
  StyledButton,
  StyledPaper,
  ItemList,
} from "./styles.js";

export const ProductsCart = ({ product, removeFromProductsCart }) => {
  return (
    <>
      <StyledPaper variant="outlined">
        <ItemList key={product.id}>
          <ImgProduct src={product.image} />
          <StyledTypography component="p">{product.title}</StyledTypography>
          <StyledButton
            id={product.id}
            onClick={() => removeFromProductsCart(product)}
          >
            Delete
          </StyledButton>
        </ItemList>
      </StyledPaper>
    </>
  );
};
