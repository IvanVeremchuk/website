import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Welcome from './pages/welcome.js';
import Work from './pages/work.js';
import About from './pages/about.js';
import Resume from './pages/resume.js';
import ViewCaseStudies from './pages/view_case_studies.js';
import JustForFun from './pages/just_for_fun.js';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Welcome/>} />
        <Route path='/welcome' element={<Welcome/>} />
        <Route path='/work' element={<Work/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/resume' element={<Resume/>} />
        <Route path='/yahoo/work' element={<Work/>} />
        <Route path='/yahoo/about' element={<About/>} />
        <Route path='/yahoo/resume' element={<Resume/>} />
        <Route path='/view_case_studies' element={<ViewCaseStudies/>} />
        <Route path='/just_for_fun' element={<JustForFun/>} />
        <Route path='/yahoo' element={<Welcome/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
