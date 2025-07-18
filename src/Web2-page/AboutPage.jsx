// AboutUs.jsx

import React from 'react';
import { HiComputerDesktop } from 'react-icons/hi2';
import { FaMedal } from 'react-icons/fa';
import { IoPencilOutline } from 'react-icons/io5';

const AboutPage = () => {
  return (
    <div className="bg-neutral-900 mt-10 mb-40 pb-24 pt-12">
      <h2 className="text-4xl font-semibold italic text-center text-blue-600">
        ABOUT US
      </h2>

      <div className="mt-20 grid md:grid-cols-3 gap-10 justify-items-center text-center px-4">
        {/*-------------------------------------Card 1------------------------*/}
        <div>
          <HiComputerDesktop className="text-white text-5xl mx-auto" />
          <h1 className="text-white font-bold text-2xl mt-4">Easy to Use</h1>
          <p className="text-white mt-3 max-w-xs mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, consequatur suscipit libero modi sapiente incidunt.
          </p>
        </div>

        {/*-------------------------------------Card 2------------------------*/}
        <div>
          <FaMedal className="text-white text-5xl mx-auto" />
          <h1 className="text-white font-bold text-2xl mt-4">Awesome Design</h1>
          <p className="text-white mt-3 max-w-xs mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, consequatur suscipit libero modi sapiente incidunt.
          </p>
        </div>

        {/*-------------------------------------Card 3------------------------*/}
        <div>
          <IoPencilOutline className="text-white text-5xl mx-auto" />
          <h1 className="text-white font-bold text-2xl mt-4">Easy To Customize</h1>
          <p className="text-white mt-3 max-w-xs mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, consequatur suscipit libero modi sapiente incidunt.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
