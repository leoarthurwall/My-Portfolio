import "../navbar.scss";
import { Link } from "react-scroll";
import MenuIcon from "@mui/icons-material/Menu";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import CloseIcon from "@mui/icons-material/Close";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import InfoIcon from "@mui/icons-material/Info";
import AppsIcon from "@mui/icons-material/Apps";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";

const NavMobile = ({ menuClicked, handleMenuClick, handleLinkClick }) => {
  return (
    <nav className="nav-mobile-container">
      <div className="nav-menu-icon-container">
        {menuClicked ? (
          <CloseIcon sx={{ fontSize: "2rem" }} onClick={handleMenuClick} />
        ) : (
          <MenuIcon sx={{ fontSize: "2rem" }} onClick={handleMenuClick} />
        )}
      </div>
      {menuClicked ? (
        <div className="nav-menu-modal-container">
          <ul className="nav-list-container-mobile">
            <Link
              onClick={handleLinkClick}
              activeClass="active"
              to="intro-container"
              spy={true}
              smooth={true}
              offset={-100}
              duration={0}
            >
              <li className="nav-list-item-mobile">
                <EmojiPeopleIcon />
                <div className="nav-list-item-mobile-inner-div">
                  <p className="modal-menu-name">Introduction</p>
                  <NavigateNextIcon />
                </div>
              </li>
            </Link>
            <Link
              onClick={handleLinkClick}
              activeClass="active"
              to="about-section-header"
              spy={true}
              smooth={true}
              offset={-100}
              duration={0}
            >
              <li className="nav-list-item-mobile">
                <InfoIcon />
                <div className="nav-list-item-mobile-inner-div">
                  <p className="modal-menu-name">About</p>
                  <NavigateNextIcon />
                </div>
              </li>
            </Link>
            <Link
              onClick={handleLinkClick}
              activeClass="active"
              to="projects-section-header"
              spy={true}
              smooth={true}
              offset={-100}
              duration={0}
            >
              <li className="nav-list-item-mobile">
                <AppsIcon />
                <div className="nav-list-item-mobile-inner-div">
                  <p className="modal-menu-name">Projects</p>
                  <NavigateNextIcon />
                </div>
              </li>
            </Link>
            <Link
              onClick={handleLinkClick}
              activeClass="active"
              to="contact-header"
              spy={true}
              smooth={true}
              offset={-100}
              duration={0}
            >
              <li className="nav-list-item-mobile">
                <ConnectWithoutContactIcon />
                <div className="nav-list-item-mobile-inner-div">
                  <p className="modal-menu-name">Contact</p>
                  <NavigateNextIcon />
                </div>
              </li>
            </Link>
            <a
              className="nav-list-item-anchor"
              href={"https://github.com/leoarthurwall"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <li className="nav-list-item-mobile">
                <GitHubIcon />
                <div className="nav-list-item-mobile-inner-div">
                  <p className="modal-menu-name">GitHub</p>
                  <NavigateNextIcon />
                </div>
              </li>
            </a>
            <a
              className="nav-list-item-anchor"
              href={"https://www.linkedin.com/in/leo-wall/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <li className="nav-list-item-mobile">
                <LinkedInIcon />
                <div className="nav-list-item-mobile-inner-div">
                  <p className="modal-menu-name">LinkedIn</p>
                  <NavigateNextIcon />
                </div>
              </li>
            </a>
            <a
              className="nav-list-item-anchor"
              href={`mailto:leowall93@gmail.com`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <li className="nav-list-item-mobile">
                <EmailIcon />
                <div className="nav-list-item-mobile-inner-div">
                  <p className="modal-menu-name">Email</p>
                  <NavigateNextIcon />
                </div>
              </li>
            </a>

            <a
              className="nav-list-item-anchor"
              href={`Resume/ResumeLeoWall.pdf`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <li className="nav-list-item-mobile">
                <ContactPageIcon />
                <div className="nav-list-item-mobile-inner-div">
                  <p className="modal-menu-name">CV</p>
                  <NavigateNextIcon />
                </div>
              </li>
            </a>
          </ul>
        </div>
      ) : null}
    </nav>
  );
};

export default NavMobile;
