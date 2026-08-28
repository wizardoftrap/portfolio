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
      'Built an enterprise document intelligence platform that performs structured document extraction and reconstruction with version control, ingests documents into a knowledge graph, detects conflicts among documents with LLM-judged resolution and establishes cross references between documents across domains based on multiple signals.',
      'Created an agentic Journey based workflow layer on top of document intelligence with goal-driven mini-agents modeled as graph nodes executing document-grounded, gated and audit trailed process automation, with a feedback loop designed to learn from audit trails.'
    ],
    technologies: ['Agentic AI', 'GenAI', 'LLMs', 'Python', 'LangGraph', 'LiveKit', 'Knowledge Graphs', 'RAG']
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
