import { ProductsList } from "./components/ProductsList";
import { Cart } from "./components/Cart";

import { CartProvider } from "./providers/cart";
import { ProductsProvider } from "./providers/products";
import { Header } from "./components/Header";
import { Registration } from "./components/Registration";

import { Routes, Route } from "react-router-dom";
import { Login } from "./components/Login";
import { ProductDetails } from "./components/ProductDetails";

import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
      <ProductsProvider>
        <CartProvider>
          <Header />
          <Routes>
            <Route path="/" element={<ProductsList />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/register" element={<Registration />} />
            <Route path="/login" element={<Login />} />
            <Route path="/details/:productId" element={<ProductDetails />} />
          </Routes>
        </CartProvider>
      </ProductsProvider>
      <ToastContainer />
    </>
  );
}

export default App;
