import React from "react";
import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaTwitterSquare } from "react-icons/fa";
import mobileimage from "../assets/mobileimage.svg";
import { FaFacebook } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="bg-green-100 py-24 px-12 ">
      <div className="">
      <div className="flex justify-between items-center max-w-5xl">
        <div className="flex flex-col gap-y-3">
          <h1 className="text-6xl font-bold">I'm Abdullah</h1>
          <h3 className="text-3xl text-gray-700 pt-2">Front-End Developer</h3>
          <p className="tracking-wider text-gray-700">Turning Ideas Into Interactive Reality</p>
          <div className="flex gap-x-4 pt-1 text-4xl text-slate-500">
            <FaSquareGithub className="hover:text-black transition duration-500"/>
            <FaLinkedin className="hover:text-black transition duration-500"/>
            <FaTwitterSquare className="hover:text-black transition duration-500"/>
          </div>
        </div>
        <img src={mobileimage} alt="No Image" className="w-80 hidden md:flex lg:w-[400px]"/>
    
      
      </div>
      </div>
    </div>
  );
};

export default Hero;