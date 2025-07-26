// src/components/Education.jsx
import { useEffect, useState } from 'react';
import { FiBookOpen, FiCalendar, FiMapPin, FiAward } from 'react-icons/fi';

const Education = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('education');
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

  // Sample education data - replace with your actual education
  const educationData = [
    {
      degree: 'B. Tech. in Electrical Engineering',
      institution: 'IIT Ropar',
      location: 'Rupnagar, Punjab',
      period: '2021 - 2025',
      description: '',
      achievements: [
        'GPA: 7.34/10.0',
        'Captain, Hockey, IIT Ropar',
        'Deputy Secretary, ODAC, IIT Ropar'
      ],
      courses: [
        'Introduction to Data Structures',
        'Foundation of Data Science',
        'Internet of Things',
        'Deep Learming in Computer Vision',
        'Probability and Stochastic Processes',
        'Control System',
        'Digital Circuits',
        'Analog Circuits',
        'High Voltage POwer Equipment'
      ]
    },
    {
      degree: 'Class 12th',
      institution: 'Raghukul Vidyapeeth',
      location: 'Gonda, Uttar Pradesh',
      period: '2019 - 2021',
      description: '',
      achievements: [
        'Percentage: 80%'
      ],
      courses: [
        'Physics',
        'Chemistry',
        'Mathematics'
      ]
    },
    {
      degree: 'Class 10th',
      institution: 'Lucknow Public School',
      location: 'Lucknow, Uttar Pradesh',
      period: '2017 - 2019',
      description: '',
      achievements: [
        'Percentage: 96.16%'
      ],
      courses: [
        'Science',
        'Mathematics',
        'Foundation in Information Technology'
      ]
    }
  ];

  return (
    <section id="education" className="section">
      <div className="container">
        <h2 className={`section-title ${isVisible ? 'fade-in' : ''}`}>
          Education
        </h2>

        <div className="education-container">
          {educationData.map((edu, index) => (
            <div 
              key={index}
              className={`education-card ${isVisible ? `fade-in delay-${index + 1}` : ''}`}
            >
              <div className="education-content">
                <div className="education-header">
                  <h3 className="education-degree">{edu.degree}</h3>
                  <h4 className="education-institution">{edu.institution}</h4>
                </div>

                <div className="education-details">
                  <div className="education-detail">
                    <FiCalendar />
                    <span>{edu.period}</span>
                  </div>
                  <div className="education-detail">
                    <FiMapPin />
                    <span>{edu.location}</span>
                  </div>
                </div>

                <p className="education-description">
                  {edu.description}
                </p>

                <div className="education-grid">
                  {/* Achievements */}
                  <div className="education-achievements">
                    <h5 className="achievements-title">
                      <FiAward />
                      Achievements
                    </h5>
                    <ul className="achievements-list">
                      {edu.achievements.map((achievement, i) => (
                        <li key={i} className="achievements-item">
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Key Courses */}
                  <div>
                    <h5 className="courses-title">
                      <FiBookOpen />
                      Key Courses
                    </h5>
                    <div className="courses-tags">
                      {edu.courses.map((course, i) => (
                        <span 
                          key={i}
                          className="course-tag"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative bottom border */}
              <div className="education-footer"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;