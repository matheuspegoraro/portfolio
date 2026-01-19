import React from 'react';
import SectionHeader from './SectionHeader';
import TimelineItem from './TimelineItem';
import { EXPERIENCE_DATA } from '../data/experienceData';
import './Experience.css';

function Experience() {
  return (
    <section id="experience">
      <SectionHeader number="02" title="Experience" />
      
      <div className="timeline">
        {EXPERIENCE_DATA.map((job, index) => (
          <TimelineItem key={index} job={job} index={index} />
        ))}
      </div>
    </section>
  );
}

export default Experience;
