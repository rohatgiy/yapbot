import { useState, useRef } from "react";

const AudioStreamer = ({idRef}) => {
  const [isRecording, setIsRecording] = useState(false);
  const mediaRecorderRef = useRef(null);
  const socketRef = useRef(null);
  console.log('idRef', idRef);

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
		await fetch(`${import.meta.env.VITE_SERVER_URL}/conversation/${idRef.current}`, {
			method: 'PUT',
			body: JSON.stringify({ message: '#' }),
			headers: {
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': '*',
			},
		});
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
		await fetch(`${import.meta.env.VITE_SERVER_URL}/conversation/${idRef.current}`, {
			method: 'PUT',
			body: JSON.stringify({ message: transcript }),
			headers: {
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': '*',
			},
		});
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
      <button className="bg-mustard p-5 rounded-lg text-white" onClick={() => !isRecording ? handleStart() : stopRecording()}>
        {!isRecording ? 'Start Streaming' : 'Stop Streaming'}
      </button>
      <audio src=""></audio>
    </div>
  );
};

export default AudioStreamer;
