import styles from '../end.module.css'
import { useRef, useEffect } from 'react';

export default function End() {

  const path = useRef(null);
  let progress = 0;
  let x = 0.5;
  let time = Math.PI / 2;
  let reqId = null;

  useEffect(() => {
    setPath(progress);
  }, [])

  const setPath = (progress) => {
    const width = window.innerWidth * 0.7;
    path.current.setAttributeNS(null, "d", `M0 250 Q${width * x} ${250 + progress}, ${width} 250`)
  }

  const lerp = (x, y, a) => x * (1 - a) + y * a

  const manageMouseEnter = () => {
    if(reqId){
      cancelAnimationFrame(reqId)
      resetAnimation()
    }
  }

  const manageMouseMove = (e) => {
    const { movementY, clientX } = e;
    const pathBound =  path.current.getBoundingClientRect();
    x = (clientX - pathBound.left) / pathBound.width;
    progress+= movementY
    setPath(progress);
  }

  const manageMouseLeave = () => {
    animateOut();
  }

  const animateOut = () => {
    const newProgress = progress * Math.sin(time);
    progress = lerp(progress, 0, 0.025);
    time+=0.2;
    setPath(newProgress);
    if(Math.abs(progress) > 0.75){
      reqId = requestAnimationFrame(animateOut);
    }
    else{
      resetAnimation();
    }
  }

  const resetAnimation = () => {
    time = Math.PI / 2;
    progress = 0;
  }

  const openLinkedInProfile = () => {
    // Replace 'https://www.linkedin.com/in/your-profile' with your LinkedIn profile URL
    window.open('https://www.linkedin.com/in/itsguneetsingh/', '_blank');
  };

  const openGitHubProfile = () => {
    // Replace 'https://www.linkedin.com/in/your-profile' with your LinkedIn profile URL
    window.open('https://github.com/itsguneetsingh', '_blank');
  };

  const openLeetcodeProfile = () => {
    // Replace 'https://www.linkedin.com/in/your-profile' with your LinkedIn profile URL
    window.open('https://leetcode.com/itsguneetsingh/', '_blank');
  };

  return (
    <div className='bg-zinc-800 text-white justify-center items-center h-screen w-full flex'>
        <div className='flex flex-col w-[70vw] flex-end'>
        <div className={styles.line}>
              <div onMouseEnter={() => {manageMouseEnter()}} onMouseMove={(e) => {manageMouseMove(e)}} onMouseLeave={() => {manageMouseLeave()}} className={styles.box}></div>
              <svg>
                <path ref={path}></path>
              </svg>
            </div>

            <div className='p-10'>
              <p className='text-2xl text-center'>Combining my front-end knowledge with React js. This is only my first project exploring the potential the library. I try to build digital products exactly as I design them, without shortcuts or simplifications.</p>
            </div>
            <div className='py-10 items-center flex justify-center'>
              <button className='bg-transparent m-3 text-xl text-[#e58920] border-[1px] rounded-2xl px-2 py-1' onClick={openLinkedInProfile}>LinkedIn</button>
              <button className='bg-transparent m-3 text-xl text-[#e58920] border-[1px] rounded-2xl px-2 py-1' onClick={openGitHubProfile}>Github</button>
              <button className='bg-transparent m-3 text-xl text-[#e58920] border-[1px] rounded-2xl px-2 py-1' onClick={openLeetcodeProfile}>LeetCode</button>
            </div>
            <div className='p-10'>
              <p className='text-lg text-center'>P.S. Did you try moving the line?</p>
            </div>
        </div>
    </div>
  )
}