import { Link } from "react-scroll";
import "./navbar.scss";

function Navbar() {
  const resumeLink = (
    <a
      className="resume-button"
      href="/resume.pdf"
      target="_blank"
      rel="noopener noreferrer"
    >
      CV
    </a>
  );

  return (
    <div className="header">
      <div className="navlogo">
        <Link
          activeClass="active"
          to="intro-section"
          spy={true}
          smooth={true}
          offset={-200}
          duration={500}
        >
          <h1>LW</h1>
        </Link>
      </div>
      <div className="nav-right">
        <nav>
          <ul>
            <li>
              <Link
                activeClass="active"
                to="about-section"
                spy={true}
                smooth={true}
                offset={-110}
                duration={500}
              >
                About
              </Link>
            </li>

            <li>
              <Link
                activeClass="active"
                to="portfolio-section"
                spy={true}
                smooth={true}
                offset={10}
                duration={500}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="contact-section"
                spy={true}
                smooth={true}
                offset={20}
                duration={500}
              >
                Contact
              </Link>
            </li>
            <li className="resumeLink">{resumeLink}</li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
export default Navbar;
