import "./navBar.scss";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link } from "@mui/material";
import { useContext } from "react";
import DarkModeContext from "../../context/DarkModeContext";
import CurrentUserContext from "../../context/authContext";

function Navbar() {
  const { darkMode, swapDarkMode } = useContext(DarkModeContext);
  const { currentUser } = useContext(CurrentUserContext);
  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span>YBC Social</span>
        </Link>
        <HomeOutlinedIcon />
        {darkMode ? (
          <DarkModeOutlinedIcon onClick={swapDarkMode} />
        ) : (
          <WbSunnyOutlinedIcon onClick={swapDarkMode} />
        )}
        <GridViewOutlinedIcon />
        <div className="search">
          <SearchOutlinedIcon />
          <input placeholder="Search" />
        </div>
      </div>
      <div className="right">
        <PersonOutlinedIcon />
        <EmailOutlinedIcon />
        <NotificationsOutlinedIcon />
        <div className="user">
          <img src={currentUser.profilePic} alt="" />
          <span>{currentUser.name}</span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
