import "./mobileNav.css";

import { Link, useLocation } from "react-router-dom";

export default function MobileNavbar() {
  const handleLinkClick = (event) => {
    event.preventDefault();
    const target = event.currentTarget;
    window.location.href = target.href;
  };

  const currentPage = useLocation().pathname;
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>

      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
      >
        <div className="offcanvas-header">
          <h2 className="offcanvas-title" id="offcanvasNavbarLabel">
            Pages
          </h2>
          <button
            type="button"
            className="btn-close btn-close-white"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <div className="mobile-nav">
            <ul>
              <li>
                <Link
                  to="/aboutme"
                  onClick={handleLinkClick}
                  className={
                    currentPage === "/aboutme"
                      ? "activeMobileNav"
                      : "restMobileNav"
                  }
                >
                  About Me
                </Link>
              </li>
              <li>
                <Link
                  to="/portfolio"
                  onClick={handleLinkClick}
                  className={
                    currentPage === "/portfolio"
                      ? "activeMobileNav"
                      : "restMobileNav"
                  }
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  onClick={handleLinkClick}
                  className={
                    currentPage === "/contact"
                      ? "activeMobileNav"
                      : "restMobileNav"
                  }
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/resume"
                  onClick={handleLinkClick}
                  className={
                    currentPage === "/resume"
                      ? "activeMobileNav"
                      : "restMobileNav"
                  }
                >
                  Resume
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
