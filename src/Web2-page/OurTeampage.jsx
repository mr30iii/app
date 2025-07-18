import React from 'react';
import ElonMuskTwitterCEO from "../assets/ElonMuskTwitterCEO.jpg";
import VCEO from "../assets/VCEO.jpg";
import ManagingDirector from "../assets/ManagingDirector.jpg";
import { FaCamera } from "react-icons/fa6";
import { BiSolidCopy } from "react-icons/bi";
import { FaComments } from "react-icons/fa";

function OurTeampage() {
  return (
    <div className="bg-white">
      <div className="bg-neutral-950 py-12 px-4 md:px-8 rounded-bl-3xl rounded-tr-3xl">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-blue-900">OUR TEAM</h1>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 place-items-center">
            {/* Team Member 1 */}
            <div className="text-center max-w-xs w-full">
              <img
                src={ElonMuskTwitterCEO}
                alt="Elon Musk"
                className="h-24 w-24 sm:h-28 sm:w-28 mx-auto rounded-full bg-gray-300 mb-4"
              />
              <h2 className="text-2xl sm:text-3xl font-bold text-white">ELON MUSK</h2>
              <p className="text-blue-600 text-lg sm:text-xl py-2 font-bold">CEO & Founder</p>
              <p className="text-yellow-500 font-semibold text-base sm:text-lg">Web Developer & Programmer</p>
              <div className="flex justify-center gap-6 pt-5">
                <FaCamera className="text-white text-2xl" />
                <BiSolidCopy className="text-white text-2xl" />
                <FaComments className="text-white text-2xl" />
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="text-center max-w-xs w-full">
              <img
                src={VCEO}
                alt="Ramzay Alya"
                className="h-24 w-24 sm:h-28 sm:w-28 mx-auto rounded-full bg-gray-300 mb-4"
              />
              <h2 className="text-2xl sm:text-3xl font-bold text-white">RAMZAY ALYA</h2>
              <p className="text-blue-600 text-lg sm:text-xl py-2 font-bold">VCEO & Planner</p>
              <p className="text-yellow-500 font-semibold text-base sm:text-lg">IT Expert</p>
              <div className="flex justify-center gap-6 pt-5">
                <FaCamera className="text-white text-2xl" />
                <BiSolidCopy className="text-white text-2xl" />
                <FaComments className="text-white text-2xl" />
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="text-center max-w-xs w-full">
              <img
                src={ManagingDirector}
                alt="Janifer Okla"
                className="h-24 w-24 sm:h-28 sm:w-28 mx-auto rounded-full bg-gray-300 mb-4"
              />
              <h2 className="text-2xl sm:text-3xl font-bold text-white">JANIFER OKLA</h2>
              <p className="text-blue-600 text-lg sm:text-xl py-2 font-bold">Managing Director</p>
              <p className="text-yellow-500 font-semibold text-base sm:text-lg">Web Designer</p>
              <div className="flex justify-center gap-6 pt-5">
                <FaCamera className="text-white text-2xl" />
                <BiSolidCopy className="text-white text-2xl" />
                <FaComments className="text-white text-2xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurTeampage;
