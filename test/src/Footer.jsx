import AudioStreamer from "./AudioStreamer";

function Footer() {
	return (
	<footer className="bg-dark-green flex flex-row items-center align-items-center justify-between sticky top-[100vh] p-4">
		<AudioStreamer />
		<button className="bg-mustard p-5 rounded-lg text-white">help me!</button>
		<AudioStreamer />
   </footer>
   )
}

export default Footer;