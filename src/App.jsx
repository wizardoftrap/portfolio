// src/App.jsx
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Footer from './components/Footer';
import './App.css';

const THEME_KEY = 'theme';

/** Stored choice wins; otherwise fall back to the OS preference. */
const getInitialTheme = () => {
  const stored = localStorage.getItem(THEME_KEY);
  if (stored === 'dark' || stored === 'light') return stored === 'dark';
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
};

function App() {
  const [darkMode, setDarkMode] = useState(getInitialTheme);

  // Single source of truth: state drives the body class, never the reverse.
  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
    localStorage.setItem(THEME_KEY, darkMode ? 'dark' : 'light');
  }, [darkMode]);

  return (
    <div className="app">
      <Navbar darkMode={darkMode} toggleDarkMode={() => setDarkMode((v) => !v)} />

      <main>
        <Hero />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Certifications />
      </main>

      <Footer />
    </div>
  );
}

export default App;
