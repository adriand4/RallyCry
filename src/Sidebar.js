import React, { useState, useEffect } from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@mui/icons-material/Home";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import Button from "@mui/material/Button";

function Sidebar({ onOptionClick }) {
  const [showLoginWithGoogle, setShowLoginWithGoogle] = useState(false);

  useEffect(() => {
    fetch("https://api.cybernaut.app/bouncer",, {
      credentials: 'include', // Necessary for including cookies in the request
    })
      .then(response => {
        // If the response status is anything other than 200, show the login button
        if (response.status !== 200) {
          setShowLoginWithGoogle(true);
        }
      })
      .catch(error => {
        console.error("Error fetching the API:", error);
        // In case of an error, you might want to show the login button or handle the error differently
        setShowLoginWithGoogle(true);
      });
  }, []); // The empty array ensures this effect runs only once after the initial rendering

  const handleLoginWithGoogle = () => {
    window.location.href = "https://auth.cybernaut.app/auth/google/";
  };

  return (
    <div className="sidebar">
      <SidebarOption active Icon={HomeIcon} text="Home" onClick={() => onOptionClick("Feed")} />
      <SidebarOption Icon={MailOutlineIcon} text="Messages" onClick={() => onOptionClick("Messages")} />
      <SidebarOption Icon={PermIdentityIcon} text="Profile" onClick={() => onOptionClick("Profile")} />

      <Button variant="outlined" className="sidebar__tweet" fullWidth>
        Post
      </Button>
      
      {/* Conditionally render the "Log in with Google" button */}
      {showLoginWithGoogle && (
        <Button class="mt-3 mb-3"
          color="primary" 
          className="sidebar__login-google" 
          fullWidth
          onClick={handleLoginWithGoogle}
        >
          Log in with Google
        </Button>
      )}
    </div>
  );
}

export default Sidebar;
