// src/AudioStreamer.js
import React, { useState, useRef } from "react";

const AudioStreamer = () => {
  const [isRecording, setIsRecording] = useState(false);
  const mediaRecorderRef = useRef(null);
  const socketRef = useRef(null);

  const startStreaming = () => {
    // Open a WebSocket connection
    socketRef.current = new WebSocket("ws://localhost:8765");

    socketRef.current.onopen = () => {
      console.log("WebSocket connection established");
    };

    socketRef.current.onerror = (error) => {
      console.error("WebSocket Error: ", error);
    };

    socketRef.current.onclose = () => {
      console.log("WebSocket connection closed");
    };

    socketRef.current.onmessage = (event) => {
      console.log("Message from server ", event.data);
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
      ) {
        const reader = new FileReader();
        reader.onloadend = () => {
          const base64Text = reader.result.split(",")[1];
          const data = {
            id: 2,
            name: 2,
            data: base64Text,
          };

          socketRef.current.send(JSON.stringify(data)); // Send audio data to backend
          console.log(JSON.stringify(data));
          console.log("Base64 text:", base64Text);
          // Do something with the base64 text
        };
        reader.readAsDataURL(event.data);
      }
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
    </div>
  );
};

export default AudioStreamer;
