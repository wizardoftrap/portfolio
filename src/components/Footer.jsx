// src/components/Footer.jsx
import { FiGithub, FiLinkedin, FiInstagram, FiMail, FiHeart, FiArrowUp } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Social media links - replace with your actual links
  const socialLinks = [
    { icon: <FiLinkedin />, url: 'https://www.linkedin.com/in/shiv-prakash-verma-000133234', label: 'LinkedIn' },
    { icon: <FiGithub />, url: 'https://github.com/wizardoftrap', label: 'GitHub' },
    { icon: <FiInstagram />, url: 'https://www.instagram.com/sp_shivamverma', label: 'Twitter' },
    { icon: <FiMail />, url: 'mailto:shivprakashiitropar@gmail.com', label: 'Email' }
  ];

  // Quick links for footer navigation
  const quickLinks = [
    { name: 'Home', id: 'hero' },
    { name: 'Projects', id: 'projects' },
    { name: 'Experience', id: 'experience' },
    { name: 'Skills', id: 'skills' },
    { name: 'Education', id: 'education' },
    { name: 'Certifications', id: 'certifications' }
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offsetTop = section.offsetTop;
      window.scrollTo({
        top: offsetTop - 70, // Adjust for header height
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        {/* Back to top button */}
        <div className="back-to-top">
          <div
            className="top-btn"
            onClick={scrollToTop}
          >
            <FiArrowUp />
          </div>
        </div>

        <div className="footer-content">
          {/* About section */}
          <div className="footer-about">
            <h3>Shiv Prakash Verma</h3>
            <p>
              A passionate developer focused on creating beautiful, functional, and user-friendly websites and applications.
            </p>
            <div className="footer-social">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="social-icon"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul className="footer-nav">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={`#${link.id}`}
                    className="footer-nav-link"
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
          </div>

          {/* Contact section */}
          <div className="footer-contact">
            <h3>Contact Me</h3>
            <p>
              Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
            </p>
            <a
              href="mailto:shivprakashiitrpr@gmail.com"
              className="btn btn-primary"
            >
              <FiMail className="mr-2" /> Get In Touch
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider"></div>

        {/* Copyright */}
        <div className="footer-bottom">
          <p className="copyright">
            © {currentYear} Your Name. All rights reserved.
          </p>
          <p className="footer-credits">
            Made with <FiHeart className="heart-icon" /> using React
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;