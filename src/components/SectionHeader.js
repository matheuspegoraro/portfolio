import React from 'react';
import './SectionHeader.css';

function SectionHeader({ number, title }) {
  return (
    <div className="section-header">
      <span className="section-number">{number}</span>
      <h2 className="section-title">{title}</h2>
      <div className="section-line"></div>
    </div>
  );
}

export default SectionHeader;
