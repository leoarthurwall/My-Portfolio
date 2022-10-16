import "../navbar.scss";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

const NavMobile = () => {
  const [menuClicked, setMenuClicked] = useState(false);
  return (
    <nav>
      <div>
        <MenuIcon sx={{ fontSize: "1.2rem" }} />
      </div>
    </nav>
  );
};

export default NavMobile;
