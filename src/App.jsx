import React from 'react'
import Background from './Components/Background'
import Foreground from './Components/Foreground'
import Mask from './Components/mask'
import Skills from './Components/Skills.jsx'
import { ScrollContainer, ScrollPage} from "react-scroll-motion";


const App = () => {
  return (
    <ScrollContainer>
      <div id='root' className='w-full h-screen bg-zinc-800 object-cover relative'>
        <Background/>
        <Foreground/>
      </div>
      <div id='root' className='w-full min-h-screen bg-zinc-800 object-cover relative'>
        <Mask/>
      </div>
      <ScrollPage>
        <Skills/>
      </ScrollPage>
    </ScrollContainer>
  )
}

export default App
