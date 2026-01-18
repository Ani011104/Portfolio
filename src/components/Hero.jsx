import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import herobg from "../assets/herobg.png";


const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`} style={{ backgroundImage: `url(${herobg})`, backgroundSize: "cover", backgroundPosition: "center" }}>
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5 z-10 pointer-events-none`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div className="pointer-events-auto">
          <h1 className={`${styles.heroHeadText} text-white`}>
            <Typewriter
              options={{
                strings: ["Hi, I'm <span class='text-[#915EFF]'>Anirudh S</span>"],
                autoStart: true,
                loop: true,
                cursor: "|",
                wrapperClassName: "inline-block",
                delay: 50,
              }}
            />
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            DevOps | Cloud Architect | Backend Developer <br className='sm:block hidden' />

          </p>

          <div className="mt-8 relative group w-fit">
            <a
              href="https://drive.google.com/file/d/1N5J03Q4YOE8JFB1WJcwpC_G3G_EUGkPB/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-8 rounded-xl outline-none w-fit text-white font-bold border-[1px] border-[#915eff] bg-transparent hover:bg-[#915eff] hover:shadow-[0_0_20px_rgba(145,94,255,0.5)] transition-all duration-300 flex items-center gap-2"
            >
              Resume
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </svg>
            </a>
            <span className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-white text-primary text-xs font-bold py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
              plz hire me 🥺
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-white"></div>
            </span>
          </div>
        </div>
      </div>

      <ComputersCanvas />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
