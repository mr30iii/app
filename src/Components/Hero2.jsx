import React from 'react'
import { FaHtml5 } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { FaReact } from "react-icons/fa";

const Hero2 = () => {
  return (
    <div className='px-10 bg-gray-100 py-24 '>
      <h3 className=' font-semibold text-3xl border-gray-200 pb-4 '>Tech Stacks</h3>
      <hr />
    <div className=' pt-20 gap-16 max-w-[90vw] text-justify grid md:grid-cols-2 lg:grid-cols-3 pl-5'>
      {/* div1 */}
     <div className='max-w-[80vw]'>
      <FaHtml5 className='text-7xl text-green-300'/>
     <h3 className='font-semibold py-3'>HTML&&CSS</h3>
     <p>
      Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.
     </p>
     </div>
     {/* div2 */}
     <div className='max-w-[80vw]'>
      <FaJsSquare className='text-7xl text-green-300'/>
      <h3 className='font-semibold py-3'>JavaScript</h3>
     <p>
      Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality
     </p>
     </div>
     {/* div3 */}
     <div className='max-w-[80vw]'>
      <FaReact className='text-7xl text-green-300'/>
      <h3 className='font-semibold py-3'>JavaScript</h3>
     <p>
      Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality
     </p>
     </div>
     </div>

     </div>
  )
}

export default Hero2;