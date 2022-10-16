import "../navbar.scss";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

const NavMobile = () => {
  const [menuClicked, setMenuClicked] = useState(false);

    const handleMenuClick = () => {
        setMenuClicked(!menuClicked)
    }

  return (


    <nav>
      <div className="nav-menu-icon-container" onClick={handleMenuClick}>
        <MenuIcon sx={{ fontSize: "2.5rem" }} />
      </div>
      {menuClicked ? ( <div className="nav-menu-modal-container">

      </div>):(null)}
     
    </nav>
  );
};

export default NavMobile;
