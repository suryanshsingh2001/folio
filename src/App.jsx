import React, { useRef, useLayoutEffect } from "react";
import Background from "./Components/Background";
import Foreground from "./Components/Foreground";
import Mask from "./Components/mask";
import Skills from "./Components/Skills.jsx";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";

const App = () => {
  const containerRef = useRef(null);

  return (
    // <ScrollContainer>
    // <LocomotiveScrollProvider
    //   options={{
    //     smooth: true,
    //     tablet: { smooth: true },
    //     smartphone: { smooth: true },
    //     // ... all available Locomotive Scroll instance options
    //   }}
    //   containerRef={containerRef}
    // >
      <main data-scroll-container ref={containerRef}>
        <div
          data-scroll-section
          className="w-full h-screen bg-zinc-800 object-cover relative"
        >
          <Background />
          <Foreground />
        </div>
        <div
          data-scroll-section
          className="w-full h-screen bg-zinc-800 object-cover relative"
        >
          <Mask />
        </div>
        <div
          data-scroll-section
          className="w-full h-screen bg-zinc-800 object-cover relative">
        <Skills/>
        </div>
      </main>
    // </LocomotiveScrollProvider>
    // </ScrollPage>
    // </ScrollContainer>
  );
};

export default App;
