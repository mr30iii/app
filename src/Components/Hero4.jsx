import React from 'react'
import redux from '../assets/redux.png'
import tour from '../assets/tour.png'
import unsplash from '../assets/unsplash.png'
import { FaGlobe } from "react-icons/fa";

const Hero4 = () => {
  return (
    <div className='bg-gray-50 pb-20'>
      <div className="flex flex-col gap-y-4 py-12 px-6 sm:px-10 md:px-16 lg:px-24">
        <h3 className="font-semibold text-2xl sm:text-3xl tracking-wider">Web Creations</h3>
        <hr className="border-gray-300"/>
      </div>

      {/* Grid Section */}
      <div className='flex justify-center items-center px-4 sm:px-8'>
        <div className='grid gap-y-12 gap-x-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full max-w-7xl'>
          
          {/* Card 1 */}
          <div className='flex flex-col gap-y-6 w-full rounded-lg border bg-white hover:scale-105 transition-transform duration-300 cursor-pointer shadow-md'>
            <img src={redux} alt="Redux Project" className='rounded-lg object-cover' />
            <div className='p-5 flex flex-col gap-y-4 text-justify'>
              <h4 className='font-semibold text-lg'>First Project</h4>
              <p>Experience Redux's power in action with this dynamic shopping cart. Add, remove, and adjust item quantities seamlessly while prices and totals update in real-time.</p>
              <div className="text-3xl pb-4 hover:text-black transition duration-500 text-slate-500">
                <FaGlobe />
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className='flex flex-col gap-y-6 w-full rounded-lg border bg-white hover:scale-105 transition-transform duration-300 cursor-pointer shadow-md'>
            <img src={tour} alt="Tour Project" className='rounded-lg object-cover' />
            <div className='p-5 flex flex-col gap-y-4 text-justify'>
              <h4 className='font-semibold text-lg'>Second Project</h4>
              <p>Explore dynamic content manipulation with this project featuring a card displaying text. Increase word count with a click, revealing more content. Easily remove the card for a streamlined user experience.</p>
              <div className="text-3xl pb-4 hover:text-black transition duration-500 text-slate-500">
                <FaGlobe />
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className='flex flex-col gap-y-6 w-full rounded-lg border bg-white hover:scale-105 transition-transform duration-300 cursor-pointer shadow-md'>
            <img src={unsplash} alt="Unsplash Project" className='rounded-lg object-cover' />
            <div className='p-5 flex flex-col gap-y-4 text-justify'>
              <h4 className='font-semibold text-lg'>Third Project</h4>
              <p>Discover stunning visuals with ease using this project powered by the Unsplash API. Utilizing Axios, search for images effortlessly through a sleek search bar interface.</p>
              <div className="text-3xl pb-4 hover:text-black transition duration-500 text-slate-500">
                <FaGlobe />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Hero4
