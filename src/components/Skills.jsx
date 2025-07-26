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
  const [activeCategory, setActiveCategory] = useState('data');
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
    { id: 'data', name: 'Data Science', icon: <FiDatabase /> },
    { id: 'software', name: 'Software', icon: <FiServer /> },
    { id: 'languages', name: 'Languages', icon: <FiCode /> },
    { id: 'tools', name: 'Tools', icon: <FiTool /> },
    { id: 'other', name: 'Other', icon: <FiGlobe /> }
  ];

  // Skills data - replace with your actual skills
  const skillsData = {
    software: [
      { name: 'React'},
      { name: 'Spring Boot'},
      { name: 'Flask'},
      { name: 'RESTful APIs'},
      { name: 'Streamlit'}
    ],
    data: [
      { name: 'LLMs'},
      { name: 'GenAI'},
      { name: 'Autogen'},
      { name: 'Langchain'},
      { name: 'n8n'},
      { name: 'Machine Learning'},
      { name: 'Deep Learning'},
      { name: 'MongoDB'},
      { name: 'MySQL'},
      { name: 'Firebase'},
      { name: 'Pandas'},
      { name: 'NumPy'}
      
    ],
    tools: [
      { name: 'Google Cloud'},
      { name: 'Azure'},
      { name: 'Git'},
      { name: 'GitHub'},
      { name: 'Docker'},
      { name: 'VS Code'},
      { name: 'Eclipse'},
      { name: 'PyCharm'},
      { name: 'Jupyter'},
      { name: 'Linux'},
      { name: 'Android Studio'}
    ],
    languages: [
      { name: 'Java'},
      { name: 'Python'},
      { name: 'C++'},
      { name: 'MATLAB'},
      { name: 'SQL'}
    ],
    other: [
      { name: 'OOPs'},
      { name: 'DBMS'},
      { name: 'Probability'},
      { name: 'Statistics'},
      { name: 'Stochastic Processes'},
      { name: 'Team work'},
      { name: 'Problem Solving'},
      { name: 'DSA'},
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
  {(skillsData[activeCategory] || []).map((skill, index) => (
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