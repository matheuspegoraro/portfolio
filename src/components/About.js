import React from "react";
import SectionHeader from "./SectionHeader";
import "./About.css";

function About() {
  return (
    <section id="about">
      <SectionHeader number="01" title="About" />
      <div className="about-content">
        I am a technology enthusiast with over 8 years of experience building
        robust and scalable solutions. Since 2017, I have worked with a wide
        range of technologies, and over time I found my true focus in
        development using the .NET, ReactJS, and React Native stack.
        <br />
        <br />
        Throughout my career, I have had the opportunity to work on challenging
        projects across both backend and frontend, creating innovative solutions
        that meet business and user needs. With a strong foundation in .NET, I
        develop high-performance backend applications, while my experience with
        ReactJS and React Native enables me to build modern, interactive
        interfaces for both web and mobile platforms.
        <br />
        <br />
        My professional journey has included close collaboration with
        multidisciplinary teams, always with a focus on delivering clean,
        efficient, and maintainable code that meets high quality standards. I am
        constantly seeking new challenges and opportunities to grow, leveraging
        modern technologies to create products that deliver real value to both
        users and businesses.{" "}
      </div>
    </section>
  );
}

export default About;
