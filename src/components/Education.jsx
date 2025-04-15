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
      degree: 'Master of Science in Computer Science',
      institution: 'Stanford University',
      location: 'Stanford, CA',
      period: '2018 - 2020',
      description: 'Specialized in Artificial Intelligence and Machine Learning. Graduated with honors and completed a thesis on neural network optimization techniques.',
      achievements: [
        'GPA: 3.9/4.0',
        'Dean\'s List: All semesters',
        'Teaching Assistant for Data Structures and Algorithms'
      ],
      courses: [
        'Advanced Algorithms',
        'Machine Learning',
        'Neural Networks',
        'Distributed Systems',
        'Database Management'
      ]
    },
    {
      degree: 'Bachelor of Science in Computer Engineering',
      institution: 'University of California, Berkeley',
      location: 'Berkeley, CA',
      period: '2014 - 2018',
      description: 'Focused on software engineering and computer architecture. Participated in multiple hackathons and coding competitions.',
      achievements: [
        'GPA: 3.7/4.0',
        'Undergraduate Research Assistant',
        'President of the Coding Club'
      ],
      courses: [
        'Data Structures',
        'Computer Architecture',
        'Operating Systems',
        'Software Engineering',
        'Web Development'
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