import { useEffect, useRef } from "react";
import AudioStreamer from "./AudioStreamer";
import { v4 as uuidv4 } from 'uuid';

function Footer() {
	const conversationId = useRef(null);

	useEffect(() => {
		if (conversationId.current === null) {
			conversationId.current = uuidv4();
		} 
	})

	console.log('conversationId', conversationId.current);
	return (
	<footer className="bg-dark-green flex flex-row items-center align-items-center justify-between sticky top-[100vh] p-4">
		<AudioStreamer idRef={conversationId}/>
		<button className="bg-mustard p-5 rounded-lg text-white">help me!</button>
		<AudioStreamer idRef={conversationId}/>
   </footer>
   )
}

export default Footer;