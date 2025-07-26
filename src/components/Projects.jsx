// src/components/Projects.jsx
import { useState, useEffect } from 'react';
import { FiGithub, FiExternalLink, FiFolder } from 'react-icons/fi';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('projects');
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

  // Sample project data - replace with your actual projects
  const projectsData = [
    {
      id: 1,
      title: 'Quiz Maker',
      description: 'In this project, an AI-powered quiz platform was developed using LangChain, Streamlit and Gemini LLM with RAG to generate, grade and deliver quizzes from teacher uploaded notes. Integrated Pinecone vector database for semantic search, automated grading using LLM, result emailing and session-based attempt tracking.',
      image: 'https://raw.githubusercontent.com/wizardoftrap/portfolio/refs/heads/master/src/assets/quiz.jpg',
      technologies: ['Large Language Models (LLM)', 'LangChain', 'Artificial Intelligence (AI)', 'AI Agents'],
      github: 'https://github.com/wizardoftrap/quiz-maker',
      category: 'data'
    },
    {
      id: 2,
      title: 'Referring Video Object Segmentation',
      description: 'In this project, a deep learning-based Referring Video Object Segmentation (RVOS) system was developed using Con-volutional Neural Networks (CNNs) with a ResNet-50 backbone to segment objects in videos based on natural language descriptions. A custom model was implemented that effectively integrates visual and textual features, and was trained on the DAVIS-2017 dataset to achieve accurate object segmentation across video frames.',
      image: 'https://raw.githubusercontent.com/wizardoftrap/portfolio/refs/heads/master/src/assets/rvos.png',
      technologies: ['Python', 'Deep Learning', 'Data Science'],
      github: 'https://github.com/wizardoftrap/Referring-Video-Object-Segmentation',
      category: 'data'
    },
    {
      id: 3,
      title: 'Network Anomaly Detection',
      description: 'TThis project presents a machine learning pipeline for Network Anomaly Detection, leveraging the power of Random Forests to identify malicious activities in network traffic. The system is trained on the refined NSL-KDD dataset and can perform both binary and multi-class classification of network intrusions. The goal is to develop a model that not only flags anomalous behavior but also categorizes specific attack types, offering actionable insights for cybersecurity operations.',
      image: 'https://raw.githubusercontent.com/wizardoftrap/portfolio/refs/heads/master/src/assets/mhp.webp',
      technologies: ['Python', 'Cyber Security','Machine Learning'],
      github: 'https://github.com/wizardoftrap/Network-Anomaly-Detection',
      category: 'data'
    },
    {
      id: 4,
      title: 'Mental Health Prediction System',
      description: 'The Mental Health Prediction System utilizes a Flask API to deploy the machine learning model, while a Spring Boot API handles user interactions, stores data, and sends personalized mental health predictions via email.',
      image: 'https://raw.githubusercontent.com/wizardoftrap/portfolio/refs/heads/master/src/assets/mhp.webp',
      technologies: ['java', 'Python', 'Spring Boot', 'MySQL', 'Flask', 'ML'],
      github: 'https://github.com/wizardoftrap/mental-health-predicter',
      category: 'data'
    },
    {
      id: 5,
      title: 'Portfolio Website',
      description: 'A responsive portfolio built with React and Framer Motion ensures smooth animations, dynamic content, and a mobile-friendly design—perfect for showcasing projects and skills with a modern, professional touch.',
      image: 'https://raw.githubusercontent.com/wizardoftrap/portfolio/refs/heads/master/src/assets/portfolio.png',
      technologies: ['React', 'Framer Motion', 'CSS'],
      github: 'https://github.com/wizardoftrap/portfolio',
      category: 'software'
    },
    {
      id: 6,
      title: 'BlogNest',
      description: 'This is a comprehensive open-source Android application that allows users to create and publish blog posts, with built-in features for user authentication and data storage using Firebase Authentication and Firebase Realtime Database.',
      image: 'https://raw.githubusercontent.com/wizardoftrap/portfolio/refs/heads/master/src/assets/bn.png',
      technologies: ['React', 'Firebase', 'Material UI'],
      github: 'https://github.com/wizardoftrap/BlogNest',
      category: 'software'
    },
    {
      id: 7,
      title: 'Hospital Management System',
      description: 'This project focuses on optimizing healthcare operations by efficiently allocating resources such as doctors, nurses, medical equipment, and scheduling treatment paths for patients. The goal is to improve patient outcomes, minimize waiting times, and optimize the use of hospital resources.',
      image: 'https://raw.githubusercontent.com/wizardoftrap/portfolio/refs/heads/master/src/assets/hms.png',
      technologies: ['Java', 'Spring Boot', 'CSS', 'Thymeleaf', 'MySQL'],
      github: 'https://github.com/wizardoftrap/healthCareSystem',
      category: 'software'
    },
    {
      id: 8,
      title: 'Customer Segmentation',
      description: 'This project implements KMeans clustering for customer segmentation. The dataset used in this project is processed, cleaned, and visualized to provide insights into customer behavior and patterns based on various features like education level, marital status, spending patterns, and more.',
      image: 'https://raw.githubusercontent.com/wizardoftrap/portfolio/refs/heads/master/src/assets/cs.png',
      technologies: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
      github: 'https://github.com/wizardoftrap/Customer-Segmentation',
      category: 'data'
    },
    {
      id: 9,
      title: 'Tuition Classes Management API',
      description: 'This Spring Boot application manages tuition classes, students, and subjects. It supports CRUD operations and searching for students by name, subjects by name, and classes by student or subject. Using a MySQL database and Spring Data JPA, this API provides a robust backend for organizing tuition classes effectively.',
      image: 'https://raw.githubusercontent.com/wizardoftrap/portfolio/refs/heads/master/src/assets/tcm.jpg',
      technologies: ['Java', 'Spring Boot', 'MySQL'],
      github: 'https://github.com/wizardoftrap/Tuition-Management-REST-API',
      category: 'software'
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.category === filter);

  const categories = [
    { value: 'all', label: 'All Projects' },
    { value: 'data', label: 'Data Science' },
    { value: 'software', label: 'Software' }
  ];

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <h2 className={`section-title ${isVisible ? 'fade-in' : ''}`}>
          My Projects
        </h2>

        {/* Filter buttons */}
        <div className={`project-filters ${isVisible ? 'fade-in delay-1' : ''}`}>
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => setFilter(category.value)}
              className={`filter-btn ${filter === category.value ? 'active' : ''}`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id}
              className={`project-card ${isVisible ? `fade-in delay-${index + 2}` : ''}`}
            >
              <div className="project-img">
                <img 
                  src={project.image} 
                  alt={project.title}
                />
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">
                  {project.description}
                </p>
                <div className="project-tech">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="tech-tag"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link"
                      aria-label="View GitHub repository"
                    >
                      <FiGithub size={20} />
                    </a>
                  )}
                  {project.demo && (
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link"
                      aria-label="View live demo"
                    >
                      <FiExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
 
        {/* View more button */}
<div className="view-more-container text-center">
  <a 
    href="https://github.com/wizardoftrap" 
    target="_blank" 
    rel="noopener noreferrer"
    className="btn btn-outline"
  >
    View More on GitHub
  </a>
</div>
      </div>
    </section>
  );
};

export default Projects;