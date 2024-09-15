import React, { useContext } from "react";
import Modal from "react-modal";
import { MessageContext } from "./App";
import { IoMdClose } from "react-icons/io";
import Typewriter from "typewriter-effect";

const YapModal = ({idRef}) => {
  const randomTitle = ["Yap to the Future!", "Yap it Like it's Hot!", "Yap it Like it's 1999!", "May the Yap be with you!", "Yap Card Activated!", "I choose Yap!", "To Yap or not to Yap?", "Yap Yap Baby!"];
  const { openModal, closeModal, modalIsOpen, yapMessage, addMessage, toggleMyTurn } = useContext(MessageContext);
  const onAccept = async () => {
    addMessage({ sender: "user", text: yapMessage });
    await fetch(
      `${import.meta.env.VITE_SERVER_URL}/conversation/${idRef.current}`,
      {
        method: "PUT",
        body: JSON.stringify({ message: "#" }),
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
    toggleMyTurn();
    closeModal();
  }
  return (
      <Modal style={{ content: { backgroundColor: "#F6F7EB"} }}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        
        <div className={`font-Inria flex flex-col h-full`}>
          <div className="flex flex-row justify-between">
            <h2 className="text-6xl">{randomTitle[(Math.floor(Math.random() * randomTitle.length))]}</h2>
            <button onClick={closeModal} className="float-right"><IoMdClose className="w-12 h-12"/></button>
          </div>
          <div
              className={`rounded-xl my-10 text-navy-blue text-5xl text-wrap overflow-auto justify-start flex-grow`}
            >
              <Typewriter options={{  delay: 2, }}
                onInit={(typewriter) => {
                  typewriter
                  .typeString(yapMessage)
                  .start();
                }}/>
          </div>
          <div className="flex flex-row text-xl justify-between gap-10 align-baseline float-end">
            <button className="bg-green-400 p-4 rounded-lg flex-1" onClick={onAccept}>Accept</button>
            <button onClick={closeModal} className="bg-red-400 p-4 rounded-lg flex-1">Reject</button>
          </div>
        </div>
      </Modal>
  );
};

export default YapModal;
