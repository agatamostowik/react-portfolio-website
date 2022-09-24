import "./styles.scss";
import { FiGithub } from "react-icons/fi";

const projects = [
  {
    projectName: "Nested TODOlist",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec interdum porta pharetra. Sed aliquet et dui nec vestibulum. Nam elementum eu urna ullamcorper pellentesque. Aliquam viverra ex ut mauris ultricies, vel imperdiet purus fermentum.",
    technology: ["React", "Redux"],
    projectLink: "",
    gitHubLink: "",
  },
  {
    projectName: "Single Select",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec interdum porta pharetra. Sed aliquet et dui nec vestibulum. Nam elementum eu urna ullamcorper pellentesque. Aliquam viverra ex ut mauris ultricies, vel imperdiet purus fermentum.",
    technology: ["React", "Redux"],
    projectLink: "",
    gitHubLink: "",
  },
];

const Project = (props) => {
  return (
    <li className="projects__container">
      <div className="projects__image-box"></div>
      <div className="projects__text-box">
        <h3 className="projects__name">Project name</h3>

        <div className="projects__description">
          <p className="p">{props.description}</p>
        </div>
        <ul className="projects__tech-list">
          {projects.map((project) => {
            return <li>{props.technology}</li>;
          })}
        </ul>
        <div className="projects__links">
          <div>
            <a
              className="social-item-anchor"
              href="https://github.com/agatamostowik"
              target="_blank"
              rel="noreferrer"
            >
              <FiGithub />
            </a>
          </div>
        </div>
      </div>
    </li>
  );
};

export const Projects = () => {
  return (
    <div className="projects__wrapper">
      <div className="projects__site-title">
        <h2 className="h2">My work</h2>
      </div>

      <ul className="projects__list">
        {projects.map((project) => {
          return (
            <Project
              description={project.description}
              technology={project.technology}
            />
          );
        })}
      </ul>

      {/* <div className="image-wrapper">
        <img src={hand} alt="Hand" /> */}
    </div>
  );
};
