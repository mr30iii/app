import React from 'react';

const Services = () => {
  return (
    <div className="bg-neutral-900 pt-9 pb-20 mb-16 rounded-tl-3xl rounded-br-3xl mr-2">
      <h2 className="text-center text-3xl font-bold text-blue-500 mb-10">BEST SERVICES</h2>

      <div className="flex flex-col lg:flex-row justify-center items-center gap-6 max-w-6xl mx-auto px-4">
        
        {/* Basic Plan */}
        <div className="bg-white text-gray-800 w-full max-w-xs lg:w-96 rounded-lg border-2">
          <div className="text-center px-14 py-10 bg-slate-300 border-b">
            <h3 className="text-3xl font-serif">BASIC</h3>
          </div>
          <div className="text-center py-8">
            <p className="text-2xl">
              <span className="text-gray-500 text-sm">$</span>
              <span className="font-thin text-6xl">20</span>
              <span className="text-sm text-gray-500">/ month</span>
            </p>
            <ul className="flex flex-col gap-y-3 mt-6 text-sm text-gray-700 font-semibold">
              <li>Responsive Website</li>
              <li>Free Name</li>
              <li>Mobile Friendly</li>
              <li>Webmail Free</li>
              <li>Customer Support</li>
            </ul>
          </div>
          <div className="p-6 border-t text-center">
            <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">Purchase</button>
          </div>
        </div>

        {/* Standard Plan */}
        <div className="bg-white text-gray-800 w-full max-w-xs lg:w-96 rounded-lg border-2">
          <div className="text-center px-14 py-10 bg-slate-300 border-b">
            <h3 className="text-3xl font-serif">STANDARD</h3>
          </div>
          <div className="text-center py-8">
            <p className="text-2xl">
              <span className="text-gray-500 text-sm">$</span>
              <span className="font-thin text-6xl">40</span>
              <span className="text-sm text-gray-500">/ month</span>
            </p>
            <ul className="flex flex-col gap-y-3 mt-6 text-sm text-gray-700 font-semibold">
              <li>Responsive Website</li>
              <li>Free Name</li>
              <li>Mobile Friendly</li>
              <li>Webmail Free</li>
              <li>Customer Support</li>
            </ul>
          </div>
          <div className="p-6 border-t text-center">
            <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">Purchase</button>
          </div>
        </div>

        {/* Unlimited Plan */}
        <div className="bg-white text-gray-800 w-full max-w-xs lg:w-96 rounded-lg border-2">
          <div className="text-center px-14 py-10 bg-slate-300 border-b">
            <h3 className="text-3xl font-serif">UNLIMITED</h3>
          </div>
          <div className="text-center py-8">
            <p className="text-2xl">
              <span className="text-gray-500 text-sm">$</span>
              <span className="font-thin text-6xl">60</span>
              <span className="text-sm text-gray-500">/ month</span>
            </p>
            <ul className="flex flex-col gap-y-3 mt-6 text-sm text-gray-700 font-semibold">
              <li>Responsive Website</li>
              <li>Free Name</li>
              <li>Mobile Friendly</li>
              <li>Webmail Free</li>
              <li>Customer Support</li>
            </ul>
          </div>
          <div className="p-6 border-t text-center">
            <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">Purchase</button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Services;
