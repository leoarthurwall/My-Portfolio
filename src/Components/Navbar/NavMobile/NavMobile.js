import "../navbar.scss";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

const NavMobile = () => {
  const [menuClicked, setMenuClicked] = useState(false);

  return (


    <nav>
      <div className="nav-menu-icon-container">
        <MenuIcon sx={{ fontSize: "1.7rem" }} />
      </div>
    </nav>
  );
};

export default NavMobile;
