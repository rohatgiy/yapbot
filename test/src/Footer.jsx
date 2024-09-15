import { useContext, useEffect, useRef, useState } from "react";
import AudioStreamer from "./AudioStreamer";
import { v4 as uuidv4 } from "uuid";
import Spinner from "./Spinner";
import YapModal from "./YapModal";
import { MessageContext } from "./App";

function Footer() {
  const conversationId = useRef(null);
  const [loading, setLoading] = useState(false);
  const { openModal, setYapMessage, messages, givenTopic, selectedStyle } = useContext(MessageContext);
  
  console.log(givenTopic);
  console.log(selectedStyle);

  useEffect(() => {
    if (conversationId.current === null) {
      conversationId.current = uuidv4();
    }
  });
  const onYap = async () => {
    
    setLoading(true);
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}/argue/${conversationId.current}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          topic: givenTopic,
          style: selectedStyle,
          speaker: "User",
        }),
      }
    );
    const data = await response.json();
    setLoading(false);
    openModal();
    if(data.arguement.toLowerCase().startsWith('user: ')) {
      data.arguement = data.arguement.slice(6);
    }
    setYapMessage((state) => data.arguement);
    console.log(data.arguement);
  };

  console.log("conversationId", conversationId.current);
  return (
    <>
      <YapModal idRef={conversationId} />
      <footer className="bg-navy-blue flex flex-row items-center align-items-center justify-around sticky top-[calc(100dvh)] p-4">
        <AudioStreamer idRef={conversationId} user={"Opponent"} />
        <button
          className="bg-bold-red py-5 px-10 rounded-lg text-white font-bold text-xl hover:bg-dark-bold-red ease-in-out duration-300"
          onClick={onYap}
          disabled={loading}
        >
          {loading ? <Spinner /> : "Yap"}
        </button>

        <AudioStreamer idRef={conversationId} user={"You"} />
      </footer>
    </>
  );
}

export default Footer;
