// src/components/Certifications.jsx
import { useState, useEffect } from 'react';
import { FiAward, FiExternalLink, FiCalendar, FiCheck } from 'react-icons/fi';

const Certifications = () => {
  const [expandedId, setExpandedId] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('certifications');
      if (!section) return;
      
      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (sectionTop < windowHeight * 0.75) {
        setIsVisible(true);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Sample certification data - replace with your actual certifications
  const certificationsData = [
    {
      id: 1,
      name: 'Data Structure and Algorithms',
      issuer: 'Udemy',
      date: 'July 2023',
      credentialId: 'UC-4c864d97-c64f-4501-a13e-810a81bc54f5',
      credentialURL: 'https://www.udemy.com/certificate/UC-4c864d97-c64f-4501-a13e-810a81bc54f5/',
      description: '',
      skills: [
        'Java',
        'Data Structure',
        'Algorithms'
      ],
    },
    {
      id: 2,
      name: 'Android Developement',
      issuer: 'Udemy',
      date: 'July 2023',
      credentialId: 'UC-4c864d97-c64f-4501-a13e-810a81bc54f5',
      credentialURL: 'https://www.udemy.com/certificate/UC-4c864d97-c64f-4501-a13e-810a81bc54f5/',
      description: '',
      skills: [
        'Android',
        'Java',
        'Android Studio',
        'Firebase'
      ],
    },
    {
      id: 3,
      name: 'BCG - Data Science Job Simulation',
      issuer: 'Forage',
      date: 'May 2025',
      credentialId: 'tL3aF8ZexLN75E8hc                             ',
      credentialURL: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/SKZxezskWgmFjRvj9/Tcz8gTtprzAS4xSoK_SKZxezskWgmFjRvj9_tL3aF8ZexLN75E8hc_1748411126765_completion_certificate.pdf',
      description: '',
      skills: [
        'Python',
        'Machine Learning',
        'Data Analytics'
      ],
    },
    {
      id: 4,
      name: 'BigQuery for Data Analysts',
      issuer: 'Google',
      date: 'June 2025',
      credentialId: '1630805                             ',
      credentialURL: 'https://www.cloudskillsboost.google/public_profiles/7d8a52e1-6c16-4f98-b6a9-bb97e04fd900/badges/16300805?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share',
      description: '',
      skills: [
        'Google Cloud',
        'SQL',
        'Machine Learning',
        'BigQuery'
      ],
    },
    {
      id: 5,
      name: 'Object Oriented Programming in Java',
      issuer: 'Udemy',
      date: 'January 2023',
      credentialId: 'UC-861c3c0f-e71d-4ae3-9ceb-728b163ab4ed',
      credentialURL: 'https://www.udemy.com/certificate/UC-861c3c0f-e71d-4ae3-9ceb-728b163ab4ed/',
      // src/components/Certifications.jsx (continued)
      description: '',
     skills: [
        'Java',
        'OOPs',
        'Spring Boot',
        'Eclipse',
        'MySQL'
      ],
    },
    {
      id: 6,
      name: 'BigQuery for Machine Learning',
      issuer: 'Google',
      date: 'June 2025',
      credentialId: '16366276                            ',
      credentialURL: 'https://www.cloudskillsboost.google/public_profiles/7d8a52e1-6c16-4f98-b6a9-bb97e04fd900/badges/16366276?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share',
      description: '',
      skills: [
        'Google Cloud',
        'SQL',
        'Machine Learning',
        'BigQuery'
      ],
    }

  ];

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="certifications" className="section certifications">
      <div className="container">
        <h2 className={`section-title ${isVisible ? 'fade-in' : ''}`}>
          Certifications
        </h2>

        <div className="certifications-grid">
          {certificationsData.map((cert, index) => (
            <div 
            
              key={cert.id}
              className={`certification-card ${isVisible ? `fade-in delay-${index + 1}` : ''}`}
            ><div className="certification-footer"></div>
              <div className="certification-content">
                <div className="certification-header">
                  {/* Certificate logo/image */}               
                  {/* Certificate details */}
                  <div className="certification-title-container">
                    <h3 className="certification-name">{cert.name}</h3>
                    <h4 className="certification-issuer">{cert.issuer}</h4>
                    <div className="certification-date">
                      <FiCalendar />
                      <span>{cert.date}</span>
                    </div>
                  </div>
                </div>
                
                {/* Credential ID and verification link */}
                <div className="certification-credential">
                  <div className="credential-id">
                    <span>Credential ID:</span> {cert.credentialId}
                  </div>
                  {cert.credentialURL && (
                    <a 
                      href={cert.credentialURL} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="verify-link"
                    >
                      Verify <FiExternalLink />
                    </a>
                  )}
                </div>
                
                {/* Expandable description */}
                <div>
                  <p className="certification-description">
                    {expandedId === cert.id 
                      ? cert.description 
                      : `${cert.description.substring(0, 100)}...`}
                  </p>
                  <button 
                    onClick={() => toggleExpand(cert.id)}
                    className="show-more-btn"
                  >
                    {expandedId === cert.id ? 'Show less' : 'Show more'}
                  </button>
                </div>
                
                {/* Skills - only shown when expanded */}
                {expandedId === cert.id && (
                  <div className="certification-skills">
                    <h5 className="skills-title">Skills</h5>
                    <div className="certification-tags">
                      {cert.skills.map((skill, index) => (
                        <div 
                          key={index}
                          className="certification-tag"
                        >
                          <FiCheck />
                          {skill}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              
              {/* Decorative bottom border */}
              
            </div>
          ))}
        </div>
        
        {/* Additional certifications badge */}
        <div className={`certifications-badge ${isVisible ? 'fade-in delay-5' : ''}`}>
          <div className="badge">
            <FiAward className="badge-icon" />
            <span>Thank You!</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;