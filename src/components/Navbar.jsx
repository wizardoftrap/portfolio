// src/components/Navbar.jsx
import { useState, useEffect } from 'react';
import { FiSun, FiMoon, FiMenu, FiX, FiDownload } from 'react-icons/fi';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offsetTop = section.offsetTop;
      window.scrollTo({
        top: offsetTop - 70, // Adjust for header height
        behavior: 'smooth'
      });
      setMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { name: 'Home', id: 'hero' },
    { name: 'Projects', id: 'projects' },
    { name: 'Experience', id: 'experience' },
    { name: 'Skills', id: 'skills' },
    { name: 'Education', id: 'education' },
    { name: 'Certifications', id: 'certifications' }
  ];

  return (
    <header className={`header ${scrolled ? 'header-scrolled' : ''}`}>
      <div className="container">
        <nav className="navbar">
          <div className="logo">
            <span>Shiv</span> Prakash Verma
          </div>

          {/* Desktop Navigation */}
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a 
                  href={`#${link.id}`}
                  className="nav-link"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.id);
                  }}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="nav-buttons">
            <button 
              className="theme-toggle"
              onClick={toggleDarkMode}
              aria-label="Toggle dark mode"
            >
              {darkMode ? <FiSun /> : <FiMoon />}
            </button>
            
            <a 
              href="https://drive.usercontent.google.com/u/0/uc?id=1-3wZjEjtYUuAqqaIJaJPYjN2I8Fn7ZYG&export=download" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <FiDownload /> Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu Backdrop */}
      {mobileMenuOpen && (
        <div 
          className="mobile-menu-backdrop"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'active' : ''}`}>
        <div className="mobile-menu-header">
          <span>Menu</span>
          <button 
            className="mobile-menu-close"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close mobile menu"
          >
            <FiX />
          </button>
        </div>
        <ul className="mobile-nav-links">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a 
                href={`#${link.id}`}
                className="nav-link"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.id);
                }}
              >
                {link.name}
              </a>
            </li>
          ))}
          <li>
            <a 
              href="https://drive.google.com/file/d/19YZ6fno44CnABiDTLEFqxCAteg-ytB4m/view?usp=sharing/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ display: 'inline-block', marginTop: '1rem' }}
            >
              <FiDownload /> Resume
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;