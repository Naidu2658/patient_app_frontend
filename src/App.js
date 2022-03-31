
import React from 'react';
import ViewEhr from './components/ViewEhr';

import { BrowserRouter as Router, Routes, Route,Link } from "react-router-dom";
import Checkboxc from './components/Checkboxc'
import Createconsent from './components/Createconsent';
function App() {
  return (
     <Router>
     <Link to="/">home</Link><br/>
     <Link to="/viewehr">viewehr</Link><br/>
     <Link to="/createconsnet">createconsnet</Link><br/>
     <Link to="/checkbox">checkbox</Link>
    <Routes>
      <Route path="/viewehr" element={<ViewEhr />}>
      </Route>
      <Route path="/createconsnet" element={<Createconsent />}>
      </Route>
      <Route path="/checkbox" element={<Checkboxc />}>
      </Route>
    </Routes>
  </Router>
  );
}

export default App;
