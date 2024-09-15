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
  };

  const addMessage = (message) => {
    setMessages((prevMessages) => [...prevMessages, message]);
  };

  return (
    <MessageContext.Provider
      value={{ messages, addMessage, myTurn, toggleMyTurn }}
    >
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
