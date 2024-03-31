import React, { forwardRef, useState } from "react";
import "./Post.css";
import Avatar from "@mui/material/Avatar";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import FlagOutlinedIcon from '@mui/icons-material/FlagOutlined';
import FlagIcon from '@mui/icons-material/Flag';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatOutlinedIcon from '@mui/icons-material/RepeatOutlined';
import avatarImage from "./images.png"; 

const Post = forwardRef(
  ({ displayName, username, verified, text, image, avatar }, ref) => {
    const [flagActive, setFlagActive] = useState(false);
    const [flagCount, setFlagCount] = useState(20);
    const [showComments, setShowComments] = useState(false); 
    const handleFlagClick = () => {
      if (flagActive) {
        setFlagActive(false);
        setFlagCount(flagCount - 1);
      } else {
        setFlagActive(true);
        setFlagCount(flagCount + 1); 
      }
    };
    const toggleComments = () => {
      setShowComments(!showComments);
    };
   

    
    return (
      <div className="post" ref={ref}>
        <div className="post__avatar">
          <Avatar src={avatarImage} alt="Avatar" />
        </div>
        <div className="post__body">
          <div className="post__header">
            <div className="post__headerText">
              <h3>
                {displayName}{" "}
                <span className="post__headerSpecial">
                  {verified && <VerifiedUserIcon className="post__badge" />} @
                  {username}
                </span>
              </h3>
            </div>
            <div className="post__headerDescription">
              <p>{text}</p>
            </div>
          </div>
          <div className="post__footer">
          <div className="flagContainer">
              
              {flagActive ? (
                <FlagIcon fontSize="small" onClick={handleFlagClick} />
              ) : (
                <FlagOutlinedIcon fontSize="small" onClick={handleFlagClick} />
              )}
              <span className="flagCount">{flagCount}</span>
            </div>
            <ChatBubbleOutlineIcon fontSize="small" onClick={toggleComments} />
            <RepeatOutlinedIcon fontSize="small" />
          </div>
          {showComments && (
            <div className="post__comments">

              <div className="post__comment">
              <Avatar />
                <div className="post__commentText">
                  <p className="post__commentUsername">@Username</p>
                  <p className="post__commentContent">This is the comment text</p> 
                </div>
              </div>
              <div className="post__comment">
                <Avatar /> 
                <div className="post__commentText">
                  <p className="post__commentUsername">@Username</p>
                  <p className="post__commentContent">This is the comment text</p> 
                </div>
              </div>
              <div className="post__comment">
                <Avatar /> 
                <div className="post__commentText">
                  <p className="post__commentUsername">@Username</p>
                  <p className="post__commentContent">This is the comment text</p> 
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
);

export default Post;