import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@mui/icons-material/Home";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import Button from "@mui/material/Button";

function Sidebar({onOptionClick}) {
  return (
    <div className="sidebar">

      <SidebarOption active Icon={HomeIcon} text="Home" onClick={() => onOptionClick("Feed")} />
      <SidebarOption Icon={MailOutlineIcon} text="Messages" onClick={() => onOptionClick("Messages")}/>
      <SidebarOption Icon={PermIdentityIcon} text="Profile"onClick={() => onOptionClick("Profile")} />

      <Button variant="outlined" className="sidebar__tweet" fullWidth>
        Post
      </Button>
    </div>
  );
}

export default Sidebar;