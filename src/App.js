
import React from 'react';
import Home from './Home';

import { Link, Route, Switch, Routes, BrrowserRouter, BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path = '/' Component={Home} />
        </Routes>  
      </BrowserRouter>
    </div>
  );
}
export default App;