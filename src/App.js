import React from 'react';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Home from './Pages/Home';
import Drinks from './Pages/Drinks';
import Food from './Pages/Food';
import Cart from './Pages/Cart';
import NotFound from './Pages/NotFound'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/menu" element={<ItemListContainer/>}/>
          <Route exact path="/menu/:id" element={<ItemDetailContainer/>}/>
          <Route path="/bebidas" element={<Drinks type={"drink"} />}/>
          <Route path="/alimentos" element={<Food type={"food"} />}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
