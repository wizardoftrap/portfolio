// src/components/SocialLinks.jsx
import { FiGithub, FiLinkedin, FiMail, FiInstagram } from 'react-icons/fi';
import { SOCIAL } from '../data/links';

const icons = {
  linkedin: <FiLinkedin size={17} />,
  github: <FiGithub size={17} />,
  huggingface: <span aria-hidden="true">🤗</span>,
  instagram: <FiInstagram size={17} />,
  email: <FiMail size={17} />
};

const SocialLinks = ({ className = 'hero-social' }) => (
  <div className={className}>
    {SOCIAL.map((link) => (
      <a
        key={link.id}
        href={link.url}
        target={link.id === 'email' ? undefined : '_blank'}
        rel="noopener noreferrer"
        aria-label={link.label}
        className="social-icon"
      >
        {icons[link.id]}
      </a>
    ))}
  </div>
);

export default SocialLinks;
