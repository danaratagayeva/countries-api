import React from 'react';
import {BrowserRouter as Router, Routes,Route} from "react-router-dom";
import About from './pages/about/About';
import Details from './pages/details/Details';
import Home from './pages/home/Home';
import Technologies from './pages/technologies/Technologies';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/"  element={<Home />}/>
        <Route path="/details" element={<Details />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/tech" element={<Technologies />}/>
      </Routes>
    </Router>
  );
}

export default App;
