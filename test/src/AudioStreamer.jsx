import { useState, useRef, useContext } from "react";
import { MessageContext } from "./App";
import { FaPause, FaPlay } from "react-icons/fa6";

const AudioStreamer = ({ idRef, user }) => {
  const [isRecording, setIsRecording] = useState(false);

  const mediaRecorderRef = useRef(null);
  const socketRef = useRef(null);
  console.log("idRef", idRef);
  const { addMessage, toggleMyTurn, myTurn } = useContext(MessageContext);

  const startStreaming = () => {
    // Open a WebSocket connection
    socketRef.current = new WebSocket(
      "wss://api.deepgram.com/v1/listen?punctuate=true&smart_format=true",
      ["token", import.meta.env.VITE_DEEPGRAM_API_KEY]
    );

    socketRef.current.onopen = () => {
      console.log("WebSocket connection established");
    };

    socketRef.current.onerror = (error) => {
      console.error("WebSocket Error: ", error);
    };

    socketRef.current.onclose = async () => {
      if (idRef.current === null) {
        console.error("Conversation ID is null");
        return;
      }
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
      console.log("WebSocket connection closed");
    };

    socketRef.current.onmessage = async (message) => {
      const received = JSON.parse(message.data);
      console.log("Message from server ", JSON.parse(message.data));
      if (idRef.current === null) {
        console.error("Conversation ID is null");
        return;
      }
      const transcript = received.channel.alternatives[0].transcript;
      if (!transcript) return;
      addMessage({ sender: myTurn ? "user" : "opp", text: transcript });
      await fetch(
        `${import.meta.env.VITE_SERVER_URL}/conversation/${idRef.current}`,
        {
          method: "PUT",
          body: JSON.stringify({ message: transcript }),
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
    };
  };

  const startRecording = async () => {
    // Request microphone access
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });

    // Initialize MediaRecorder to record audio
    mediaRecorderRef.current = new MediaRecorder(stream);

    // Send audio chunks to WebSocket when data is available
    mediaRecorderRef.current.ondataavailable = (event) => {
      if (
        event.data.size > 0 &&
        socketRef.current.readyState === WebSocket.OPEN
      )
        socketRef.current.send(event.data); // Send audio data to backend
    };

    mediaRecorderRef.current.start(500); // Start recording audio in 500ms chunks
    setIsRecording(true);
    console.log("Recording started...");
  };

  const stopRecording = () => {
    // Stop recording and close WebSocket connection
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
      console.log("Recording stopped");
    }

    if (socketRef.current) {
      socketRef.current.close();
    }

    setIsRecording(false);
  };

  const handleStart = () => {
    startStreaming();
    startRecording();
  };

  return (
    <div>
      <button
        className={`bg-zinc-500 flex flex-row  p-5 rounded-lg text-white my-auto text-xl ${
          (user == "You" ? !myTurn : myTurn)
            ? "opacity-80"
            : "ease-in-out duration-300 hover:bg-zinc-600"
        }`}
        onClick={() => (!isRecording ? handleStart() : stopRecording())}
        disabled={user == "You" ? !myTurn : myTurn}
      >
        <span>{user}</span>
        <span className="my-auto pl-2">
          {!isRecording ? <FaPlay /> : <FaPause />}
        </span>
      </button>
      <audio src=""></audio>
    </div>
  );
};

export default AudioStreamer;
