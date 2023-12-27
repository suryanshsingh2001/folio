import React from 'react'
import Card from './Card'

const Foreground = () => {
  return (
    <div className='absolute z-2 bg-black h-screen w-screen bg-opacity-50 text-white justify-between flex flex-col text-center'>
      <nav className='h-100 w-screen flex justify-between px-2 py-3 text-xl'>
          <h3>Guneet Singh</h3>
          <h4>Menu</h4>
      </nav>
      <h1 className='text-[20vw]'>
        Folio
      </h1>
    </div>
  )
}

export default Foreground
