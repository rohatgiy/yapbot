import Footer from "./Footer.jsx";
import Chat from "./Chat.jsx";
import Navbar from "./Navbar.jsx";
import Landing from "./Landing.jsx";
import { createContext, useState } from "react";
import YapModal from "./YapModal.jsx";

export const MessageContext = createContext();

function App() {
  const [messages, setMessages] = useState([]);
  const [myTurn, setMyTurn] = useState(false);

  const [yapMessage, setYapMessage] = useState("");

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
              yapMessage,
              setYapMessage
        }}
      >
        <div className="flex flex-col h-[100dvh]">
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
