import Footer from "./Footer.jsx";
import Chat from "./Chat.jsx";
import Navbar from "./Navbar.jsx";
import Landing from "./Landing.jsx";
import { createContext, useState } from "react";

export const MessageContext = createContext();

function App() {
	const [messages, setMessages] = useState([]);
	const [myTurn, setMyTurn] = useState(false);

	const toggleMyTurn = () => {
		setMyTurn((prevMyTurn) => !prevMyTurn);
	}

    const addMessage = (message) => {
        setMessages((prevMessages) => [...prevMessages, message]);
    };

	// const testMessages = [
	// 	{sender: 'Yash', text: 'Message 1' }, 
	// 	{sender: 'user', text: 'Message 2' }, 
	// 	{sender: 'Yash', text: 'Message 3' }, 
	// 	{sender: 'Yash', text: 'Message 4' }, 
	// 	{sender: 'Yash', text: 'Message 5' }, 
	// 	{sender: 'user', text: 'Message 6' }, 
	// 	{sender: 'user', text: 'Message 7' }, 
	// 	{sender: 'Yash', text: 'Message 8' }, 
	// 	{sender: 'user', text: 'Message 9' }]
return (
	<MessageContext.Provider value={{ messages, addMessage, myTurn, toggleMyTurn }}>
		<div className="flex flex-col h-screen font-Inria">
		<Navbar />
		{/* <Landing /> */}
		<Chat />
		<Footer />
		</div>
	</MessageContext.Provider>
	
);
}

export default App;
