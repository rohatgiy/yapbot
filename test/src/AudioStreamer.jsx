// src/AudioStreamer.js
import React, { useState, useRef } from "react";
import env from "react-dotenv";

const AudioStreamer = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [data, setData] = useState(null);
  const mediaRecorderRef = useRef(null);
  const socketRef = useRef(null);

  const startStreaming = () => {
    console.log(env);
    // Open a WebSocket connection
    socketRef.current = new WebSocket(
      "wss://api.deepgram.com/v1/listen?punctuate=true&smart_format=true",
      ["token", "c268818ea28c1ac34c20a131e4a5ca270b81dba2"]
    );

    socketRef.current.onopen = () => {
      console.log("WebSocket connection established");
    };

    socketRef.current.onerror = (error) => {
      console.error("WebSocket Error: ", error);
    };

    socketRef.current.onclose = () => {
      console.log("WebSocket connection closed");
    };

    socketRef.current.onmessage = (message) => {
      const received = JSON.parse(message.data);
      const transcript = received.channel.alternatives[0].transcript;
      console.log("Message from server ", JSON.parse(message.data));
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
      <h1>Stream Audio</h1>
      <button onClick={handleStart} disabled={isRecording}>
        Start Streaming
      </button>
      <button onClick={stopRecording} disabled={!isRecording}>
        Stop Streaming
      </button>
      <audio src=""></audio>
    </div>
  );
};

export default AudioStreamer;
