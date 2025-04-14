import { motion } from 'framer-motion';

function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2>Projects</h2>
      <ul>
        <li>Hospital Management System - Java + Spring Boot</li>
        <li>IoT Protocol Analysis using nRF52840</li>
      </ul>
    </motion.div>
  );
}

export default Projects;
