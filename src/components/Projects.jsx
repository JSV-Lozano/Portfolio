import React from "react";
import YardSales from "../assets/img/YardSale.jpg";
import ApiGit from "../assets/img/ApiGit.jpg";
import PokeDex from "../assets/img/poke.jpg";
import SinglePage from "../assets/img/SinglePage.jpg"
import "../Styles/Projects.css";

function Projects() {
  const Projects = [
    {
      name: "YardSale",
      img: YardSales,
      GitHub: "https://github.com/JSV-Lozano/Curso-Practico.Js",
    },
    {
      name: "Buscar usuarios de GitHub",
      img: ApiGit,
      GitHub: "https://github.com/JSV-Lozano/Search-Users-GitHub",
      website: "https://search-users-git-hub-jhoan1153.vercel.app/",
    },
    {
      name: "PokeDex",
      img: PokeDex,
      GitHub: "https://github.com/JSV-Lozano/PokeApi-con-React",
    },
    {
      name: "IDEA",
      img: SinglePage,
      GitHub: "https://github.com/JSV-Lozano/Dise-o-web-Figma",
    },
  ];
  return (
    <div id="Project" className="Projects-Containers">
      <h2>Projects</h2>
      <div className="Container-Projects">
        {Projects.map((project) => (
          <div
            key={project.name}
            className="Container-Project"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
          >
            <h3>{project.name}</h3>
            <div className="Container-Porjext_img">
              <img src={project.img} alt={project.name} />
            </div>
            <div className="Project-Links">
              {project.GitHub ? (
                <a href={project.GitHub} target="_blank">
                  <i className="devicon-github-original-wordmark"></i>
                </a>
              ) : null}
              {project.website ? (
                <a href={project.website} target="_blank">
                  <i className="devicon-google-plain"></i>
                </a>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export { Projects };
