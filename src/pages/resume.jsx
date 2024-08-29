import "../styles/resume.css";

export default function Resume() {
  return (
    <div className="resume-container">
      <h1>Resume</h1>
      <h2 className="mobile">
        Download my resume{" "}
        <a href="../assets/resume.pdf" download="resume.pdf" id="download-pdf">
          here.
        </a>
      </h2>
      <h2>• Front-end Proficiencies</h2>
      <div>
        <ul>
          <li> HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>React</li>
          <li>Bootstrap</li>
        </ul>
      </div>

      <h2>• Back-end Proficiencies</h2>
      <div>
        <ul>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>Api calls</li>
          <li>SQL</li>
        </ul>
        <h2>• Other Skills</h2>
        <ul>
          <li>Git</li>
          <li>Beginner Lua Writer</li>
        </ul>
      </div>
    </div>
  );
}
