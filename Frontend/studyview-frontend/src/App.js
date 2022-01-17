import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

import './styles/App.css';
import HomePage from './pages/HomePage';
import {Router, Routes, Route} from 'react-router-dom';

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ModelDatabase from './pages/ModelDatabase';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ModelDatabase />
      <Footer />
    </div>
  );
}

export default App;
