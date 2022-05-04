import React from 'react';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Home from './Pages/Home';
import Drinks from './Pages/Drinks';
import Food from './Pages/Food';
import Cart from './Pages/Cart';
import NotFound from './Pages/NotFound';
import Form from './components/Form/Form';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

import Test from './components/Test';
import TestCollection from './utils/FBGetCollection'

import { CartProvider } from './Context/CartContext';

export const CartContext = React.createContext();

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="App">
          <NavBar/>
          <Routes>
            <Route path="/test" element={<Test/>}/>
            <Route path="/testcollection" element={<TestCollection/>}/>
            <Route path="/" element={<Home/>}/>
            <Route path="/menu" element={<ItemListContainer/>}/>
            <Route exact path="/menu/:id" element={<ItemDetailContainer/>}/>
            <Route path="/bebidas" element={<Drinks type={"drink"} />}/>
            <Route path="/alimentos" element={<Food type={"food"} />}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="*" element={<NotFound/>}/>
            <Route path="/form" element={<Form/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
