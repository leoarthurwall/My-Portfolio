import "../navbar.scss";
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
        
      </div>):(null)}
     
    </nav>
  );
};

export default NavMobile;
