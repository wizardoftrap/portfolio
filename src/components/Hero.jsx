// src/components/Hero.jsx
import { useEffect, useState } from 'react';
import SocialLinks from './SocialLinks';
import { RESUME_URL } from '../data/links';

const ROLES = ['Agentic AI', 'Generative AI', 'LLM Systems', 'Backend'];

const TYPE_MS = 90;
const DELETE_MS = 45;
const HOLD_MS = 1400;

const Hero = () => {
  const [text, setText] = useState('');

  // Types and deletes each role in turn. One timer, always cleaned up.
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setText(ROLES[0]);
      return;
    }

    let roleIndex = 0;
    let charIndex = 0;
    let deleting = false;
    let timer;

    const tick = () => {
      const role = ROLES[roleIndex];
      charIndex += deleting ? -1 : 1;
      setText(role.slice(0, charIndex));

      let delay = deleting ? DELETE_MS : TYPE_MS;

      if (!deleting && charIndex === role.length) {
        deleting = true;
        delay = HOLD_MS;
      } else if (deleting && charIndex === 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % ROLES.length;
        delay = 400;
      }

      timer = setTimeout(tick, delay);
    };

    timer = setTimeout(tick, 700);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="hero" className="hero section--lilac">
      <div className="container">
        <div className="hero-eyebrow">
          <img
            src="/assets/profile.jpg"
            alt=""
            className="hero-avatar"
            width="44"
            height="44"
          />
          <span className="mono">Bengaluru, India · Available for work</span>
        </div>

        <h1 className="hero-name">
          Shiv Prakash
          <br />
          Verma
        </h1>

        <p className="hero-role">
          Data Scientist · <span className="typed">{text}</span>
          <span className="cursor" aria-hidden="true">_</span>
        </p>

        <p className="hero-description">
          B.Tech. in Electrical Engineering from IIT Ropar, with a deep interest
          in Data Science, GenAI, and Backend Development. Today I build agentic
          AI in production: multi-agent research pipelines, sub-second voice
          agents, and document intelligence grounded in knowledge graphs. What
          drives me is solving real problems and building things that make an
          impact.
        </p>

        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">
            View Work
          </a>
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            Download CV
          </a>
        </div>

        <SocialLinks />
      </div>
    </section>
  );
};

export default Hero;
