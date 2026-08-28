// src/components/Experience.jsx
import { useState, useEffect } from 'react';
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi';

const Experience = () => {
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
      company: 'DIOnce',
      position:'Data Scientist',
      period: 'July 2025 - Present',
      location: 'Bengaluru',
      description: [
        'Built a multi-agent market research platform that orchestrates search, scraping, document processing, deduplication, sentiment analysis and human review into a single pipeline, delivering comprehensive, structured market insights and reports.',
        'Developed an AI voice call agent using the LiveKit framework that handles interruptions, no-answers, rescheduling and warm transfers to human agents mid-call, supports multiple Indian languages, and runs at sub-second latency with post-call processing and knowledge base grounding.',
        'Built an enterprise document intelligence platform that performs structured document extraction and reconstruction with version control, ingests documents into a knowledge graph, detects conflicts among documents with LLM-judged resolution and establishes cross references between documents across domains based on multiple signals.',
        'Created an agentic Journey based workflow layer on top of document intelligence with goal-driven mini-agents modeled as graph nodes executing document-grounded, gated and audit trailed process automation, with a feedback loop designed to learn from audit trails.'
      ],
      technologies: ['Agentic AI', 'GenAI', 'LLMs', 'Python', 'LangGraph', 'LiveKit', 'Knowledge Graphs', 'RAG']
    }
  ];

  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className={`section-title ${isVisible ? 'fade-in' : ''}`}>
          Work Experience
        </h2>

        <div className="timeline">
          {experienceData.map((exp, index) => (
            <div 
              key={index}
              className={`timeline-item ${isVisible ? 'fade-in' : ''}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="timeline-marker">
                <img 
                  src={`/assets/${exp.company.toLowerCase()}.png`}
                  alt={exp.company}
                  className="timeline-logo"
                />
              </div>
              
              <div className="timeline-content">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;