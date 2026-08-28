// src/components/Certifications.jsx
import { FiExternalLink } from 'react-icons/fi';
import SectionHead from './SectionHead';
import { useReveal, revealProps } from '../hooks/useReveal';

// Ordered newest first
const certificationsData = [
  {
    id: 7,
    name: 'Agentic System Design',
    issuer: 'Educative',
    date: '2026',
    credentialId: 'XYQ5KZ59R5',
    credentialURL: 'https://www.educative.io/verify-certificate/XYQ5KZ59R5',
    skills: ['Agentic AI', 'System Design', 'LLMs', 'Multi-Agent Systems']
  },
  {
    id: 8,
    name: 'Generative AI Essentials',
    issuer: 'Educative',
    date: '2026',
    credentialId: '5GZ7PYT5FO',
    credentialURL: 'https://www.educative.io/verify-certificate/5GZ7PYT5FO',
    skills: ['Generative AI', 'LLMs', 'Prompt Engineering', 'RAG']
  },
  {
    id: 9,
    name: 'Transformers for Computer Vision Applications',
    issuer: 'Educative',
    date: '2026',
    credentialId: '8HAEMAWBHT',
    credentialURL: 'https://www.educative.io/verify-certificate/8HAEMAWBHT',
    skills: ['Transformers', 'Computer Vision', 'Deep Learning', 'ViT']
  },
  {
    id: 6,
    name: 'BigQuery for Machine Learning',
    issuer: 'Google',
    date: 'June 2025',
    credentialId: '16366276',
    credentialURL:
      'https://www.cloudskillsboost.google/public_profiles/7d8a52e1-6c16-4f98-b6a9-bb97e04fd900/badges/16366276',
    skills: ['Google Cloud', 'SQL', 'Machine Learning', 'BigQuery']
  },
  {
    id: 4,
    name: 'BigQuery for Data Analysts',
    issuer: 'Google',
    date: 'June 2025',
    credentialId: '16300805',
    credentialURL:
      'https://www.cloudskillsboost.google/public_profiles/7d8a52e1-6c16-4f98-b6a9-bb97e04fd900/badges/16300805',
    skills: ['Google Cloud', 'SQL', 'Data Analytics', 'BigQuery']
  },
  {
    id: 3,
    name: 'BCG Data Science Job Simulation',
    issuer: 'Forage',
    date: 'May 2025',
    credentialId: 'tL3aF8ZexLN75E8hc',
    credentialURL:
      'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/SKZxezskWgmFjRvj9/Tcz8gTtprzAS4xSoK_SKZxezskWgmFjRvj9_tL3aF8ZexLN75E8hc_1748411126765_completion_certificate.pdf',
    skills: ['Python', 'Machine Learning', 'Data Analytics']
  },
  {
    id: 1,
    name: 'Data Structures and Algorithms',
    issuer: 'Udemy',
    date: 'July 2023',
    credentialId: 'UC-4c864d97-c64f-4501-a13e-810a81bc54f5',
    credentialURL: 'https://www.udemy.com/certificate/UC-4c864d97-c64f-4501-a13e-810a81bc54f5/',
    skills: ['Java', 'Data Structures', 'Algorithms']
  },
  {
    id: 2,
    name: 'Android Development',
    issuer: 'Udemy',
    date: 'July 2023',
    credentialId: 'UC-4c864d97-c64f-4501-a13e-810a81bc54f5',
    credentialURL: 'https://www.udemy.com/certificate/UC-4c864d97-c64f-4501-a13e-810a81bc54f5/',
    skills: ['Android', 'Java', 'Firebase']
  },
  {
    id: 5,
    name: 'Object Oriented Programming in Java',
    issuer: 'Udemy',
    date: 'January 2023',
    credentialId: 'UC-861c3c0f-e71d-4ae3-9ceb-728b163ab4ed',
    credentialURL: 'https://www.udemy.com/certificate/UC-861c3c0f-e71d-4ae3-9ceb-728b163ab4ed/',
    skills: ['Java', 'OOP', 'Spring Boot', 'MySQL']
  }
];

const Certifications = () => {
  const [ref, isVisible] = useReveal();

  return (
    <section id="certifications" className="section section--rose" ref={ref}>
      <div className="container">
        <SectionHead
          index="05"
          title="Certifications"
          meta={`${certificationsData.length} total`}
        />

        <div className="cert-grid">
          {certificationsData.map((cert, index) => (
            <article key={cert.id} {...revealProps('cert-card', isVisible, index, 40)}>
              <h3 className="cert-name">{cert.name}</h3>
              <p className="cert-issuer">{cert.issuer}</p>

              <div className="cert-meta">
                <span className="mono">{cert.date}</span>
                <span className="mono">ID {cert.credentialId}</span>
              </div>

              <div className="cert-skills">
                {cert.skills.map((skill) => (
                  <span key={skill} className="tech-tag">
                    {skill}
                  </span>
                ))}
              </div>

              <a
                href={cert.credentialURL}
                target="_blank"
                rel="noopener noreferrer"
                className="cert-verify"
              >
                Verify <FiExternalLink size={12} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
