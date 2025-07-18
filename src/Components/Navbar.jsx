import React from 'react'

const Navbar = () => {
  return (
    <div className='sm:flex sm:pt-8 items-center gap-x-24 px-14 pt-4 bg-green-100 '>
      <h1 className='font-bold text-3xl '>Web<span className='text-green-700'>Dev</span> </h1>      
 <ul className='flex gap-x-5 text-xl'>
  <li>Home</li>
  <li>Skills</li>
  <li>About</li>
  <li>projects</li>
</ul>
    </div>

   
 
  )
}
export default Navbar