// src/components/Experience.jsx
import SectionHead from './SectionHead';
import { useReveal, revealProps } from '../hooks/useReveal';

const experienceData = [
  {
    company: 'DIOnce',
    position: 'Data Scientist',
    period: 'Jul 2025 - Present',
    location: 'Bengaluru',
    description: [
      'Built a multi-agent market research platform that orchestrates search, scraping, document processing, deduplication, sentiment analysis and human review into a single pipeline, delivering comprehensive, structured market insights and reports.',
      'Developed an AI voice call agent using the LiveKit framework that handles interruptions, no-answers, rescheduling and warm transfers to human agents mid-call, supports multiple Indian languages, and runs at sub-second latency with post-call processing and knowledge base grounding.',
      'Built a multi-tenant enterprise document intelligence platform on Django REST Framework, PostgreSQL (pgvector) and an ArcadeDB knowledge graph, turning PDFs and DOCX into structured, versioned data through a reviewable six-stage pipeline with draft-based updates and rollback, ingesting documents into a cross-document ontology with fact-level provenance, detecting policy conflicts with LLM-judged, actionable resolutions, establishing cross references across domains from multiple signals, and serving answers through a five-mode fallback search copilot with RAGAS-style evaluation, API keys and role-based data governance.',
      'Created an agentic Journey based workflow layer on top of document intelligence with goal-driven mini-agents modeled as graph nodes executing document-grounded, gated and audit trailed process automation, with a feedback loop designed to learn from audit trails.'
    ],
    technologies: ['Agentic AI', 'GenAI', 'LLMs', 'Python', 'Django', 'PostgreSQL', 'LangGraph', 'LiveKit', 'Knowledge Graphs', 'RAG']
  }
];

const Experience = () => {
  const [ref, isVisible] = useReveal();

  return (
    <section id="experience" className="section section--mint" ref={ref}>
      <div className="container">
        <SectionHead index="01" title="Experience" />

        {experienceData.map((exp, index) => (
          <article key={exp.company} {...revealProps('entry', isVisible, index)}>
            <div className="entry-aside">
              <span className="mono">{exp.period}</span>
              <span className="mono">{exp.location}</span>
            </div>

            <div>
              <h3 className="entry-title">{exp.position}</h3>
              <p className="entry-org">{exp.company}</p>

              <ul className="entry-list">
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>

              <div className="tag-row">
                {exp.technologies.map((tech) => (
                  <span key={tech} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Experience;
