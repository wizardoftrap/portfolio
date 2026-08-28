// src/components/Projects.jsx
import { FiGithub, FiExternalLink, FiArrowUpRight } from 'react-icons/fi';
import SectionHead from './SectionHead';
import { useReveal, revealProps } from '../hooks/useReveal';

// `featured` projects get the full row treatment; the rest form a compact index.
const projectsData = [
  {
    id: 0,
    title: 'LFM2.5 Hindi & Indian History Fine-Tuning',
    description:
      'Fine-tuned a 1.2B-parameter LFM2.5 model while training only 3.03% of its parameters through a two-stage LoRA pipeline. Instruction tuning on the 100K-row Sarvam Samvaad Indic dataset built Hindi fluency, then a self-curated 5.4K-row Indian history QA set grounded in NCERT textbooks specialised it.',
    image: '/assets/projects/finetune.png',
    technologies: ['LoRA', 'LLM', 'NLP', 'PyTorch'],
    github: 'https://github.com/wizardoftrap/lfm_2-5-Hin_His',
    category: 'data',
    featured: true
  },
  {
    id: 1,
    title: 'Language Agnostic Classifier',
    description:
      'A cross-lingual sentiment classifier using contrastive learning to align English and Hindi (including code-mixed) representations in a shared embedding space. Built on multilingual BERT and trained only on English IMDB reviews, then evaluated on Hindi and Hinglish with no Hindi-labelled training data.',
    image: '/assets/projects/langauge.jpeg',
    technologies: ['Multilingual NLP', 'BERT', 'Contrastive Learning'],
    github: 'https://github.com/wizardoftrap/language_agnostic_classifier',
    demo: 'https://huggingface.co/wizardoftrap/language_agnostic_classifier',
    category: 'data',
    featured: true
  },
  {
    id: 2,
    title: 'Quiz Maker',
    description:
      'A multi-agent quiz platform built with LangChain, Streamlit and Gemini, using RAG grounded on teacher-uploaded notes to generate, grade and deliver quizzes. Pinecone handles semantic search, with LLM-as-judge grading, automated result sharing and session-based attempt tracking.',
    image: '/assets/projects/quiz.jpg',
    technologies: ['LangChain', 'RAG', 'AI Agents', 'Pinecone'],
    github: 'https://github.com/wizardoftrap/quiz-maker',
    category: 'data',
    featured: true
  },
  {
    id: 3,
    title: 'Referring Video Object Segmentation',
    description:
      'An RVOS system combining a ResNet-50 CNN backbone with BERT to segment objects in video from natural language descriptions. The custom architecture fuses visual and textual features and was trained on DAVIS-2017.',
    image: '/assets/projects/rvos.png',
    technologies: ['Computer Vision', 'ResNet-50', 'BERT'],
    github: 'https://github.com/wizardoftrap/Referring-Video-Object-Segmentation',
    category: 'data',
    featured: true
  },
  {
    id: 4,
    title: 'Network Anomaly Detection',
    description:
      'A machine learning pipeline using Random Forests to identify malicious network traffic, trained on the refined NSL-KDD dataset for both binary and multi-class intrusion classification.',
    image: '/assets/projects/network.png',
    technologies: ['Machine Learning', 'Cyber Security'],
    github: 'https://github.com/wizardoftrap/Network-Anomaly-Detection',
    category: 'data'
  },
  {
    id: 5,
    title: 'Mental Health Prediction System',
    description:
      'A Flask API serving the ML model, with a Spring Boot service handling user interactions, storage and personalised prediction emails.',
    image: '/assets/projects/mhp.webp',
    technologies: ['Flask', 'Spring Boot', 'MySQL'],
    github: 'https://github.com/wizardoftrap/mental-health-predicter',
    category: 'data'
  },
  {
    id: 6,
    title: 'Customer Segmentation',
    description:
      'KMeans clustering for customer segmentation, with cleaning and visualisation surfacing behavioural patterns across education, marital status and spend.',
    image: '/assets/projects/cs.png',
    technologies: ['Pandas', 'Scikit-learn'],
    github: 'https://github.com/wizardoftrap/Customer-Segmentation',
    category: 'data'
  },
  {
    id: 7,
    title: 'Hospital Management System',
    description:
      'Allocates doctors, nurses and equipment and schedules patient treatment paths to cut waiting times and use hospital resources efficiently.',
    image: '/assets/projects/hms.png',
    technologies: ['Java', 'Spring Boot', 'Thymeleaf'],
    github: 'https://github.com/wizardoftrap/healthCareSystem',
    category: 'software'
  },
  {
    id: 8,
    title: 'BlogNest',
    description:
      'An open-source Android app for writing and publishing blog posts, with Firebase Authentication and Realtime Database behind it.',
    image: '/assets/projects/bn.png',
    technologies: ['Android', 'Firebase'],
    github: 'https://github.com/wizardoftrap/BlogNest',
    category: 'software'
  },
  {
    id: 9,
    title: 'Tuition Classes Management API',
    description:
      'A Spring Boot REST API managing classes, students and subjects with full CRUD and search, backed by MySQL and Spring Data JPA.',
    image: '/assets/projects/tcm.jpg',
    technologies: ['Java', 'Spring Boot', 'MySQL'],
    github: 'https://github.com/wizardoftrap/Tuition-Management-REST-API',
    category: 'software'
  }
];

const Projects = () => {
  const [ref, isVisible] = useReveal();

  const featured = projectsData.filter((p) => p.featured);
  const others = projectsData.filter((p) => !p.featured);

  return (
    <section id="projects" className="section section--peach" ref={ref}>
      <div className="container">
        <SectionHead index="03" title="Work" />

        <div className="group-label">
          <span>Featured</span>
        </div>

        {featured.map((project, index) => (
          <article
            key={project.id}
            className={`project-featured reveal${isVisible ? ' is-visible' : ''}`}
            style={{ '--reveal-delay': `${index * 60}ms` }}
          >
            <div className="project-thumb">
              <img src={project.image} alt="" loading="lazy" width="340" height="212" />
            </div>

            <div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>

              <div className="tag-row">
                {project.technologies.map((tech) => (
                  <span key={tech} className="tech-tag">
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
                  >
                    <FiGithub size={13} /> Source
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <FiExternalLink size={13} /> Model
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}

        <div className="group-label">
          <span>Others</span>
        </div>

        <div className="project-grid">
          {others.map((project, index) => (
            <a
              key={project.id}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`project-mini reveal${isVisible ? ' is-visible' : ''}`}
              style={{ '--reveal-delay': `${index * 50}ms` }}
            >
              <div className="project-mini-thumb">
                <img src={project.image} alt="" loading="lazy" width="260" height="146" />
              </div>

              <div className="project-mini-body">
                <h3 className="project-mini-title">
                  {project.title}
                  <FiArrowUpRight size={15} aria-hidden="true" />
                </h3>
                <p>{project.description}</p>

                <div className="tag-row">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="projects-more">
          <span className="mono">More on</span>
          <a
            href="https://github.com/wizardoftrap"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            <FiGithub size={13} /> GitHub
          </a>
          <a
            href="https://huggingface.co/wizardoftrap"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            <span aria-hidden="true">🤗</span> Hugging Face
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
