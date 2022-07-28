import './App.css';
import { ProductsList } from './components/ProductsList';
import { ProductsProvider } from './providers/products';

function App() {
  return (
    <>
    {/* <ProductsProvider> */}
      <ProductsList />
    {/* </ProductsProvider> */}
    </>
  );
}

export default App;
