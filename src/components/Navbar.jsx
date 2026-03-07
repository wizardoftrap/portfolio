// src/components/Navbar.jsx
import { FiSun, FiMoon, FiDownload } from 'react-icons/fi';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  const navLinks = [
    { name: 'Home', id: 'hero' },
    { name: 'Experience', id: 'experience' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Education', id: 'education' },
    { name: 'Certifications', id: 'certifications' }
  ];

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-profile">
          <img 
            src="/assets/profile.jpg" 
            alt="Shiv Prakash Verma" 
            className="header-profile-img"
          />
          <div className="header-profile-info">
            <h1 className="header-profile-name">Shiv Prakash</h1>
            <p className="header-profile-role">Data Science & AI</p>
          </div>
        </div>

        <nav className="header-nav">
          {navLinks.map((link) => (
            <a 
              key={link.id}
              href={`#${link.id}`}
              className="header-link"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.id);
              }}
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <button 
            className="theme-toggle header-theme"
            onClick={toggleDarkMode}
            aria-label="Toggle dark mode"
            title={darkMode ? 'Light mode' : 'Dark mode'}
          >
            {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
          </button>
          
          <a 
            href="https://drive.usercontent.google.com/u/0/uc?id=1_qAliWs3h0-iiIGlQfL7p9sW8PRy-Ju_&export=download" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-primary header-resume"
            title="Download Resume"
          >
            <FiDownload size={18} /> Resume
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;