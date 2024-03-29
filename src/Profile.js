import React from "react";
import "./Profile.css";
import ProfileIcon from "./images.png"; 
import MilitaryTechOutlinedIcon from '@mui/icons-material/MilitaryTechOutlined';

function Profile() {
  const user = {
    name: "John Doe",
    handle: "@johndoe",
    bio: "Current Faction: VSF ",
    followers: 300,
    following: 300,
  };

  return (
    <div className="profile">
      <div className="profile__header">
        <div className="profile__icon">
            <img src={ProfileIcon} alt="Profile Icon" />
        </div>
        <div className="profile__info">
          <h2>{user.name}</h2>
          <h3>{user.handle}</h3>
          <p>{user.bio} <MilitaryTechOutlinedIcon fontSize="extra small" /></p>
          <div className="profile__stats">
            <p>Followers: {user.followers}</p>
            <p>Following: {user.following}</p>
          </div>
        </div>
      </div>
      <div className="profile__tabs">
       
      </div>
      <div className="profile__content">
        
      </div>
      <div className="profile__sidebar">
        
      </div>
      <div className="profile__footer">
       
      </div>
    </div>
  );
}

export default Profile;
