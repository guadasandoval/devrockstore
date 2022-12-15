
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Layout from '../components/Layout';
import Cart from '../containers/Cart';
import Home from '../containers/Home';
import Producto from '../containers/Producto';
import UseContexto from '../context/UseContexto';

function App() {
  return (
    <>
    <BrowserRouter>
    <UseContexto>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route exact path="/cart" element={<Cart/>}></Route>
          <Route exact path="/product" element={<Producto/>}></Route>
        </Routes>
      </Layout>
      </UseContexto>
    </BrowserRouter>
    </>
  );
}

export default App;
