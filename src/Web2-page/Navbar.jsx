import React from 'react'


const Navbar = () => {
  return (
        <div>
          <div className="bg-gradient-to-r from-purple-600 via-purple-200 to-purple-600 p-6 flex justify-between items-center text-white">
            <h1 className="text-3xl font-bold italic ml-4">A B D U L L A H</h1>
    
            {/* Static Menu (Always Visible) */}
            <ul className="flex space-x-6 mr-4 text-2xl italic">
              <li className="hover:underline cursor-pointer">Home</li>
              <li className="hover:underline cursor-pointer">About Us</li>
              <li className="hover:underline cursor-pointer">Image Gallery</li>
              <li className="hover:underline cursor-pointer">Our Team</li>
              <li className="hover:underline cursor-pointer">Contact Us</li>
            </ul>
          </div>
        </div>
      );
    }
    

export default Navbar;