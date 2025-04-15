// src/components/Skills.jsx
import { useState, useEffect } from 'react';
import { 
  FiCode, 
  FiLayout, 
  FiDatabase, 
  FiTool, 
  FiServer, 
  FiGlobe,
  FiCheck
} from 'react-icons/fi';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('skills');
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

  // Skill categories with icons
  const categories = [
    { id: 'languages', name: 'Languages', icon: <FiCode /> },
    { id: 'backend', name: 'Backend', icon: <FiServer /> },
    { id: 'frontend', name: 'Frontend', icon: <FiLayout /> },
    { id: 'database', name: 'Database', icon: <FiDatabase /> },
    { id: 'tools', name: 'Tools', icon: <FiTool /> },
    
    { id: 'other', name: 'Other', icon: <FiGlobe /> }
  ];

  // Skills data - replace with your actual skills
  const skillsData = {
    frontend: [
      { name: 'React'},
      { name: 'Vite'},
      { name: 'Thymeleaf'},
      { name: 'HTML'},
      { name: 'CSS'}
    ],
    backend: [
      { name: 'Spring Boot'},
      { name: 'Flask'},
      { name: 'RESTful APIs'}
    ],
    database: [
      { name: 'MongoDB'},
      { name: 'MySQL'},
      { name: 'Firebase'}
    ],
    tools: [
      { name: 'Git'},
      { name: 'gitHub'},
      { name: 'Docker'},
      { name: 'VS Code'},
      { name: 'Eclipse'},
      { name: 'PyCharm'},
      { name: 'Jupyter'},
      { name: 'Google Colab'},
      { name: 'Linux'},
      { name: 'Android Studio'},
      { name: 'Pandas'},
      { name: 'NumPy'},
      { name: 'JPA'},
      { name: 'Hibernate'},
      { name: 'MS Excel'}
    ],
    languages: [
      { name: 'Java'},
      { name: 'C'},
      { name: 'Python'},
      { name: 'C++'},
      { name: 'MATLAB'},
      { name: 'SQL'}
    ],
    other: [
      { name: 'OOPs'},
      { name: 'DBMS'},
      { name: 'Backend'},
      { name: 'Data Analytics'},
      { name: 'Problem Solving'},
      { name: 'DSA'},
      { name: 'Responsive Design'},
      { name: 'Performance Optimization'}
    ]
  };

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <h2 className={`section-title ${isVisible ? 'fade-in' : ''}`}>
          My Skills
        </h2>

        {/* Category tabs */}
        <div className={`skills-categories ${isVisible ? 'fade-in delay-1' : ''}`}>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
            >
              {category.icon}
              {category.name}
            </button>
          ))}
        </div>

{/* Skills grid without progress bars */}
<div className={`skills-grid ${isVisible ? 'fade-in delay-2' : ''}`}>
  {skillsData[activeCategory].map((skill, index) => (
    <div 
      key={index}
      className="skill-card"
    >
      {/* Simplified skill card without level indicator */}
      <h3 className="skill-name">{skill.name}</h3>
    </div>
  ))}
</div>

        {/* Skill cloud visualization */}
      </div>
    </section>
  );
};

export default Skills;