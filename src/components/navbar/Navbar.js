import "./navBar.scss";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import DarkModeContext from "../../context/DarkModeContext";
import CurrentUserContext from "../../context/authContext";
import ChangeHistoryIcon from "@mui/icons-material/ChangeHistory";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const { darkMode, swapDarkMode } = useContext(DarkModeContext);
  const { currentUser } = useContext(CurrentUserContext);
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <span>YBC Social</span>
        </Link>
        <Link to="/" style={{ color: "inherit", marginTop: "8px" }}>
          <HomeOutlinedIcon />
        </Link>
        {darkMode ? (
          <DarkModeOutlinedIcon onClick={swapDarkMode} className="icon" />
        ) : (
          <WbSunnyOutlinedIcon onClick={swapDarkMode} className="icon" />
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
          <ChangeHistoryIcon
            className="icon"
            style={{ fontSize: "10px", transform: menuOpen ? "rotate(0deg)" : "rotate(180deg)" }}
            onClick={() => setMenuOpen((prev) => !prev)}
          />
          {menuOpen && (
            <div className="logout">
              <Link to="/profile/1" onClick={() => setMenuOpen(false)}>
                Profile
              </Link>
              <Link to="/login" onClick={() => setMenuOpen(false)}>
                Logout
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
