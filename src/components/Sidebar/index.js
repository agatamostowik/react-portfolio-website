import { FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";
import "./styles.scss";

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul className="sidebar__social">
        <li className="sidebar__social-item">
          <a
            className="social-item-anchor"
            href="https://github.com/agatamostowik"
            target="_blank"
            rel="noreferrer"
          >
            <FiGithub />
          </a>
        </li>
        <li className="sidebar__social-item">
          <a
            className="social-item-anchor"
            href="https://www.linkedin.com/in/agata-mostowik/"
            target="_blank"
            rel="noreferrer"
          >
            <FiLinkedin />
          </a>
        </li>
        <li className="sidebar__social-item">
          <a
            className="social-item-anchor"
            href="https://www.instagram.com/agata.mostowik/"
            target="_blank"
            rel="noreferrer"
          >
            <FiInstagram />
          </a>
        </li>
      </ul>
    </div>
  );
};
