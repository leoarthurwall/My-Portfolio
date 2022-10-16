import "../navbar.scss";
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";

const NavMobile = () => {
    const [menuClicked, setMenuClicked] = useState(false)
  return (
    <nav>
        <MenuIcon />
    </nav>
  )
}

export default NavMobile