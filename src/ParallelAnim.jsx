import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Lenis from 'lenis'

const Phrase = ({ src , font }) => {
  return (
    <div className="flex gap-5 items-center">
      <p className={`text-[5.5vw]  ${font}`} >FrontEnd Developer</p>
      <span className="relative overflow-hidden aspect-[4/2] rounded-full h-[7.5vw] hover:h-[13vw] cursor-pointer transition-all duration-500">
        <img className="w-full h-full object-cover" src={src}  alt="" />
      </span>
    </div>
  );
};

const Slider = ({ src, left, Progress, direction , font }) => {
  var dir = direction == "left" ? -1 : 1;
  const x = useTransform(Progress, [0, 1], [-250* dir , 250*dir]);
 
  return (
    <motion.div
      style={{ x, left }}
      className="flex relative whitespace-nowrap gap-[2vw]"
    >
      <Phrase src={src} font={font} />
      <Phrase src={src} font={font}/>
      <Phrase src={src} font={font}/>
      <Phrase src={src }font={font} />
      <Phrase src={src} font={font} />
    </motion.div>
  );
};

const ParallelAnim = () => {
 useEffect (  () =>{
       
      // Initialize Lenis
const lenis = new Lenis();

// Use requestAnimationFrame to continuously update the scroll
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
    
   
 },[])

  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  return (
    <main className="overflow-hidden relative">
      <div className="h-[100vh]" />
      <div ref={container} className="parent relative h-[100vh]">
        <Slider
          src="Flower-Crown.webp"
          left="-55%"
          Progress={scrollYProgress}
          direction="left"
          font="font-serif"
        />
        <Slider
          src="futuristic-c.jpg"
          left="-15%"
          Progress={scrollYProgress}
          direction="right"
         font="font-serif"
        />
        <Slider
          src="child.jpg"
          left="-40%"
          Progress={scrollYProgress}
          direction="left"
          font="font-serif"
        />
      </div>
      <div className="h-[100vh]" />
    </main>
  );
};

export default ParallelAnim;
