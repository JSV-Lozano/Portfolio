import React from "react";
import "../Styles/Skills.css";

function Skill() {
  const Skills = [
    {
      name: "HTML",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "CSS",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      name: "JavaScript",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "React",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Git",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
  ];
  return (
    <div id="Skills" className="Skills-Container">
      <div className="Containers-Info-Skills">
        <h2>Skills</h2>
        <div className="Container-Skills">
          {Skills.map((skill) => (
            <div
              key={skill.name}
              className="Container-Skill"
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
            >
              <img src={skill.img} alt={skill.name} className="Skill-img" />
              <h3>{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export { Skill };
