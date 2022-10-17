import "../navbar.scss";
import { Link } from "react-scroll";
import MenuIcon from "@mui/icons-material/Menu";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const NavMobile = ({menuClicked, handleMenuClick, handleLinkClick}) => {

  return (
    <nav className="nav-mobile-container">
      <div className="nav-menu-icon-container">
        <MenuIcon sx={{ fontSize: "2.5rem" }} onClick={handleMenuClick} />
      </div>
      {menuClicked ? (
        <div className="nav-menu-modal-container">
          <ul className="nav-list-container-mobile">
            <li className="nav-list-item-mobile">
              <Link
                onClick={handleLinkClick}
                activeClass="active"
                to="about-section-header"
                spy={true}
                smooth={true}
                offset={-100}
                duration={0}
              >
                <p className="modal-menu-name">About</p>
              </Link>
              <NavigateNextIcon />
            </li>
            <li className="nav-list-item-mobile">
              <Link
                onClick={handleLinkClick}
                activeClass="active"
                to="projects-section-header"
                spy={true}
                smooth={true}
                offset={-100}
                duration={0}
              >
                <p className="modal-menu-name">Projects</p>
              </Link>
              <NavigateNextIcon />
            </li>
            <li className="nav-list-item-mobile">
              <Link
                onClick={handleLinkClick}
                activeClass="active"
                to="contact-header"
                spy={true}
                smooth={true}
                offset={-100}
                duration={0}
              >
                <p className="modal-menu-name">Contact</p>
              </Link>
              <NavigateNextIcon />
            </li>
            <li className="nav-list-item-mobile">
              <a
                className="nav-list-item-anchor"
                href={"https://github.com/leoarthurwall"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="modal-menu-name">GitHub</p>
              </a>
              <NavigateNextIcon />
            </li>
            <li className="nav-list-item-mobile">
              <a
                className="nav-list-item-anchor"
                href={"https://www.linkedin.com/in/leo-wall/"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="modal-menu-name">LinkedIn</p>
              </a>
              <NavigateNextIcon />
            </li>
            <li className="nav-list-item-mobile">
              <a
                className="nav-list-item-anchor"
                href={`mailto:leowall93@gmail.com`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="modal-menu-name">Email</p>
              </a>
              <NavigateNextIcon />
            </li>
            <li className="nav-list-item-mobile">
              <a
                className="nav-list-item-anchor"
                href={`Resume/ResumeLeoWall.pdf`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="modal-menu-name">CV</p>
              </a>
              <NavigateNextIcon />
            </li>
          </ul>
        </div>
      ) : null}
    </nav>
  );
};

export default NavMobile;
