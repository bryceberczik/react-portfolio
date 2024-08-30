import Project from "../components/projects/project";
import '../styles/portfolio.css';

import employeeTracker from '../assets/project-imgs/employee-tracker.jpg';
import loginMockup from '../assets/project-imgs/login-mockup.jpg';
import projectC from '../assets/project-imgs/project-c.jpg';
import vehicleBuilder from '../assets/project-imgs/vehicle-builder.jpg';
import wishboard from '../assets/project-imgs/wishboard.jpg';
import readmeGen from '../assets/project-imgs/readme-generator.jpg';

export default function Portfolio() {
  return (
    <div>
      <h1 className="portfolio-header">Portfolio</h1>

      <div className="portfolio-container">
        <Project
          projectName="Project C"
          backgroundImage={projectC}
          technologies="JavaScript"
          repoLink='https://github.com/bryceberczik/project-c'
          shareLink='https://bryceberczik.github.io/project-c/'
        />

        <Project
          projectName="Login Mockup"
          backgroundImage={loginMockup}
          technologies="JavaScript"
          repoLink='https://github.com/bryceberczik/login-mockup'
          shareLink='https://bryceberczik.github.io/login-mockup/'
        />

        <Project
          projectName="Wishboard"
          backgroundImage={wishboard}
          technologies="JavaScript"
          repoLink='https://github.com/bryceberczik/wishlist-board'
          shareLink='https://bryceberczik.github.io/wishlist-board/'
        />

        <Project
          projectName="Vehicle Builder"
          backgroundImage={vehicleBuilder}
          technologies="TypeScript"
          repoLink='https://github.com/bryceberczik/vehicle-builder'
          shareLink='https://github.com/bryceberczik/vehicle-builder'
        />
        <Project
          projectName="Employee Tracker"
          backgroundImage={employeeTracker}
          technologies="TypeScript, SQL"
          repoLink='https://github.com/bryceberczik/employee-tracker'
          shareLink='https://github.com/bryceberczik/employee-tracker'
        />
        <Project
          projectName="README Generator"
          backgroundImage={readmeGen}
          technologies="JavaScript"
          repoLink='https://github.com/bryceberczik/readme-generator'
          shareLink='https://github.com/bryceberczik/readme-generator'
        />
      </div>
    </div>
  );
}
