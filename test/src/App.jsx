import Footer from "./Footer.jsx";
import Chat from "./Chat.jsx";
import Navbar from "./Navbar.jsx";
import Landing from "./Landing.jsx";

function App() {
return (
	<div className="flex flex-col h-screen font-Inria">
		<Navbar />
		<Landing />
		{/* <Chat messages={[{sender: 'Yash', text: 'hiqwertyuioxdvyfcdabskufgabdiuyfgouydsbfgukabdsuhfgdahkubfjsbfubsadufbyusadbfyuoasdbyfubasdkufbuhsdabfuyasbdiufbsaiufbusadbf' }, {sender: 'user', text: 'hiqwertyuioxdvyfcdabskufgabdiuyfgouydsbfgukabdsuhfgdahkubfjsbfubsadufbyusadbfyuoasdbyfubasdkufbuhsdabfuyasbdiufbsaiufbusadbf' }, {sender: 'Yash', text: 'hi' }]}/> */}
		<Footer />
	</div>
);
}

export default App;
