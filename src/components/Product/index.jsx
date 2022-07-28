import "./style.css"

export const Product = ({product}) => {
    return(
        <li key={product.id}>
            <img src={product.image}/>
            <p>{product.category}</p>
            <p>{product.title}</p>
            <p>{product.price}</p>
            <p>{product.description}</p>
            <button>Adiconar ao carrinho</button>
        </li>
    )
}