import "./navbar.css";
import { Link, useLocation } from 'react-router-dom';

function navBar() {

  const currentPage = useLocation().pathname;
  return (
    <div className="navbar">
      <ul>
      <li>
          <Link to="/aboutme" className={currentPage === '/aboutme' ? 'activeNav' : 'restNav'}>About Me</Link>
        </li>
        <li>
          <Link to="/portfolio" className={currentPage === '/portfolio' ? 'activeNav' : 'restNav'}>Portfolio</Link>
        </li>
        <li>
          <Link to="/contact" className={currentPage === '/contact' ? 'activeNav' : 'restNav'}>Contact</Link>
        </li>
        <li>
          <Link to="/resume" className={currentPage === '/resume' ? 'activeNav' : 'restNav'}>Resume</Link>
        </li>
      </ul>
    </div>
  );
}

export default navBar;
