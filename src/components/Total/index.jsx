import { StyledCard, StyledTypography } from "./styles.js";

export const Total = ({ productsCart }) => {
  const total = productsCart.reduce((acc, productPrice) => {
    return acc + productPrice.qtdTotal;
  }, 0);

  return (
    <>
      <StyledCard elevation={2} sx={{ width: 300, marginBottom: 1 }}>
        <StyledTypography
          component="p"
          sx={{
            fontFamily: "Inter",
          }}
        >
          Subtotal: ${total.toFixed(2)}
        </StyledTypography>
      </StyledCard>
    </>
  );
};
