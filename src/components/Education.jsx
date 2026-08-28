// src/components/Education.jsx
import SectionHead from './SectionHead';
import { useReveal, revealProps } from '../hooks/useReveal';

const educationData = [
  {
    degree: 'B.Tech. in Electrical Engineering',
    institution: 'IIT Ropar',
    location: 'Rupnagar, Punjab',
    period: '2021 - 2025',
    result: 'CGPA 7.34 / 10',
    achievements: ['Captain, Hockey, IIT Ropar', 'Deputy Secretary, ODAC, IIT Ropar'],
    courses: [
      'Data Structures',
      'Foundation of Data Science',
      'Deep Learning in Computer Vision',
      'Internet of Things',
      'Probability and Stochastic Processes',
      'Control Systems',
      'Digital Circuits',
      'Analog Circuits'
    ]
  },
  {
    degree: 'Class 12th',
    institution: 'Raghukul Vidyapeeth',
    location: 'Gonda, Uttar Pradesh',
    period: '2019 - 2021',
    result: '80%',
    achievements: [],
    courses: ['Physics', 'Chemistry', 'Mathematics']
  },
  {
    degree: 'Class 10th',
    institution: 'Lucknow Public School',
    location: 'Lucknow, Uttar Pradesh',
    period: '2017 - 2019',
    result: '96.16%',
    achievements: [],
    courses: ['Science', 'Mathematics', 'Information Technology']
  }
];

const Education = () => {
  const [ref, isVisible] = useReveal();

  return (
    <section id="education" className="section section--sand" ref={ref}>
      <div className="container">
        <SectionHead index="04" title="Education" />

        <div className="edu-grid">
          {educationData.map((edu, index) => (
            <article
              key={edu.degree}
              {...revealProps('edu-card', isVisible, index, 70)}
            >
              <span className="edu-result">{edu.result}</span>

              <h3 className="entry-title">{edu.degree}</h3>
              <p className="entry-org">{edu.institution}</p>

              <div className="cert-meta">
                <span className="mono">{edu.period}</span>
                <span className="mono">{edu.location}</span>
              </div>

              {edu.achievements.length > 0 && (
                <ul className="entry-list">
                  {edu.achievements.map((achievement) => (
                    <li key={achievement}>{achievement}</li>
                  ))}
                </ul>
              )}

              <p className="entry-subhead">Key courses</p>
              <div className="tag-row">
                {edu.courses.map((course) => (
                  <span key={course} className="tech-tag">
                    {course}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
