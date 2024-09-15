import { FaArrowRightLong } from "react-icons/fa6";

export default function Landing() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-green-50 to-green-100">
      <div className="text-center space-y-6">
        <div className="w-40 h-40 bg-navy-blue rounded-full flex items-center justify-center mx-auto mb-8">
          <div className="flex space-x-1 text-6xl">
            {/* {[...Array(3)].map((_, i) => (
              <div key={i} className="w-2 h-2 bg-white rounded-full" />
            ))} */}
            &#128483;
          </div>
        </div>
        <h1 className="text-3xl font-bold text-green-700">
          <div className="text-7xl mb-[-15px]">YapBot</div>
          <br />
          Your Debate Companion
        </h1>
        <div className="space-y-4">
          <button className="bg-green-500 hover:bg-green-600 text-white px-16 py-4 rounded-full m-4">
            <div className="flex">
                Get Started
                <FaArrowRightLong className="my-auto ml-4"/>
            </div>
          </button>
          
        </div>
      </div>
    </div>
  )
}