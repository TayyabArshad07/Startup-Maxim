import Image from "next/image";
import React, { useState } from "react";
import ChatbotIcon from "@/public/img/icons8-message-bot-30.png";
import ChatSend from "@/public/img/paper-plane-solid.svg"

const Chatbot: React.FC = () => {
  const [isChatboxVisible, setChatboxVisibility] = useState(false);

  const toggleChatbox = () => {
    setChatboxVisibility(!isChatboxVisible);
  };

  return (
    <div className="chat-container">
      {isChatboxVisible && (
        <section className="shadow-md chat-section shadow-gray-500 px-[10px]">
          <div className="chatbox flex">
          <input type="text" placeholder="Enter Your Message" />
          <button className="chat-send-button"><Image src={ChatSend} alt="" width={20} /></button>
        </div>
        </section>
      )}
      <button className="chat-button" onClick={toggleChatbox}>
        <Image src={ChatbotIcon} alt="" />
      </button>

      
    </div>
  );
};

export default Chatbot;
