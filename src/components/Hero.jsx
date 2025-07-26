// src/components/Hero.jsx
import { useEffect, useRef } from 'react';
import { FiGithub, FiLinkedin, FiMail, FiInstagram } from 'react-icons/fi';

const Hero = () => {
  const profileRef = useRef(null);
  const typingRef = useRef(null);
  const typingTextRef = useRef(null);
  
  // Typing animation effect
  useEffect(() => {
    if (!typingRef.current || !typingTextRef.current) return;
    
    const roles = ['Data Science','AI/ML','GenAI/AI Agents', 'Backend'];
    let currentRoleIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    
    const type = () => {
      const currentRole = roles[currentRoleIndex];
      
      if (isDeleting) {
        typingTextRef.current.textContent = currentRole.substring(0, currentCharIndex - 1);
        currentCharIndex--;
        typingSpeed = 50;
      } else {
        typingTextRef.current.textContent = currentRole.substring(0, currentCharIndex + 1);
        currentCharIndex++;
        typingSpeed = 100;
      }
      
      if (!isDeleting && currentCharIndex === currentRole.length) {
        isDeleting = true;
        typingSpeed = 1000; // Pause at the end
      } else if (isDeleting && currentCharIndex === 0) {
        isDeleting = false;
        currentRoleIndex = (currentRoleIndex + 1) % roles.length;
        typingSpeed = 500; // Pause before typing next role
      }
      
      setTimeout(type, typingSpeed);
    };
    
    setTimeout(type, 1000);
  }, []);

  // Parallax effect for profile picture
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!profileRef.current) return;
      
      const x = (window.innerWidth / 2 - e.pageX) / 25;
      const y = (window.innerHeight / 2 - e.pageY) / 25;
      
      profileRef.current.style.transform = `translateX(${x}px) translateY(${y}px)`;
    };

    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const socialLinks = [
    { icon: <FiLinkedin />, url: 'https://www.linkedin.com/in/shiv-prakash-verma-000133234', label: 'LinkedIn' },
    { icon: <FiGithub />, url: 'https://github.com/wizardoftrap', label: 'GitHub' },
    { icon: <FiInstagram />, url: 'https://www.instagram.com/sp_shivamverma', label: 'Twitter' },
    { icon: <FiMail />, url: 'mailto:shivprakashiitropar@gmail.com', label: 'Email' }
  ];

  return (
    <section id="hero" className="hero">
      <div className="container">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between hero-container">
          {/* Left side - Text content */}
          <div className="hero-content">
            <p className="hero-subtitle fade-in">Hello, I'm</p>
            
            <h1 className="hero-title fade-in delay-1">Shiv Prakash Verma</h1>
            
            <div className="typing-container fade-in delay-2" ref={typingRef}>
              <span ref={typingTextRef} className="typing-text"></span>
              <span className="typing-cursor">|</span>
            </div>
            
            <p className="hero-description fade-in delay-3">
              I have completed B. Tech. in Electrical Engineering from IIT Ropar with a deep interest in Data Science, GenAI, and Backend Development. While my core studies gave me a solid base in electrical systems, I’ve spent a lot of time outside the classroom building projects that involve Machine Learning, Deep Learning, LLMs, and intelligent apps. I enjoy working on the backend — especially with Flask and Spring Boot — and I’m always up for learning new tools and tech. What drives me is solving real problems, learning fast, and building things that actually make an impact.
            </p>
            
            <div className="hero-buttons fade-in delay-4">
              <a href="#projects" className="btn btn-primary">
                View My Work
              </a>
              <a href="https://drive.usercontent.google.com/u/0/uc?id=1-3wZjEjtYUuAqqaIJaJPYjN2I8Fn7ZYG&export=download" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                Download CV
              </a>
            </div>
            
            <div className="hero-social fade-in delay-5">
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
          
          {/* Right side - Profile picture */}
          <div className="hero-image fade-in">
            <div className="profile-img-container">
              <div ref={profileRef}>
                <img 
                  src="https://raw.githubusercontent.com/wizardoftrap/portfolio/refs/heads/master/src/assets/profile.jpg" 
                  alt="Shiv Prakash" 
                  className="profile-img"
                />
              </div>
            </div>
        
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;