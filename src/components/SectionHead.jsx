// src/components/SectionHead.jsx
const SectionHead = ({ index, title, meta }) => (
  <div className="section-head">
    <span className="section-index">
      <em>{index}</em> /
    </span>
    <h2 className="section-title">{title}</h2>
    <span className="section-rule" aria-hidden="true" />
    {meta && <span className="section-index">{meta}</span>}
  </div>
);

export default SectionHead;
