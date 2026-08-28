// src/components/Navbar.jsx
import { useEffect, useState } from 'react';
import { FiSun, FiMoon, FiDownload, FiMenu, FiX } from 'react-icons/fi';
import { useActiveSection } from '../hooks/useReveal';
import { RESUME_URL } from '../data/links';

const navLinks = [
  { name: 'Experience', id: 'experience' },
  { name: 'Skills', id: 'skills' },
  { name: 'Work', id: 'projects' },
  { name: 'Education', id: 'education' },
  { name: 'Certifications', id: 'certifications' }
];

const sectionIds = ['hero', ...navLinks.map((link) => link.id)];

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const activeId = useActiveSection(sectionIds);
  const [menuOpen, setMenuOpen] = useState(false);

  // Don't let the page scroll behind the open menu, and close on Escape.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';

    const onKeyDown = (event) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [menuOpen]);

  return (
    <header className="header">
      <div className="header-container">
        <a href="#hero" className="header-mark" onClick={() => setMenuOpen(false)}>
          Shiv Prakash Verma <span>/ Data Scientist</span>
        </a>

        <nav className="header-nav" aria-label="Sections">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`header-link ${activeId === link.id ? 'active' : ''}`}
              aria-current={activeId === link.id ? 'true' : undefined}
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <button
            className="icon-btn"
            onClick={toggleDarkMode}
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {darkMode ? <FiSun size={17} /> : <FiMoon size={17} />}
          </button>

          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary header-resume"
          >
            <FiDownload size={14} /> Resume
          </a>

          <button
            className="icon-btn menu-toggle"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <FiX size={19} /> : <FiMenu size={19} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="mobile-menu">
          <nav aria-label="Sections">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`mobile-link ${activeId === link.id ? 'active' : ''}`}
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </nav>

          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary mobile-resume"
            onClick={() => setMenuOpen(false)}
          >
            <FiDownload size={14} /> Resume
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
