import "./projects.css";
import githubLogo from "../../assets/github-mark/github-mark.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShare } from "@fortawesome/free-solid-svg-icons";

export default function Project({
  projectName,
  repoLink,
  backgroundImage,
  technologies,
  shareLink,
}) {
  return (
    <div
      className="project"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <a
        className="appIcon"
        href={shareLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon
          className="fontIcon"
          icon={faShare}
          style={{ color: "#0b2545", fontSize: "24px" }}
        />
      </a>
      <div className="projectInfo">
        <div className="githubInfo">
          <h3>{projectName}</h3>
          <a href={repoLink} target="_blank">
            <img src={githubLogo} alt="" />
          </a>
        </div>

        <p>{technologies}</p>
      </div>
    </div>
  );
}
