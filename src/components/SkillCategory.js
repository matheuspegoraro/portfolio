import React from 'react';

function SkillCategory({ category }) {
  return (
    <div className="skill-category">
      <h3 className="category-title">
        <i className={category.icon}></i>
        {category.name}
      </h3>
      <div className="skills-list">
        {category.skills.map((skill, index) => (
          <div key={index} className="skill">{skill}</div>
        ))}
      </div>
    </div>
  );
}

export default SkillCategory;
