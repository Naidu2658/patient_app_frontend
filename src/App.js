
import React from 'react';
import About from './components/About';

import { BrowserRouter as Router, Routes, Route,Link } from "react-router-dom";
import Getehr from './components/Getehr';
function App() {
  return (
     <Router>
     <Link to="/">home</Link>
     <Link to="/about">About</Link>
    <Routes>
      {/* <Route path="/" element={<Getehr />}> */}
      <Route path="/about" element={<About />}>
      </Route>
    </Routes>
  </Router>
  );
}

export default App;
