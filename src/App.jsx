import React, { useRef } from 'react'
import Background from './Components/Background'
import Foreground from './Components/Foreground'
import Mask from './Components/mask'
import Skills from './Components/Skills.jsx'
// import { ScrollContainer, ScrollPage} from "react-scroll-motion";
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'

const App = () => {

  const containerRef = useRef(null)

  return (
    // <ScrollContainer>
        <LocomotiveScrollProvider
      options={
        {
          smooth: true,
          // ... all available Locomotive Scroll instance options 
        }
      }
      watch={
        [
          //..all the dependencies you want to watch to update the scroll.
          //  Basicaly, you would want to watch page/location changes
          //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
        ]
      }
      containerRef={containerRef}
    >
    <main data-scroll-container ref={containerRef}>
      <div data-scroll-section className='w-full h-screen bg-zinc-800 object-cover relative'>
        <Background/>
        <Foreground/>
      </div>
      <div data-scroll-section className='w-full h-screen bg-zinc-800 object-cover relative'>
        <Mask/>
      </div>
      {/* <ScrollPage> */}
      <div data-scroll-section>
        <Skills/>
      </div>
      </main>
      </LocomotiveScrollProvider>
      // </ScrollPage>
    // </ScrollContainer>
  )
}

export default App
