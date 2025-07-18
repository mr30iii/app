import React from 'react';
import company from "../assets/company.jpg";

const AboutUs = () => {
  return (
    <div className="bg-black py-20">
      <div className="px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold italic text-white">About Us</h2>
          <hr className="w-52 min-h-0.5 mx-auto bg-white mt-2" />
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-evenly gap-8">
          <img
            src={company}
            alt="Company"
            className="w-full max-w-md h-auto border border-dotted border-white rounded"
          />

          <div className="text-white text-base sm:text-lg italic font-semibold max-w-xl px-2">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda, animi,
              voluptas alias mollitia consequuntur ut, dolor excepturi minus doloribus
              iste explicabo doloremque! Corporis sequi sit fugiat optio est maxime neque.
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Recusandae accusantium voluptatibus magnam facilis quaerat repellat corporis saepe
              quam laboriosam voluptate iusto, perferendis possimus. Est accusantium laborum
              vitae reprehenderit cum. Voluptas?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
