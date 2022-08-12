export const Total = ({productsCart}) => {

    const total = productsCart.reduce((acc, productPrice) => {
        return acc + productPrice.qtdTotal
    }, 0)

    return(
        <p>Preço total: {total.toFixed(2)}</p>
    )
}