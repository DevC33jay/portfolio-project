import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Book from './pages/Book';
import Portfolio from './pages/Portfolio';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import ProjectDetail from './pages/ProjectDetail';
import VideoPlayer from './components/VideoPlayer';
import Footer from './components/Footer';

function App() {
  const [isVideoVisible, setIsVideoVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVideoVisible(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/book" element={<Book />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/:projectId" element={<ProjectDetail />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
        {isVideoVisible && <VideoPlayer onClose={() => setIsVideoVisible(false)} />}
      </main>
    </div>
  );
}

export default App;