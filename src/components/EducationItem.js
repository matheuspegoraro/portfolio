import React from 'react';

function EducationItem({ education }) {
  return (
    <div className="education-item">
      <h3 className="education-title">{education.title}</h3>
      <p className="institution">{education.institution}</p>
      <p className="education-date">{education.date}</p>
    </div>
  );
}

export default EducationItem;
