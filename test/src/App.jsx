import Footer from "./Footer";
import Chat from "./Chat";
import Navbar from "./Navbar.jsx";

function App() {
return (
	<div className="flex flex-col h-screen">
		<Navbar />
		<Chat messages={[{sender: 'Yash', text: 'hiqwertyuioxdvyfcdabskufgabdiuyfgouydsbfgukabdsuhfgdahkubfjsbfubsadufbyusadbfyuoasdbyfubasdkufbuhsdabfuyasbdiufbsaiufbusadbf' }, {sender: 'user', text: 'hiqwertyuioxdvyfcdabskufgabdiuyfgouydsbfgukabdsuhfgdahkubfjsbfubsadufbyusadbfyuoasdbyfubasdkufbuhsdabfuyasbdiufbsaiufbusadbf' }, {sender: 'Yash', text: 'hi' }]}/>
		<Footer />
	</div>
);
}

export default App;
