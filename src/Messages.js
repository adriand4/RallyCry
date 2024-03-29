import React from "react";
import "./Messages.css";

function Messages() {

  const conversations = [
    { id: 1, name: "John Doe", message: "Hey there!" },
    { id: 2, name: "Jane Smith", message: "Hi! How are you?" },
    { id: 3, name: "Alice", message: "What's up?" },

  ];

  return (
    <div className="messages">
      <div className="messages__header">
        <h2>Messages</h2>
      </div>
      <div className="messages__list">
        {conversations.map((conversation) => (
          <div key={conversation.id} className="conversation">
            <div className="conversation__avatar">
              <img src={"https://github.com/shadcn.png"} alt="Avatar" />
            </div>
            <div className="conversation__details">
              <h3>{conversation.name}</h3>
              <p>{conversation.message}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Messages;
