import React, { useRef, useLayoutEffect } from "react";
import Background from "./Components/Background";
import Foreground from "./Components/Foreground";
import Mask from "./Components/mask";
import Projects from "./Components/Projects.jsx";
import End from "./Components/End.jsx";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";

const App = () => {
  const containerRef = useRef(null);

  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
        tablet: { smooth: true },
        smartphone: { smooth: true },
      }}
      containerRef={containerRef}
    >
      <main data-scroll-container ref={containerRef}>
        <div data-scroll-section className="w-full h-screen bg-zinc-800 object-cover relative">
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
          className="w-full h-[110vh] bg-zinc-800 object-cover relative">
        <Projects/>
        </div>

        <div data-scroll-section>
        <End/>
        </div>
      </main>
    </LocomotiveScrollProvider>
  );
};

export default App;
