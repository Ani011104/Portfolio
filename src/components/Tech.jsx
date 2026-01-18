import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";

const TechCard = ({ technology }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className='w-28 h-28 relative group cursor-pointer'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute -top-14 left-1/2 -translate-x-1/2 bg-tertiary text-white text-sm py-2 px-3 rounded-lg opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 transition-all duration-300 pointer-events-none whitespace-nowrap z-20 shadow-card border border-white/10">
        <p className="font-bold text-center">{technology.name}</p>
        <p className="text-xs text-secondary italic text-center">{technology.description}</p>
      </div>

      {isHovered ? (
        <BallCanvas icon={technology.icon} />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-tertiary rounded-full shadow-card border-2 border-white/5 hover:border-white/20 transition-all duration-300">
          <img
            src={technology.icon}
            alt={technology.name}
            className="w-16 h-16 object-contain"
          />
        </div>
      )}
    </div>
  );
};

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          Things I Break (and Fix)
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Weapons of Choice.
        </h2>
      </motion.div>

      <div className='flex flex-row flex-wrap justify-center gap-10 mt-20'>
        {technologies.map((technology) => (
          <TechCard key={technology.name} technology={technology} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
