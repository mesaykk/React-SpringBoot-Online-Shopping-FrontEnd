import React from 'react'
import Shop from "./containers/Shop"
import {BrowserRouter} from 'react-router-dom'
import './App.css';

const App =() => {
  return (
    <BrowserRouter>
      <Shop/>
      <div>Hello world</div>
    </BrowserRouter>
  );
}

export default App;
