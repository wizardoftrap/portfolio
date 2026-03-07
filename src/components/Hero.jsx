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

  const socialLinks = [
    { icon: <FiLinkedin />, url: 'https://www.linkedin.com/in/shiv-prakash-verma-000133234', label: 'LinkedIn' },
    { icon: <FiGithub />, url: 'https://github.com/wizardoftrap', label: 'GitHub' },
    { icon: <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2em', lineHeight: '1' }}>🤗</span>, url: 'https://huggingface.co/wizardoftrap', label: 'Hugging Face' },
    { icon: <FiInstagram />, url: 'https://www.instagram.com/sp_shivamverma', label: 'Twitter' },
    { icon: <FiMail />, url: 'mailto:shivprakashiitropar@gmail.com', label: 'Email' }
  ];

  return (
    <section id="hero" className="hero">
      <div className="container">
        <div className="hero-container-vertical">
          {/* Profile picture at top */}
          <div className="hero-image-top fade-in">
            <div className="profile-img-container">
              <div ref={profileRef}>
                <img 
                  src="/assets/profile.jpg" 
                  alt="Shiv Prakash" 
                  className="profile-img"
                />
              </div>
            </div>
          </div>

          {/* Text content centered below */}
          <div className="hero-content-centered">
            <p className="hero-subtitle fade-in">Hello, I'm</p>
            
            <h1 className="hero-title fade-in delay-1">Shiv Prakash Verma</h1>
            
            <div className="typing-container fade-in delay-2" ref={typingRef}>
              <span ref={typingTextRef} className="typing-text"></span>
              <span className="typing-cursor">|</span>
            </div>
            
            <p className="hero-description fade-in delay-3">
              I have completed B. Tech. in Electrical Engineering from IIT Ropar with a deep interest in Data Science, GenAI, and Backend Development. While my core studies gave me a solid base in electrical systems, I’ve spent a lot of time outside the classroom building projects that involve Machine Learning, Deep Learning, LLMs, and intelligent apps. I enjoy working on the backend — especially with FastAPI, Flask and Spring Boot — and I’m always up for learning new tools and tech. What drives me is solving real problems, learning fast, and building things that actually make an impact.
            </p>
            
            <div className="hero-buttons fade-in delay-4">
              <a href="#projects" className="btn btn-primary">
                View My Work
              </a>
              <a href="https://drive.usercontent.google.com/u/0/uc?id=1_qAliWs3h0-iiIGlQfL7p9sW8PRy-Ju_&export=download" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
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
        </div>
      </div>
    </section>
  );
};

export default Hero;