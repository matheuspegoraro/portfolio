import React from 'react';
import SectionHeader from './SectionHeader';
import EducationItem from './EducationItem';
import { EDUCATION_DATA } from '../data/educationData';
import './Education.css';

function Education() {
  return (
    <section id="education">
      <SectionHeader number="04" title="Education" />
      
      <div className="education-grid">
        {EDUCATION_DATA.map((education, index) => (
          <EducationItem key={index} education={education} />
        ))}
      </div>
    </section>
  );
}

export default Education;
