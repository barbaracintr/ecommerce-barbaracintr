import "./App.css";

import { ProductsList } from "./components/ProductsList";
import { Cart } from "./components/Cart";

import { CartProvider } from "./providers/cart";
import { ProductsProvider } from "./providers/products";

function App() {
  return (
    <>
      <ProductsProvider>
        <CartProvider>
          <ProductsList />
          <Cart />
        </CartProvider>
      </ProductsProvider>
    </>
  );
}

export default App;
