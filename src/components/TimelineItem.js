import React from 'react';

function TimelineItem({ job, index }) {
  return (
    <div className="timeline-item" style={{ animationDelay: `${index * 0.05}s` }}>
      <div className="job-header">
        <div>
          <h3 className="job-title">{job.title}</h3>
          <p className="company">{job.company}</p>
        </div>
        <span className="date">{job.date}</span>
      </div>
      <ul className="job-description">
        {job.descriptions.map((desc, index) => (
          <li key={index}>{desc}</li>
        ))}
      </ul>
    </div>
  );
}

export default TimelineItem;
