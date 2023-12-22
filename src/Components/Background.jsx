import React from 'react'
import video from '../assets/background.mp4'

const Background = () => {
  return (
    <div className='relative'>
      <video src={video} autoPlay={true} muted loop className='z-1 w-screen h-screen absolute object-cover'>
        Your browser does not support the video tag.
      </video>
    </div>
  )
}

export default Background
