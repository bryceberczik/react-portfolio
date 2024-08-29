import "./projects.css";
import githubLogo from '../../assets/github-mark/github-mark.png';

export default function Project({
  projectName,
  repoLink,
  backgroundImage,
  technologies
}) {
  return (
      <div
      className="project"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
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
