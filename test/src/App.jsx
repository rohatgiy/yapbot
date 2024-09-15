import Footer from "./Footer.jsx";
import Chat from "./Chat.jsx";
import Navbar from "./Navbar.jsx";
import Landing from "./Landing.jsx";
import { createContext, useState } from "react";
import YapModal from "./YapModal.jsx";

export const MessageContext = createContext();

function App() {
  const [messages, setMessages] = useState([
    { sender: "Yash", text: "Message 1" },
    { sender: "user", text: "Message 2" },
    { sender: "Yash", text: "Message 3" },
    { sender: "Yash", text: "Message 4" },
    { sender: "Yash", text: "Message 5" },
    { sender: "user", text: "Message 6" },
    { sender: "user", text: "Message 7" },
    { sender: "Yash", text: "Message 8" },
    { sender: "user", text: "Message 9" },
    { sender: "Yash", text: "Message 1" },
    { sender: "user", text: "Message 2" },
    { sender: "Yash", text: "Message 3" },
    { sender: "Yash", text: "Message 4" },
    { sender: "Yash", text: "Message 5" },
    { sender: "user", text: "Message 6" },
    { sender: "user", text: "Message 7" },
    { sender: "Yash", text: "Message 8" },
    { sender: "user", text: "Message 9" },
    { sender: "Yash", text: "Message 1" },
    { sender: "user", text: "Message 2" },
    { sender: "Yash", text: "Message 3" },
    { sender: "Yash", text: "Message 4" },
    { sender: "Yash", text: "Message 5" },
    { sender: "user", text: "Message 6" },
    { sender: "user", text: "Message 7" },
    { sender: "Yash", text: "Message 8" },
    { sender: "user", text: "Message 9" },
    { sender: "Yash", text: "Message 1" },
    { sender: "user", text: "Message 2" },
    { sender: "Yash", text: "Message 3" },
    { sender: "Yash", text: "Message 4" },
    { sender: "Yash", text: "Message 5" },
    { sender: "user", text: "Message 6" },
    { sender: "user", text: "Message 7" },
    { sender: "Yash", text: "Message 8" },
    { sender: "user", text: "Message 9" },
  ]);
  const [myTurn, setMyTurn] = useState(false);

  const toggleMyTurn = () => {
    setMyTurn((prevMyTurn) => !prevMyTurn);
  };
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const addMessage = (message) => {
    setMessages((prevMessages) => [...prevMessages, message]);
  };

  return (
    <MessageContext.Provider
      value={{
        messages,
        addMessage,
        myTurn,
        toggleMyTurn,
        modalIsOpen,
        openModal,
        closeModal,
      }}
    >
      <div className="flex flex-col h-[100dvh] font-Inria">
        <Navbar />
        {/* <Landing /> */}
        <Chat />
        <YapModal />
        <Footer />
      </div>
    </MessageContext.Provider>
  );
}

export default App;
