import "./style.css"

import { useContext } from "react"
import { CartContext } from "../../providers/cart"

export const Product = ({product}) => {

    const { itemCart, addToProdutctsCart } = useContext(CartContext)

    const addToCart = () => {
        addToProdutctsCart(product)
    }

    return(
        <li key={product.id}>
            <img src={product.image}/>
            <p>{product.category}</p>
            <p>{product.title}</p>
            <p>{product.price}</p>
            <p>{product.description}</p>
            <button onClick={addToCart}>Adiconar ao carrinho</button>
        </li>
    )
}