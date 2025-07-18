import React from 'react';
import company from "../assets/company.jpg";
import img2 from "../assets/img2.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import img7 from "../assets/img7.jpg";
import img9 from "../assets/img9.jpg";
import img1 from "../assets/img1.jpg";
import img3 from "../assets/img3.jpg";
import img6 from "../assets/img6.jpg";

const ImageGallery = () => {
  return (
    <div className='bg-gray-800 pb-12 pt-7'>
      <div>
        <h2 className="text-4xl font-semibold italic text-center text-white">Image Gallery</h2>
        <hr className="w-80 min-h-0.5 mx-auto bg-white mt-3" />
      </div>

      <div className="flex flex-wrap justify-center gap-6 px-4 mt-12">
        <img src={company} alt="" className="w-full sm:w-[48%] lg:w-[30%] h-64 object-cover border rounded-lg opacity-40 hover:opacity-100 hover:scale-105 transition duration-500 shadow-md cursor-pointer" />
        <img src={img2} alt="" className="w-full sm:w-[48%] lg:w-[30%] h-64 object-cover border rounded-lg opacity-40 hover:opacity-100 hover:scale-105 transition duration-500 shadow-md cursor-pointer" />
        <img src={img4} alt="" className="w-full sm:w-[48%] lg:w-[30%] h-64 object-cover border rounded-lg opacity-40 hover:opacity-100 hover:scale-105 transition duration-500 shadow-md cursor-pointer" />
        <img src={img5} alt="" className="w-full sm:w-[48%] lg:w-[30%] h-64 object-cover border rounded-lg opacity-40 hover:opacity-100 hover:scale-105 transition duration-500 shadow-md cursor-pointer" />
        <img src={img7} alt="" className="w-full sm:w-[48%] lg:w-[30%] h-64 object-cover border rounded-lg opacity-40 hover:opacity-100 hover:scale-105 transition duration-500 shadow-md cursor-pointer" />
        <img src={img9} alt="" className="w-full sm:w-[48%] lg:w-[30%] h-64 object-cover border rounded-lg opacity-40 hover:opacity-100 hover:scale-105 transition duration-500 shadow-md cursor-pointer" />
        <img src={img3} alt="" className="w-full sm:w-[48%] lg:w-[30%] h-64 object-cover border rounded-lg opacity-40 hover:opacity-100 hover:scale-105 transition duration-500 shadow-md cursor-pointer" />
        <img src={img1} alt="" className="w-full sm:w-[48%] lg:w-[30%] h-64 object-cover border rounded-lg opacity-40 hover:opacity-100 hover:scale-105 transition duration-500 shadow-md cursor-pointer" />
        <img src={img6} alt="" className="w-full sm:w-[48%] lg:w-[30%] h-64 object-cover border rounded-lg opacity-40 hover:opacity-100 hover:scale-105 transition duration-500 shadow-md cursor-pointer" />
      </div>
    </div>
  );
};

export default ImageGallery;
