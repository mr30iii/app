import React from "react";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";

const Copyright = () => {
  return (
    <div className="bg-black pt-10 pb-16 text-white font-serif">
      <div className="container mx-auto px-5 flex flex-col lg:flex-row justify-between gap-10">
        {/* Left Column */}
        <div className="lg:w-1/3">
          <h1 className="text-3xl md:text-4xl italic text-blue-400">ABDULLAH</h1>
          <h2 className="text-3xl md:text-4xl italic text-blue-400">TECHNICAL</h2>
          <p className="mt-3 text-sm md:text-base">
            Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit. Aliquam Sapiente Possimus
            Blanditiis Numquam Nisi Veritatis Sint? Temporibus Maxime Inventore Nam, Harum Officiis
            Itaque Eius, Nobis Numquam Minima, Fuga Aspernatur Dicta.
          </p>
          <p className="mt-3 text-sm md:text-base">
            Ut, Nulla Ratione Velit Deserunt Suscipit Atque Error Maxime Deleniti Veniam Consectetur
            Facilis, Eius Dicta Distinctio Aut Asperiores! Ex Nemo Omnis Expedita.
          </p>
        </div>

        {/* Projects List */}
        <div className="lg:w-1/4">
          <h1 className="text-3xl md:text-4xl italic text-blue-400">PROJECTS</h1>
          <ul className="list-disc ml-5 mt-3 space-y-2 text-sm md:text-base">
            <li>Software Development</li>
            <li>Web Development</li>
            <li>Transport Company</li>
            <li>Shopping Mall</li>
            <li>7 Star Hotels</li>
          </ul>
        </div>

        {/* Image Gallery */}
        <div className="lg:w-1/2 flex flex-col gap-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <img src={img1} alt="img1" className="w-full sm:w-1/2 h-44 object-cover border-4 border-white" />
            <img src={img2} alt="img2" className="w-full sm:w-1/2 h-44 object-cover border-4 border-white" />
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <img src={img4} alt="img4" className="w-full sm:w-1/2 h-44 object-cover border-4 border-white" />
            <img src={img5} alt="img5" className="w-full sm:w-1/2 h-44 object-cover border-4 border-white" />
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-10 text-center text-sm md:text-lg px-4">
        <span className="block">
          Copyright © 2022 — All Rights Reserved. Design By
          <span className="text-blue-400 italic font-serif">ABDULLAH</span>
        </span>
      </div>
    </div>
  );
};

export default Copyright;
