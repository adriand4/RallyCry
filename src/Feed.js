import React, { useState } from "react";
import Post from "./Post";
import "./Feed.css";
import FlipMove from "react-flip-move";

function Feed() {
  const [posts, setPosts] = useState([
    {
      displayName: "John Doe",
      username: "johndoe",
      verified: true,
      text: "Joining a rebellion is a decision fraught with complexity, as it involves aligning oneself with a movement aimed at challenging established authority or systems perceived as unjust. Whether driven by a quest for freedom, justice, or societal change, individuals who choose to join a rebellion often do so out of deeply held convictions and a desire to catalyze meaningful transformation. Such a decision requires careful consideration of the risks involved, including potential repercussions from those in power and the possibility of violence or conflict. Yet, for many, the allure of rebellion lies in the opportunity to stand up against oppression, fight for fundamental rights, and strive for a better future. It demands courage, resilience, and a willingness to sacrifice personal comfort for the collective good. Joining a rebellion is not merely an act of defiance; it is a commitment to actively shaping the course of history and leaving a lasting impact on society.",
      avatar: "",
    },{
      displayName: "John Doe",
      username: "johndoe",
      verified: true,
      text: "Joining a rebellion is a decision fraught with complexity, as it involves aligning oneself with a movement aimed at challenging established authority or systems perceived as unjust. Whether driven by a quest for freedom, justice, or societal change, individuals who choose to join a rebellion often do so out of deeply held convictions and a desire to catalyze meaningful transformation. Such a decision requires careful consideration of the risks involved, including potential repercussions from those in power and the possibility of violence or conflict. Yet, for many, the allure of rebellion lies in the opportunity to stand up against oppression, fight for fundamental rights, and strive for a better future. It demands courage, resilience, and a willingness to sacrifice personal comfort for the collective good. Joining a rebellion is not merely an act of defiance; it is a commitment to actively shaping the course of history and leaving a lasting impact on society.",
      avatar: "",
    },{
      displayName: "John Doe",
      username: "johndoe",
      verified: true,
      text: "Joining a rebellion is a decision fraught with complexity, as it involves aligning oneself with a movement aimed at challenging established authority or systems perceived as unjust. Whether driven by a quest for freedom, justice, or societal change, individuals who choose to join a rebellion often do so out of deeply held convictions and a desire to catalyze meaningful transformation. Such a decision requires careful consideration of the risks involved, including potential repercussions from those in power and the possibility of violence or conflict. Yet, for many, the allure of rebellion lies in the opportunity to stand up against oppression, fight for fundamental rights, and strive for a better future. It demands courage, resilience, and a willingness to sacrifice personal comfort for the collective good. Joining a rebellion is not merely an act of defiance; it is a commitment to actively shaping the course of history and leaving a lasting impact on society.",
      avatar: "",
    },{
      displayName: "John Doe",
      username: "johndoe",
      verified: true,
      text: "Joining a rebellion is a decision fraught with complexity, as it involves aligning oneself with a movement aimed at challenging established authority or systems perceived as unjust. Whether driven by a quest for freedom, justice, or societal change, individuals who choose to join a rebellion often do so out of deeply held convictions and a desire to catalyze meaningful transformation. Such a decision requires careful consideration of the risks involved, including potential repercussions from those in power and the possibility of violence or conflict. Yet, for many, the allure of rebellion lies in the opportunity to stand up against oppression, fight for fundamental rights, and strive for a better future. It demands courage, resilience, and a willingness to sacrifice personal comfort for the collective good. Joining a rebellion is not merely an act of defiance; it is a commitment to actively shaping the course of history and leaving a lasting impact on society.",
      avatar: "",
    },{
      displayName: "John Doe",
      username: "johndoe",
      verified: true,
      text: "Joining a rebellion is a decision fraught with complexity, as it involves aligning oneself with a movement aimed at challenging established authority or systems perceived as unjust. Whether driven by a quest for freedom, justice, or societal change, individuals who choose to join a rebellion often do so out of deeply held convictions and a desire to catalyze meaningful transformation. Such a decision requires careful consideration of the risks involved, including potential repercussions from those in power and the possibility of violence or conflict. Yet, for many, the allure of rebellion lies in the opportunity to stand up against oppression, fight for fundamental rights, and strive for a better future. It demands courage, resilience, and a willingness to sacrifice personal comfort for the collective good. Joining a rebellion is not merely an act of defiance; it is a commitment to actively shaping the course of history and leaving a lasting impact on society.",
      avatar: "",
    },{
      displayName: "John Doe",
      username: "johndoe",
      verified: true,
      text: "Joining a rebellion is a decision fraught with complexity, as it involves aligning oneself with a movement aimed at challenging established authority or systems perceived as unjust. Whether driven by a quest for freedom, justice, or societal change, individuals who choose to join a rebellion often do so out of deeply held convictions and a desire to catalyze meaningful transformation. Such a decision requires careful consideration of the risks involved, including potential repercussions from those in power and the possibility of violence or conflict. Yet, for many, the allure of rebellion lies in the opportunity to stand up against oppression, fight for fundamental rights, and strive for a better future. It demands courage, resilience, and a willingness to sacrifice personal comfort for the collective good. Joining a rebellion is not merely an act of defiance; it is a commitment to actively shaping the course of history and leaving a lasting impact on society.",
      avatar: "",
    },{
      displayName: "John Doe",
      username: "johndoe",
      verified: true,
      text: "Joining a rebellion is a decision fraught with complexity, as it involves aligning oneself with a movement aimed at challenging established authority or systems perceived as unjust. Whether driven by a quest for freedom, justice, or societal change, individuals who choose to join a rebellion often do so out of deeply held convictions and a desire to catalyze meaningful transformation. Such a decision requires careful consideration of the risks involved, including potential repercussions from those in power and the possibility of violence or conflict. Yet, for many, the allure of rebellion lies in the opportunity to stand up against oppression, fight for fundamental rights, and strive for a better future. It demands courage, resilience, and a willingness to sacrifice personal comfort for the collective good. Joining a rebellion is not merely an act of defiance; it is a commitment to actively shaping the course of history and leaving a lasting impact on society.",
      avatar: "",
    },{
      displayName: "John Doe",
      username: "johndoe",
      verified: true,
      text: "Joining a rebellion is a decision fraught with complexity, as it involves aligning oneself with a movement aimed at challenging established authority or systems perceived as unjust. Whether driven by a quest for freedom, justice, or societal change, individuals who choose to join a rebellion often do so out of deeply held convictions and a desire to catalyze meaningful transformation. Such a decision requires careful consideration of the risks involved, including potential repercussions from those in power and the possibility of violence or conflict. Yet, for many, the allure of rebellion lies in the opportunity to stand up against oppression, fight for fundamental rights, and strive for a better future. It demands courage, resilience, and a willingness to sacrifice personal comfort for the collective good. Joining a rebellion is not merely an act of defiance; it is a commitment to actively shaping the course of history and leaving a lasting impact on society.",
      avatar: "",
    },{
      displayName: "John Doe",
      username: "johndoe",
      verified: true,
      text: "Joining a rebellion is a decision fraught with complexity, as it involves aligning oneself with a movement aimed at challenging established authority or systems perceived as unjust. Whether driven by a quest for freedom, justice, or societal change, individuals who choose to join a rebellion often do so out of deeply held convictions and a desire to catalyze meaningful transformation. Such a decision requires careful consideration of the risks involved, including potential repercussions from those in power and the possibility of violence or conflict. Yet, for many, the allure of rebellion lies in the opportunity to stand up against oppression, fight for fundamental rights, and strive for a better future. It demands courage, resilience, and a willingness to sacrifice personal comfort for the collective good. Joining a rebellion is not merely an act of defiance; it is a commitment to actively shaping the course of history and leaving a lasting impact on society.",
      avatar: "",
    },
  ]);

  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>

      <FlipMove>
        {posts.map((post, index) => (
          
          <Post
            key={index}
            displayName={post.displayName}
            username={post.username}
            verified={post.verified}
            text={post.text}
            avatar={post.avatar}
          />
        ))}
      </FlipMove>
    </div>
  );
}

export default Feed;
