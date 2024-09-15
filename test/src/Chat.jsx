import { MessageContext } from "./App";
import { useContext } from "react";

function Chat() {
	const { messages } = useContext(MessageContext);
  return (
      <div className="h-screen flex-col overflow-y-auto bg-cream p-4 rounded-md mb-4">
        {/* Render each message */}
        {messages.map((message, index) => (
			<div key={index} className={`flex overflow-auto break-words ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
				<div
					className={`mb-2 p-2 rounded-xl max-w-[80%] ${
					message.sender === 'user'
						? 'bg-green-500 text-white self-end justify-end text-wrap overflow-auto'
						: 'bg-gray-300 text-black self-start justify-start text-wrap overflow-auto'
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
