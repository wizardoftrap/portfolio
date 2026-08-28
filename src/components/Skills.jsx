// src/components/Skills.jsx
import { FiCpu, FiServer, FiCode, FiTool, FiCompass } from 'react-icons/fi';
import SectionHead from './SectionHead';
import { useReveal } from '../hooks/useReveal';

// Every group carries its own hue so the section reads as five blocks,
// not one wall of chips.
const groups = [
  {
    id: 'data',
    name: 'AI & Data',
    ink: 'var(--lilac-ink)',
    icon: <FiCpu size={16} />,
    skills: [
      'LLMs', 'Generative AI', 'Agentic AI', 'LoRA Fine-Tuning', 'RAG', 'LangChain',
      'LangGraph', 'Transformers', 'Hugging Face', 'Unsloth', 'Autogen', 'PyTorch',
      'TensorFlow', 'Machine Learning', 'Deep Learning', 'Pandas', 'NumPy', 'n8n'
    ]
  },
  {
    id: 'software',
    name: 'Backend & Software',
    ink: 'var(--mint-ink)',
    icon: <FiServer size={16} />,
    skills: [
      'FastAPI', 'Flask', 'Spring Boot', 'React', 'REST APIs', 'Streamlit', 'LiveKit',
      'Django', 'PostgreSQL', 'MySQL', 'MongoDB', 'Neo4j', 'ArcadeDB', 'Pinecone',
      'Firebase'
    ]
  },
  {
    id: 'languages',
    name: 'Languages',
    ink: 'var(--peach-ink)',
    icon: <FiCode size={16} />,
    skills: ['Python', 'Java', 'C++', 'SQL', 'MATLAB']
  },
  {
    id: 'tools',
    name: 'Platforms & Tools',
    ink: 'var(--sky-ink)',
    icon: <FiTool size={16} />,
    skills: [
      'Google Cloud', 'Azure', 'BigQuery', 'Docker', 'Git', 'GitHub',
      'Weights & Biases', 'MLflow', 'Jupyter', 'Linux', 'Postman', 'Android Studio'
    ]
  },
  {
    id: 'other',
    name: 'Foundations',
    ink: 'var(--sand-ink)',
    icon: <FiCompass size={16} />,
    skills: [
      'Data Structures & Algorithms', 'OOP', 'DBMS', 'Probability', 'Statistics',
      'Stochastic Processes', 'Problem Solving', 'Performance Optimization'
    ]
  }
];

const Skills = () => {
  const [ref, isVisible] = useReveal();

  return (
    <section id="skills" className="section section--sky" ref={ref}>
      <div className="container">
        <SectionHead index="02" title="Skills" />

        <div className="skills-grid">
          {groups.map((group, index) => (
            <div
              key={group.id}
              className={`skill-group reveal${isVisible ? ' is-visible' : ''}`}
              style={{ '--group-ink': group.ink, '--reveal-delay': `${index * 70}ms` }}
            >
              <div className="skill-group-head">
                <h3 className="skill-group-name">
                  {group.icon}
                  {group.name}
                </h3>
              </div>

              <div className="skills-field">
                {group.skills.map((skill) => (
                  <span key={skill} className="skill-chip">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
