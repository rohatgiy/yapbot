import { MessageContext } from "./App";
import { useContext, useEffect, useRef } from "react";

function Chat() {
  const { messages } = useContext(MessageContext);
  const listref = useRef(null);
  useEffect(() => {
    listref.current?.lastElementChild?.scrollIntoView();
  }, [messages]);
  return (
    <div
      ref={listref}
      className="h-screen flex-col overflow-y-auto bg-cream p-4 rounded-md mb-4"
    >
      {/* Render each message */}
      {messages.map((message, index) => (
        <div
          key={index}
          className={`flex overflow-auto break-words ${
            message.sender === "user" ? "justify-end" : "justify-start"
          }`}
        >
          <div
            className={`mb-2 p-2 rounded-xl max-w-[80%] ${
              message.sender === "user"
                ? "bg-light-bold-red text-white self-end justify-end text-wrap overflow-auto"
                : "bg-gray-300 text-black self-start justify-start text-wrap overflow-auto"
            }`}
          >
            {message.text}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Chat;
