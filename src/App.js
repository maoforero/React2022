import React from 'react';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Home from './Pages/Home';
import NotFound from './Pages/NotFound'
import { BrowserRouter, Routes, Router} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <NavBar/>
    </div>
  );
}

export default App;
