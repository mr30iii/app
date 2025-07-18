import React from 'react';
import ElonMuskTwitterCEO from "../assets/ElonMuskTwitterCEO.jpg";
import ManagingDirector from "../assets/ManagingDirector.jpg";
import VCEO from "../assets/VCEO.jpg";

const OurTeam = () => {
  return (
    <div className='bg-neutral-800 py-12 px-4'>
      <div className="text-center mb-12">
        <h2 className="text-4xl font-semibold italic text-white">Our Team</h2>
        <hr className="w-52 min-h-0.5 mx-auto bg-white mt-2" />
      </div>

      {/* Responsive Card Container */}
      <div className="flex flex-wrap justify-center gap-10">
        {/* Card 1 */}
        <div className="bg-transparent border border-white rounded-lg hover:scale-105 transition duration-500 w-full sm:w-[90%] md:w-96">
          <img src={ElonMuskTwitterCEO} alt="Elon Musk" className="w-full h-80 object-cover rounded-t-lg" />
          <div className="text-center py-4">
            <h1 className="font-serif text-white font-bold italic">Elon Musk</h1>
            <h2 className="italic text-white font-bold">CEO & Founder</h2>
            <h3 className="italic text-white font-bold">WEB Developer & Programmer</h3>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-black border border-dotted border-white rounded-lg hover:scale-105 transition duration-500 w-full sm:w-[90%] md:w-96">
          <img src={VCEO} alt="Hira Virk" className="w-full h-80 object-cover rounded-t-lg" />
          <div className="text-center py-4">
            <h1 className="font-serif text-white font-bold italic">Hira Virk</h1>
            <h2 className="italic text-white font-bold">VCEO & Planner</h2>
            <h3 className="italic text-white font-bold">IT Expert</h3>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-transparent border border-white rounded-lg hover:scale-105 transition duration-500 w-full sm:w-[90%] md:w-96">
          <img src={ManagingDirector} alt="Mahrukh Jutt" className="w-full h-80 object-cover rounded-t-lg" />
          <div className="text-center py-4">
            <h1 className="font-serif text-white font-bold italic">Mahrukh Jutt</h1>
            <h2 className="italic text-white font-bold">Managing & Director</h2>
            <h3 className="italic text-white font-bold">WEB Designer</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
