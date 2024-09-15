import { useContext } from "react";
import { MessageContext } from "./App";
import { FaFolder } from "react-icons/fa6";
import { FaSave } from "react-icons/fa";

function Navbar() {
  const { openModal, messages } = useContext(MessageContext);
  function exportTranscript() {
    const totalText = messages.reduce(
      (total, message) =>
        total + message.sender + ": " + '"' + message.text + '"' + "\n",
      ""
    );
    console.log(totalText);
    const blob = new Blob([totalText], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    const datetime = new Date();
    link.download = "transcript" + datetime.toUTCString() + ".txt";
    link.href = url;
    link.click();
  }
  return (
    <nav className="bg-navy-blue p-4">
      <div className="container flex justify-start items-center">
        <div className="flex flex-row gap-2 items-center">
          <img
            style={{ width: "40px", height: "40px" }}
            src="/logo.png"
            alt="YapBot Logo"
          />
          <a href="/" className="text-cream text-lg font-semibold">
            YapBot
          </a>
          <button
            className="flex flex-row gap-3 rounded-lg text-white font-bold text-l hover:opacity-80 ease-in-out duration-300"
            onClick={exportTranscript}
          >
            Export{" "}
            <span className="my-auto">
              <FaSave />
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
