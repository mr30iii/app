import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="bg-gradient-to-r from-purple-600 via-purple-200 to-purple-600 p-6 flex justify-between items-center text-white">
        <h1 className="text-3xl font-bold italic ml-4">A B D U L L A H</h1>

        {/* Hamburger Icon */}
        <div className="md:hidden mr-4">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 mr-4 text-2xl italic">
          <li className="hover:underline cursor-pointer">Home</li>
          <li className="hover:underline cursor-pointer">About Us</li>
          <li className="hover:underline cursor-pointer">Image Gallery</li>
          <li className="hover:underline cursor-pointer">Our Team</li>
          <li className="hover:underline cursor-pointer">Contact Us</li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-purple-500 text-white flex flex-col items-center space-y-4 py-4 text-xl italic">
          <li className="hover:underline cursor-pointer">Home</li>
          <li className="hover:underline cursor-pointer">About Us</li>
          <li className="hover:underline cursor-pointer">Image Gallery</li>
          <li className="hover:underline cursor-pointer">Our Team</li>
          <li className="hover:underline cursor-pointer">Contact Us</li>
        </ul>
      )}
    </div>
  );
}


export default Navbar;