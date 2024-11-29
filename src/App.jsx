import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import BlogForm from './components/BlogForm';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-blog" element={<BlogForm />} />
      </Routes>
    </Router>
  );
}

export default App;
