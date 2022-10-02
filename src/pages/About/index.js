import girl from "../../assets/person-working-from-home (1).png";
import "./styles.scss";
import { FaReact, FaJs, FaNodeJs, FaSass, FaHtml5 } from "react-icons/fa";

export const About = () => {
  const iconSize = 50;

  const techstack = [
    {
      technology: "Html5",
      icon: <FaHtml5 size={iconSize} />,
    },
    {
      technology: "Sass",
      icon: <FaSass size={iconSize} />,
    },
    {
      technology: "JavaScript",
      icon: <FaJs size={iconSize} />,
    },
    {
      technology: "Node.js",
      icon: <FaNodeJs size={iconSize} />,
    },
    {
      technology: "React",
      icon: <FaReact size={iconSize} />,
    },
  ];
  return (
    <div className="about__page">
      <div className="about__section">
        <div className="about__image-wrapper"></div>
        <div>
          <div className="about__title">
            <h1>Hi, I'm Agata</h1>
          </div>
          <div className="about__paragraph p">
            <p>
              Lorem ipsum dolor sit amet. Aut corporis aliquam et repudiandae
              ipsa et sint enim. Est nesciunt dolor a totam corporis sed autem
              totam sed amet porro! Et eveniet quos ad delectus ipsam in vitae
              vero et tenetur debitis. Quo ipsam et tempora galisum sit dolorem
              adipisci et dolor sint qui minima omnis. Est veritatis ipsum ut
              corporis blanditiis sit tempora soluta aut ducimus dicta ad sunt
              odit! Et ipsa odit cum minus quos ut dignissimos sunt! Qui dolor
              maiores aut unde eligendi sit blanditiis beatae ut illo labore ut
              pariatur minus At sint ratione et internos aliquid.
            </p>
          </div>
        </div>
      </div>
      <div className="about__techstack">
        <h4 className="about__techstack-title">Tech Stack</h4>
        <ul className="about__techstack-list">
          {techstack.map((tech) => {
            return (
              <li className="about__techstack-item">
                <div className="a">{tech.icon}</div>
                <div className="b">{tech.technology}</div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
