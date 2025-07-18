import React from 'react'
import { SiVerizon } from "react-icons/si";
import { ImCross } from "react-icons/im";

const OurServices = () => {
  return (
    <div>
      <div className='bg-neutral-900 pb-14 pt-6'>
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold italic text-white">Our Services</h2>
          <hr className="w-52 min-h-0.5 mx-auto bg-white mt-2" />
        </div>

        {/*---------------------- FLEX WRAPPER ----------------------*/}
        <div className='flex flex-col lg:flex-row gap-10 justify-center items-center px-4'>

          {/*---------------------- CARD 1 ----------------------*/}
          <div className=" p-6 flex flex-col bg-black border border-white rounded-lg hover:scale-105 transition duration-500 w-full sm:w-[90%] md:w-96">
            <h2 className="bg-white text-black px-28 font-semibold mb-4 italic text-center">FREE</h2>
            <h3 className="rounded-lg text-center py-4 font-serif text-white italic text-3xl font">Price</h3>
            <h3 className="rounded-lg text-center pb-10 font-serif text-white italic text-2xl">$0.00/Month</h3>
            <hr />
            <p className='font-mono italic text-white py-4 text-sm text-justify'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa voluptatum iusto a facilis minus ex dicta eaque nesciunt reprehenderit eligendi corrupti, qui culpa quas quo consectetur dolores id? Ipsum, incidunt.
            </p>
            <div className='flex justify-between mt-14'>
              <p className='text-white font-serif'>Get Information</p>
              <SiVerizon className='text-white' />
            </div>
            <div className='flex justify-between my-8'>
              <p className='text-white font-serif'>Services</p>
              <ImCross className='text-white' />
            </div>
            <div className='flex justify-between'>
              <p className='text-white font-serif'>Packages</p>
              <ImCross className='text-white' />
            </div>
          </div>

          {/*---------------------- CARD 2 ----------------------*/}
          <div className=" p-6 flex flex-col bg-black border border-white rounded-lg hover:scale-105 transition duration-500 w-full sm:w-[90%] md:w-96">
            <h2 className="bg-white text-black px-20 font-semibold mb-4 italic text-center">PROFESSIONAL</h2>
            <h3 className="rounded-lg text-center py-4 font-serif text-white italic text-3xl font">Price</h3>
            <h3 className="rounded-lg text-center pb-10 font-serif text-white italic text-2xl">$0.00/Month</h3>
            <hr />
            <p className='font-mono italic text-white py-4 text-sm text-justify'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa voluptatum iusto a facilis minus ex dicta eaque nesciunt reprehenderit eligendi corrupti, qui culpa quas quo consectetur dolores id? Ipsum, incidunt.
            </p>
            <div className='flex justify-between mt-14'>
              <p className='text-white font-serif'>Get Information</p>
              <SiVerizon className='text-white' />
            </div>
            <div className='flex justify-between my-8'>
              <p className='text-white font-serif'>Services</p>
              <SiVerizon className='text-white' />
            </div>
            <div className='flex justify-between'>
              <p className='text-white font-serif'>Packages</p>
              <SiVerizon className='text-white' />
            </div>
          </div>

          {/*---------------------- CARD 3 ----------------------*/}
          <div className=" p-6 flex flex-col bg-black border border-white rounded-lg hover:scale-105 transition duration-500 w-full sm:w-[90%] md:w-96">
            <h2 className="bg-white text-black px-24 font-semibold mb-4 italic text-center">ENTERPRISE</h2>
            <h3 className="rounded-lg text-center py-4 font-serif text-white italic text-3xl font">Price</h3>
            <h3 className="rounded-lg text-center pb-10 font-serif text-white italic text-2xl">$0.00/Month</h3>
            <hr />
            <p className='font-mono italic text-white py-4 text-sm text-justify'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa voluptatum iusto a facilis minus ex dicta eaque nesciunt reprehenderit eligendi corrupti, qui culpa quas quo consectetur dolores id? Ipsum, incidunt.
            </p>
            <div className='flex justify-between mt-14'>
              <p className='text-white font-serif'>Get Information</p>
              <SiVerizon className='text-white' />
            </div>
            <div className='flex justify-between my-8'>
              <p className='text-white font-serif'>Services</p>
              <SiVerizon className='text-white' />
            </div>
            <div className='flex justify-between'>
              <p className='text-white font-serif'>Packages</p>
              <ImCross className='text-white' />
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default OurServices;