import { FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";
import "./styles.scss";

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul className="social">
        <li>
          <a
            href="https://github.com/agatamostowik"
            target="_blank"
            rel="noreferrer"
          >
            <FiGithub className="icon" />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/agata-mostowik/"
            target="_blank"
            rel="noreferrer"
          >
            <FiLinkedin className="icon" />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/agata.mostowik/"
          target="_blank"
          rel="noreferrer">
            <FiInstagram className="icon" />
          </a>
        </li>
      </ul>
    </div>
  );
};
