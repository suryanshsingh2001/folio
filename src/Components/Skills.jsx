import {motion, useTransform, color } from 'framer-motion'
import React from 'react'
import { Animator, Move} from "react-scroll-motion";

const Skills = () => {
  const x = window.innerWidth;
  const y = window.innerHeight;
  return (
    
    <div id='root' className='w-full h-[200vh] bg-zinc-800 object-cover relative flex justify-center'>
      <Animator animation={ Move(-x, 0, 20*x, 0)}>
      <span className='text-2xl text-white text-center'>
        Let's Try this one more time
      </span>
      </Animator>
    </div>
  )
}

export default Skills

// export const Title = styled(motion.h1)`
//   font-family: var(--font-primary);
//   color: white;
//   font-size: 20em;
//   z-index: 1;
//   margin: 0;
//   white-space: nowrap;
//   margin-top: auto;
//   transition: all 2s ease-in-out;
// `;