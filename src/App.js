//import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';

import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";
import FillAplication from './Components/FillAplication';

function App() {
  const [mode, setMode] = useState('light')
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#343a40'

    }
    else {
      setMode('light');
      document.body.style.backgroundColor = '#fff'

    }
  }
  return (
    <>
      <Router>
        <Navbar title="blog-Api" mode={mode} toggleMode={toggleMode} />
        <div className='container my-5'>
          <Routes>
            <Route path="/" element={<TextForm heading="Write Your blog" mode={mode} toggleMode={toggleMode} />} />
            <Route path="/fill" element={<FillAplication mode={mode} toggleMode={toggleMode}/>} />
            <Route path="/fill/:id" element={<FillAplication/>}></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
