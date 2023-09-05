import React from 'react'

export default function SearchSection() {
  return (
    <div className='relative rounded-[40px] shadow-red-500 overflow-hidden text-gray-600 bg-white w-96'>
        <input type="search" className='focus:outline-none w-full h-22 bg-slate-500' placeholder='search in' />
        <div className="absolute h-12 w-12 rounded-3xl top-2 left-2 px-4  bg-black">🍳</div>
   </div>
  )
}
