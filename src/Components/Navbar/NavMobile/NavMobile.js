import "../navbar.scss";
import { Link } from "react-scroll";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import ContactPageIcon from '@mui/icons-material/ContactPage';


const NavMobile = () => {
  const [menuClicked, setMenuClicked] = useState(false);

  const handleMenuClick = () => {
    setMenuClicked(!menuClicked);
  };

  const handleLinkClick = () => {
    setMenuClicked(false);
  };

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
                className="nav-link-mobile"
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

            <li className="nav-list-item-mobile">
              <Link
                onClick={handleLinkClick}
                className="nav-link-mobile"
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
            <li className="nav-list-item-mobile">
              <Link
                onClick={handleLinkClick}
                className="nav-link-mobile"
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
            <div className="contact-footer-icon-container">
            <a className="contact-footer-icon-individual" href={"https://github.com/leoarthurwall"} target="_blank" rel="noopener noreferrer">
              <GitHubIcon sx={{fontSize: "1.2rem" }}/>  
            </a>
            <a className="contact-footer-icon-individual" href={"https://www.linkedin.com/in/leo-wall/"} target="_blank" rel="noopener noreferrer">
              <LinkedInIcon  sx={{fontSize: "1.2rem" }}/>
            </a>
            <a className="contact-footer-icon-individual" href={`mailto:leowall93@gmail.com`} target="_blank" rel="noopener noreferrer">
              <EmailIcon  sx={{fontSize: "1.2rem" }}/>
            </a>
            <a className="contact-footer-icon-individual" href={`Resume/ResumeLeoWall.pdf`} target="_blank" rel="noopener noreferrer">
            <ContactPageIcon  sx={{fontSize: "1.2rem" }}/>
            </a>
          </div>
          </ul>
        </div>
      ) : null}
    </nav>
  );
};

export default NavMobile;
