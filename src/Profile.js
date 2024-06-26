import React, { useEffect, useState } from "react";
import "./Profile.css";
import ProfileIcon from "./images.png";
import MilitaryTechOutlinedIcon from '@mui/icons-material/MilitaryTechOutlined';

function Profile() {
  const [user, setUser] = useState({
    name: "Guest",
    handle: "@guest",
    bio: "Log in to view Profile",
    followers: 0,
    following: 0,
  });

  useEffect(() => {
    // Function to fetch user data
    const fetchUserData = async () => {
      try {
        // Check if the user is logged in
        const bouncerResponse = await fetch('https://api.cybernaut.app/bouncer', {
          credentials: 'include', // Necessary for including cookies in the request
        });
  
        if (bouncerResponse.ok) {
          // User is logged in, fetch user details
          const userResponse = await fetch('https://api.cybernaut.app/user', {
            credentials: 'include', // Necessary for including cookies in the request
          });
  
          if (userResponse.ok) {
            const userData = await userResponse.json(); // Convert the response payload to JSON
  
            // Update state with the fetched data
            setUser({
              name: userData.Username,
              handle: `@${userData.Username.toLowerCase()}`,
              bio: `Current Faction: ${userData.FactionID || "None"}`,
              // Assuming you want to include default values for followers and following
              followers: user.followers,
              following: user.following,
            });
          } else {
            throw new Error('Failed to fetch user details');
          }
        } else {
          throw new Error('User is not logged in');
        }
      } catch (error) {
        console.error("Error fetching user data", error);
        // Handle unauthorized or other errors (e.g., keep the default user or update state to reflect the error)
      }
    };
  
    fetchUserData();
  }, []); // The empty array ensures this effect runs only once after the initial render

  return (
    <div className="profile">
      <div className="profile__header">
        <div className="profile__icon">
            <img src={ProfileIcon} alt="Profile Icon" />
        </div>
        <div className="profile__info">
          <h2>{user.name}</h2>
          <h3>{user.handle}</h3>
          <p>{user.bio} <MilitaryTechOutlinedIcon fontSize="small" /></p>
          <div className="profile__stats">
            <p>Followers: {user.followers}</p>
            <p>Following: {user.following}</p>
          </div>
        </div>
      </div>
      {/* Remaining component structure */}
    </div>
  );
}

export default Profile;
