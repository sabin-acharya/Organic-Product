import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/header/header';
import Slider from './Home/slider/slider'
import Feature from './pages/featured-category/feature.js';

import Product from './pages/Product/product.js';
import PopularProduct from './pages/popular-product-menu/popularProduct.js';

function App() {
  return (
    <>
      <Header/>
      <Slider/>
      <Feature/>
      <PopularProduct/>
      <Product/>
        
    </>
  );
}

export default App;
