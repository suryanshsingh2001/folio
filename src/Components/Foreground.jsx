import React from 'react'
import Card from './Card'

const Foreground = () => {
  return (
    <div className='absolute z-2 bg-black h-screen w-screen bg-opacity-50 text-white justify-between flex flex-col text-center'>
      <nav className='h-100 w-screen flex justify-between px-2 py-3 text-xl'>
          <h3>The Venture Agency</h3>
          <h4>Menu</h4>
      </nav>
      <h1 className='text-[20vw]'>
        {/* <span class='style.slide-up'>W</span><span class='style.slide-up'>e</span><span class='slide-up'>l</span><span class='slide-up'>c</span><span class='slide-up'>o</span><span class='slide-up'>m</span><span class='slide-up'>e</span> */}
        Folio
      </h1>
    </div>
  )
}

export default Foreground
