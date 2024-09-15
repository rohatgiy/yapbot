import React, { useContext } from "react";
import Modal from "react-modal";
import { MessageContext } from "./App";
const YapModal = () => {
  const { openModal, closeModal, modalIsOpen } = useContext(MessageContext);
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        <button onClick={closeModal}>close</button>
        <div>I am a modal</div>
        <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form>
      </Modal>
    </div>
  );
};

export default YapModal;
