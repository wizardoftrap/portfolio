// src/components/Experience.jsx
import { useState, useEffect } from 'react';
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi';

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('experience');
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

  // Sample experience data - replace with your actual experience
  const experienceData = [
    {
      company: 'Easecruit',
      position: 'Software Developer Intern',
      period: 'May 2024 - July 2024',
      location: 'Remote',
      description: [
        'Built a system that processes resumes by extracting important information such as personal details, work experience, education and skills',
        'Used Natural Language Processing (NLP) libraries in Java and Python to extract the data',
        'Used MongoDB for easy data access and data management',
        'Collaborated with fellow developers to learn best practices'
      ],
      technologies: ['Python', 'Java', 'PyPdf', 'Apache', 'MongoDB']
    }
  ];

  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className={`section-title ${isVisible ? 'fade-in' : ''}`}>
          Work Experience
        </h2>

        <div className="experience-container">
          {/* Company tabs */}
          <div className={`experience-tabs ${isVisible ? 'fade-in delay-1' : ''}`}>
            {experienceData.map((exp, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`experience-tab ${activeTab === index ? 'active' : ''}`}
              >
                {exp.company}
              </button>
            ))}
          </div>

          {/* Experience details */}
          <div className="experience-content-container">
            {experienceData.map((exp, index) => (
              <div 
                key={index}
                className={`experience-content ${activeTab === index ? 'active' : ''} ${isVisible ? 'fade-in delay-2' : ''}`}
              >
                <h3 className="experience-title">
                  {exp.position}
                </h3>
                <h4 className="experience-company">
                  {exp.company}
                </h4>
                
                <div className="experience-details">
                  <div className="experience-detail">
                    <FiCalendar />
                    <span>{exp.period}</span>
                  </div>
                  <div className="experience-detail">
                    <FiMapPin />
                    <span>{exp.location}</span>
                  </div>
                </div>

                <ul className="experience-list">
                  {exp.description.map((item, i) => (
                    <li key={i} className="experience-list-item">
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="experience-skills">
                  {exp.technologies.map((tech, i) => (
                    <span 
                      key={i}
                      className="tech-tag"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;