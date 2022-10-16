import { Link } from "react-scroll";
import LinkButton from "../../LinkButton/LinkButton";
import "../navbar.scss";

const NavDesktop = () => {
  return (
    <nav>
      <ul className="nav-list-container">
        <li className="nav-list-item">
          <Link
            className="nav-link"
            activeClass="active"
            to="about-section-header"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            About
          </Link>
        </li>

        <li className="nav-list-item">
          <Link
            className="nav-link"
            activeClass="active"
            to="projects-section-header"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Projects
          </Link>
        </li>
        <li className="nav-list-item">
          <Link
            className="nav-link"
            activeClass="active"
            to="contact-header"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Contact
          </Link>
        </li>
        <li className="nav-list-item">
          <LinkButton
            className="nav-link"
            hrefProp={`Resume/ResumeLeoWall.pdf`}
            bodyProp={"CV"}
          />
        </li>
      </ul>
    </nav>
  );
};

export default NavDesktop;
