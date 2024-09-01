import React from 'react';
import './Components.css';

function ChatBox() {
  return (
    <div className="chat-box">
      <h3>Chat Box</h3>
      <textarea placeholder="Type your message here..."></textarea>
      <button>Send</button>
    </div>
  );
}

export default ChatBox;
