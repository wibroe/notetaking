import { NavBar } from "./pages/NavBar";

import React from 'react';
import logo from './logo.svg';
import './App.css';

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
	  <>
		  <Router>
			  <NavBar />
			  <div className="App">
				  <Routes>
					  <Route path="/" element={<Home />} />
					  <Route path="/about" element={<About />} />
				  </Routes>
			  </div>
		  </Router>
	  </>
  );
}

export default App;
