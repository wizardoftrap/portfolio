// src/components/Footer.jsx
import { FiArrowUp, FiArrowUpRight } from 'react-icons/fi';
import SocialLinks from './SocialLinks';
import { EMAIL } from '../data/links';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <p className="footer-statement">Open to work.</p>

          <a href={`mailto:${EMAIL}`} className="footer-contact-link">
            Get in Touch <FiArrowUpRight size={18} />
          </a>
        </div>

        <div className="footer-bottom">
          <span className="mono">
            © {currentYear} Shiv Prakash Verma · Data Scientist at DIOnce
          </span>

          <SocialLinks className="footer-social" />

          <a href="#hero" className="to-top">
            Top <FiArrowUp size={12} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
