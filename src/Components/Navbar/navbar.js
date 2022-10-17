import { Link } from "react-scroll";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";
import "./navbar.scss";
import NavDesktop from "./NavDesktop/NavDesktop";
import NavMobile from "./NavMobile/NavMobile";

function Navbar() {
  const isMobileScreen = useMediaQuery({ query: "(max-width: 480px)" });

  const [menuClicked, setMenuClicked] = useState(false);

  const handleMenuClick = () => {
    setMenuClicked(!menuClicked);
  };

  const handleLinkClick = () => {
    setMenuClicked(false);
  };
  
  return (
    <div className="header">
      <div className="navlogo">
        <Link
          onClick={handleLinkClick}
          activeClass="active"
          to="intro-section"
          spy={true}
          smooth={true}
          offset={-200}
          duration={500}
        >
          <img
            className="logo-image"
            src="Images/ProfileLogoCropped.png"
            alt="logo"
          ></img>
        </Link>
      </div>
      <div className="nav-right">
        {isMobileScreen ? (
          <NavMobile
            handleMenuClick={handleMenuClick}
            handleLinkClick={handleLinkClick}
            menuClicked={menuClicked}
          />
        ) : (
          <NavDesktop />
        )}
      </div>
    </div>
  );
}
export default Navbar;

//NAVBAR - burger menu plan
// Display Burger menu icon
// Display menu modal
// add onclick functionality to icon
// add media queries to display icon only in mobile
// add links to modal
// add onclick functionality to links - when section links are clicked, modal dissapears automatically
