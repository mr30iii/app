import React from "react";
import codeimage from "../assets/codeimage.svg";
const Hero2 = () => {
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-20 gap-y-14 py-20 px-10 max-w-[90vw] items-center">
        <img src={codeimage} alt="No Image"className="w-[340px] mx-auto"/>
        <div className=" flex flex-col justify-center items-center">
                                                      {/* for line spacing => leading-loose */}
          <div className="flex flex-col gap-y-4 max-w-[80vw] leading-loose text-justify">
            <h3 className="font-semibold text-3xl tracking-wider">Code And Coffee</h3>
            <hr className="border-gray-300 pb-2" />
            <p className="text-gray-500 text-pretty">
              I'm Ahmad, a seasoned web developer with expertise in React and
              component-based projects. With a year of experience, I've mastered
              Redux for global state management and wield Axios for seamless
              data fetching. Let's collaborate and transform your ideas into
              digital brilliance!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero2;