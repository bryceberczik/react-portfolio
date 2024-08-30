import githubLogo from "../../assets/github-mark/github-mark.png";
import linkedInLogo from "../../assets/LinkedIn-Logos/LI-In-Bug.png";

import "./footer.css";

export default function Footer() {
  return (
    <div>
      <footer>
        <a
          href="https://github.com/bryceberczik"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={githubLogo} alt="github logo" />
        </a>
        <a
          href="https://www.linkedin.com/in/bryce-berczik-9b4874323/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedInLogo} alt="linkedin logo" />
        </a>
      </footer>
    </div>
  );
}
