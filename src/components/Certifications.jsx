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
      name: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      date: 'December 2022',
      credentialId: 'AWS-ASA-12345',
      credentialURL: 'https://www.yourverificationlink.com/aws-12345',
      description: 'Validates expertise in designing distributed systems on AWS. Covers topics like designing resilient architectures, defining performant solutions, and securing applications and infrastructure.',
      skills: [
        'Cloud Architecture',
        'AWS Services',
        'Distributed Systems',
        'Security Best Practices'
      ],
      image: '/assets/certifications/aws.png'
    },
    {
      id: 2,
      name: 'Meta Frontend Developer Professional Certificate',
      issuer: 'Meta (Facebook)',
      date: 'August 2022',
      credentialId: 'META-FE-67890',
      credentialURL: 'https://www.yourverificationlink.com/meta-67890',
      description: 'Comprehensive program covering modern frontend development techniques and best practices. Includes React, responsive design, testing, and performance optimization.',
      skills: [
        'React',
        'JavaScript',
        'Responsive Design',
        'Frontend Testing'
      ],
      image: '/assets/certifications/meta.png'
    },
    {
      id: 3,
      name: 'Google UX Design Professional Certificate',
      issuer: 'Google',
      date: 'May 2022',
      credentialId: 'GOOGLE-UX-54321',
      credentialURL: 'https://www.yourverificationlink.com/google-54321',
      description: 'Covers the entire UX design process from empathizing with users to creating wireframes and prototypes. Includes user research, usability testing, and design thinking methodologies.',
      skills: [
        'User Research',
        'Wireframing',
        'Prototyping',
        'Usability Testing'
      ],
      image: '/assets/certifications/google.png'
    },
    {
      id: 4,
      name: 'MongoDB Database Administrator',
      issuer: 'MongoDB University',
      date: 'February 2022',
      credentialId: 'MONGO-DBA-13579',
      credentialURL: 'https://www.yourverificationlink.com/mongo-13579',
      // src/components/Certifications.jsx (continued)
      description: 'Focuses on MongoDB database administration, including deployment, security, backup, and performance optimization. Covers sharding, replication, and monitoring.',
      skills: [
        'Database Administration',
        'MongoDB',
        'Data Modeling',
        'Performance Tuning'
      ],
      image: '/assets/certifications/mongodb.png'
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
            >
              <div className="certification-content">
                <div className="certification-header">
                  {/* Certificate logo/image */}
                  <div className="certification-logo">
                    {cert.image ? (
                      <img 
                        src={cert.image} 
                        alt={cert.issuer} 
                      />
                    ) : (
                      <FiAward />
                    )}
                  </div>
                  
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
              <div className="certification-footer"></div>
            </div>
          ))}
        </div>
        
        {/* Additional certifications badge */}
        <div className={`certifications-badge ${isVisible ? 'fade-in delay-5' : ''}`}>
          <div className="badge">
            <FiAward className="badge-icon" />
            <span>Additional certifications available upon request</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;