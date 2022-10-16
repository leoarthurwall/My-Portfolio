import "../navbar.scss";
import { Link } from "react-scroll";
import LinkButton from "../../LinkButton/LinkButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

const NavMobile = () => {
  const [menuClicked, setMenuClicked] = useState(false);

    const handleMenuClick = () => {
        setMenuClicked(!menuClicked)
    }

  return (


    <nav className="nav-mobile-container">
      <div className="nav-menu-icon-container" >
        <MenuIcon sx={{ fontSize: "2.5rem" }} onClick={handleMenuClick}/>
      </div>
      {menuClicked ? ( <div className="nav-menu-modal-container">
      <ul className="nav-list-container-mobile">
        <li className="nav-list-item-mobile">
          <Link
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
        <li className="nav-list-item-mobile">
          <LinkButton
            className="nav-link-mobile"
            hrefProp={`Resume/ResumeLeoWall.pdf`}
            bodyProp={"CV"}
          />
        </li>
      </ul>
      </div>):(null)}
     
    </nav>
  );
};

export default NavMobile;
