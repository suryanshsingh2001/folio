import React from 'react'
// import { FaRegFileAlt } from "react-icons/fa"

const Card = () => {
  return (
    <div className='relative h-72 w-60 rounded-[20px] bg-zinc-900/80 text-white p-5 overflow-hidden'>
      Icon
      {/* <FaRegFileAlt /> */}
      <p className='text-xs my-5'>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
      <div className='footer absolute w-full h-10 left-0 bottom-0 bg-slate-200'></div>
    </div>
  )
}

export default Card
