import React from 'react';
import SectionHeader from './SectionHeader';
import SkillCategory from './SkillCategory';
import { SKILLS_DATA } from '../data/skillsData';
import './Skills.css';

function Skills() {
  return (
    <section id="skills">
      <SectionHeader number="03" title="Skills" />
      
      <div className="skills-section">
        {SKILLS_DATA.map((category, index) => (
          <SkillCategory key={index} category={category} />
        ))}
      </div>
    </section>
  );
}

export default Skills;
