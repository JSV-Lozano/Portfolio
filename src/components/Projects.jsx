import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Projects.css";

function Projects() {
  const Projects = [
    {
      name: "Project 1",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      name: "Project 2",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      name: "Project 3",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  ];
  return (
    <div id="Project" className="Projects-Containers">
      <div className="Container-Projects">
        <h2>Projects</h2>
        {Projects.map((project) => (
          <div key={project.name} className="Container-Project">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <img src={project.img} alt="" />
            <div className="Project-Links">
              <a href="http://www.github.com/JSV-Lozano" target="_blank">
                <i className="devicon-github-original-wordmark"></i>
              </a>
              <a
                href="https://www.youtube.com/watch?v=Z4tsxrheEJw&ab_channel=%5BInsertenombre%5D"
                target="_blank"
              >
                <i className="devicon-google-plain"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export { Projects };
