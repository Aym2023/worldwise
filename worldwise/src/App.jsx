import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Product from './pages/Product';
import Pricing from './pages/pricing';
import HomePage from './pages/HomePage';
import PageNotFound from './pages/PageNotFound';

function App() {
  return (
      <BrowserRouter>
        <Routes>
         <Route  path='/' element={<HomePage/>} />
         <Route  path='Product' element={<Product />} />
         <Route  path='Pricing' element={<Pricing />} />
         <Route  path='*' element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
