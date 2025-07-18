import React from 'react';

const ContactUs = () => {
  return (
    <div className="bg-neutral-900 text-white min-h-screen flex flex-col">
      <div className="text-center py-8">
        <h1 className="text-4xl font-semibold italic border-b-2 inline-block px-4">Contact Us</h1>
      </div>

      <div className="flex flex-col lg:flex-row">
        {/* Left Side Text */}
        <div className="bg-black text-white w-full lg:w-1/2 p-8">
          <h2 className="text-yellow-400 text-2xl italic font-serif mb-4 font-bold">CONTACT US FORM</h2>
          <p className="text-sm italic text-gray-300 max-w-xl">
            Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Fugiat Assumenda Voluptates Corporis Quos Praesentium Ipsum Quod Itaque, Dolores Labore Facilis Soluta Modi, Perferendis Doloremque Saepe Dolorem Laudantium Velit Amet Elus Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Officiis Sunt, Delecti Quae, Mollitia Harum Fuga Aut Repellendus Veritatis Unde Quis Nam Fugit Quam Nihil Dignissimos Eligendi, Ipsum Error Quod Quasi? Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. Sequi Autem Facilis Pariatur Error Quia, Alias Fuga. Quidem, Quis, Odit Numquam Totam Minus Consequuntur Nulla Recusandae Dolorum Neque, In Reiciendis Aut.
          </p>
        </div>

        {/* Right Side Form */}
        <div className="bg-white text-black w-full lg:w-1/2 p-8">
          <form className="space-y-6">
            <div>
              <label className="block text-gray-800 font-semibold italic mb-1">YOUR NAME :</label>
              <input
                type="text"
                className="w-full border border-black p-2 rounded-md"
                placeholder="ENTER YOUR NAME......"
              />
            </div>

            <div>
              <label className="block text-gray-800 font-semibold italic mb-1">EMAIL ADDRESS :</label>
              <input
                type="email"
                className="w-full border border-black p-2 rounded-md"
                placeholder="ENTER YOUR EMAIL......"
              />
            </div>

            <div>
              <label className="block text-gray-800 font-semibold italic mb-1">MESSAGE :</label>
              <textarea
                rows="6"
                className="w-full border border-black p-2 rounded-md"
                placeholder="ENTER YOUR MSG....."
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-gray-700 hover:bg-gray-800 text-white italic font-semibold py-2 px-10 rounded-2xl border border-black transition duration-200"
            >
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
