function Chat({ messages }) {
  return (
      <div className="h-screen flex-col overflow-y-auto bg-cream p-4 rounded-md mb-4">
        {/* Render each message */}
        {messages.map((message, index) => (
			<div key={index} className={`flex max-w-screen ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
				<div
					className={`mb-2 p-2 rounded-lg break-words ${
					message.sender === 'user'
						? 'bg-blue-500 text-white self-end justify-end'
						: 'bg-gray-200 text-black self-start justify-start'
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
