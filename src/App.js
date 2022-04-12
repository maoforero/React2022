import React from 'react';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <routes>
          <div>
            <route exact path="/home" element={Home}/>
            <route exact path="/menu" element={menu}/>
            <route path="*" element={NotFound}/>
          </div>
        </routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
