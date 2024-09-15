import { FaArrowRightLong } from "react-icons/fa6";

export default function Component() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100">
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img src="/logo.png" alt="" className="w-16 h-16" />
          <span className="text-xl font-semibold">YapBot</span>
        </div>
      </header>
      <main className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0 text-blue-900">
          <h1 className="text-2xl md:text-5xl font-bold mb-6">
            Never lose an argument again.
          </h1>
          <p className="text-xl mb-8">
            <span className=" font-extrabold">YapBot</span> is your personal AI
            debate coach. Do you suck at arguing? Do you have that one friend
            that you never seem to win an argument against? Don’t fear, YapBot
            is here!
          </p>
          <p className="text-xl mb-8">Ready, set, YAP!</p>
          <a href="/profile">
            <button className="bg-blue-900 hover:bg-blue-900 text-white px-16 py-4 rounded-full my-4">
              <div className="flex">
                Get Started
                <FaArrowRightLong className="my-auto ml-4" />
              </div>
            </button>
          </a>
        </div>
        <div className="md:w-1/2">
          <img
            src="/hero_landing_cropped.png"
            alt="Nutrient tracker interface"
            className=" justify-end h-auto rounded-xl"
          />
        </div>
      </main>
    </div>
  );
}
