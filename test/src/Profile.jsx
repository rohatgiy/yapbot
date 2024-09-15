import { useContext, useState } from "react";
import { MessageContext } from "./App";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom"; // Import useNavigate



export default function StyleForm() {
   const { selectedStyle, setSelectedStyle, givenTopic, setGivenTopic } = useContext(MessageContext);
   const [ customStyle, setCustomStyle ] = useState("");
   const navigate = useNavigate(); // Initialize the navigate hook


  const handleSubmit = (event) => {
    event.preventDefault();
    // event.preventDefault();
    // const formData = new FormData(event.currentTarget);
    
    // const topic = formData.get("topic");
    // setGivenTopic((state) => {topic}); // Set the topic in the context
    // const customStyle = formData.get("customStyle");
    // const style = formData.get("style");
    if (selectedStyle === "Custom") {
      setSelectedStyle((state) => customStyle);
      console.log("CUSTOM TAPPED")
    } 
    //  // Set the style in the context
    // console.log(Object.fromEntries(formData));
    console.log({ givenTopic, selectedStyle });
    navigate("/yap");
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 text-blue-900">
        <form onSubmit={handleSubmit} className="max-w-[45%] mx-auto">
          {/* Topic input */}
          <div className="">
            <label htmlFor="topic" className="block pt-12 text-5xl font-bold mb-6">
              Topic
            </label>
            <textarea
            onChange={(e) => setGivenTopic((state) => e.target.value)}
              id="topic"
              name="topic"
              placeholder="Enter your topic here"
              required
              className="w-full p-2 border rounded"
              value={givenTopic}
            />
          </div>
          {/* Style selection */}
          <div className="space-y-2">
            <label className="block pt-12 text-5xl font-bold mb-6">Debate Style</label>
            <div className="space-y-2">
              {["Contextual", "Formal", "Casual", "Custom"].map((style, index) => (
                <div
                  key={style}
                  className={`border p-4 rounded cursor-pointer ${
                    selectedStyle === style ? "border-blue-500" : ""
                  }`}
                  onClick={() => setSelectedStyle((state) => style)}
                >
                  <label
                    htmlFor={`style-${index}`}
                    className="flex items-center justify-between"
                  >
                    <span>{style}</span>
                    {selectedStyle === style && (
                      <span className="w-5 h-5 text-blue-500">&#10003;</span>
                    )}
                  </label>
                  <input
                    type="radio"
                    id={`style-${index}`}
                    name="style"
                    value={style}
                    checked={selectedStyle === style}
                    onChange={(e) => setSelectedStyle((state) => e.target.value)}
                    className="hidden"
                  />
                </div>
              ))}
            </div>
          </div>
          {selectedStyle === "Custom" && (
            <div className="my-6">
              <input
                onChange={(e) => setCustomStyle(e.target.value)}
                id="customStyle"
                name="customStyle"
                placeholder="Describe your custom style"
                className="w-full p-2 border rounded"
                value={customStyle}
              />
            </div>
          )}
      
              <button type="submit" className="w-full bg-blue-900 hover:bg-blue-900 text-white px-16 py-4 rounded-full my-4 text-center flex justify-center">
                <div className="flex">
                Submit
                </div>
              </button>
        </form>
      </div>
    </>
  );
}