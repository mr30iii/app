import React from 'react';

const Contact = () => {
  return (
    <div className="bg-neutral-900 text-black w-full py-10 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-bold text-3xl md:text-4xl mb-6 text-blue-800 text-center">CONTACT US</h1>
        <form className="space-y-5">
          <div>
            <label className="block text-white font-serif italic mb-1">YOUR NAME:</label>
            <input
              type="text"
              className="w-full border border-black p-2 rounded-md"
              placeholder="ENTER YOUR NAME..."
            />
          </div>

          <div>
            <label className="block text-white font-serif italic mb-1">E-MAIL:</label>
            <input
              type="email"
              className="w-full border border-black p-2 rounded-md"
              placeholder="ENTER YOUR EMAIL..."
            />
          </div>

          <div>
            <label className="block text-white font-serif italic mb-1">MESSAGE:</label>
            <textarea
              rows="6"
              className="w-full border border-black p-2 rounded-md"
              placeholder="ENTER YOUR MESSAGE..."
            ></textarea>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <button
              type="reset"
              className="bg-blue-700 text-xl hover:bg-gray-800 text-white italic font-serif py-3 px-8 rounded-2xl border border-black transition duration-200 w-full sm:w-auto"
            >
              RESET
            </button>
            <button
              type="submit"
              className="bg-red-700 text-xl hover:bg-gray-800 text-white italic font-serif py-3 px-8 rounded-2xl border border-black transition duration-200 w-full sm:w-auto"
            >
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
