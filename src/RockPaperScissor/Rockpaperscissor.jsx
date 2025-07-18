import React from 'react'
import rock from"../assets/Rock.png"
import paper from"../assets/paper.png"
import scissors from"../assets/scissors.png"
const Rockpaperscissor = () => {
  return (
    <div className="w-[screen] bg-white text-center">
      <div className="bg-[#0b1e34] text-white py-4 text-2xl font-bold">
        Rock Paper Scissors
      </div>
      <div className="flex justify-center items-center gap-12 my-12">
        <button className="w-24 h-24 rounded-full bg-pink-300 flex items-center justify-center text-4xl object-cover">
          <img src={rock} alt="" className='w-24 h-24 rounded-full'/>
        </button>
        <button className="w-24 h-24 rounded-full bg-pink-300 flex items-center justify-center text-4xl object-cover">
         <img src={paper} alt="" className='w-24 h-24 rounded-full'/>
        </button>
        <button className="w-24 h-24 rounded-full bg-pink-300 flex items-center justify-center text-4xl object-cover">
          <img src={scissors} alt="" className='w-24 h-24 rounded-full'/>
        </button>
      </div>
      <div className="flex justify-center gap-24 items-center my-8">
        <div className="text-center">
          <p className="text-4xl font-semibold">0</p>
          <p className="mt-2">You</p>
        </div>
        
        <div className="text-center">
          <p className="text-4xl font-semibold">2</p>
          <p className="mt-2">Comp</p>
        </div>
      </div>
      <div className="mt-8">
        <p className="bg-[#09192b] inline-block text-white py-2 px-6 rounded-lg text-lg">
          <b>Game was Draw. Play again.</b>
        </p>
      </div>
      <script src="roack-papersissor.js"></script>
    </div>
  )
}

export default Rockpaperscissor