import React from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const Terminal = () => {
  return (
    <div className='w-full max-w-4xl mx-auto mt-20 bg-black-100 rounded-lg shadow-card overflow-hidden border border-white/10'>
      {/* Terminal Header */}
      <div className='bg-tertiary px-4 py-2 flex items-center gap-2 border-b border-white/5'>
        <div className='w-3 h-3 rounded-full bg-[#ff5f56]'></div>
        <div className='w-3 h-3 rounded-full bg-[#ffbd2e]'></div>
        <div className='w-3 h-3 rounded-full bg-[#27c93f]'></div>
        <div className='flex-1 text-center text-secondary text-sm font-mono opacity-80'>
          anirudh@devops-station:~/skills
        </div>
      </div>

      {/* Terminal Body */}
      <div className='p-6 font-mono text-sm sm:text-base min-h-[300px] text-gray-300'>
        <Typewriter
          options={{
            delay: 30,
            cursor: "█",
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString('<span class="text-green-400">➜</span> <span class="text-blue-400">~</span> initializing_environment...<br/>')
              .pauseFor(500)
              .typeString('<span class="text-green-400">➜</span> <span class="text-blue-400">~</span> load_module "Cloud Architecture"<br/>')
              .pauseFor(300)
              .typeString('<span class="text-yellow-400">> [INFO] AWS & GCP Integration: ACTIVE</span><br/>')
              .typeString('<span class="text-yellow-400">> [INFO] Scalability: HIGH</span><br/>')
              .pauseFor(500)
              .typeString('<span class="text-green-400">➜</span> <span class="text-blue-400">~</span> load_module "DevOps Automation"<br/>')
              .pauseFor(300)
              .typeString('<span class="text-yellow-400">> [INFO] CI/CD Pipelines: OPTIMIZED</span><br/>')
              .typeString('<span class="text-yellow-400">> [INFO] Deployment Time: < 5min</span><br/>')
              .pauseFor(500)
              .typeString('<span class="text-green-400">➜</span> <span class="text-blue-400">~</span> load_module "Backend Engineering"<br/>')
              .pauseFor(300)
              .typeString('<span class="text-yellow-400">> [INFO] API Latency: LOW</span><br/>')
              .typeString('<span class="text-yellow-400">> [INFO] Security Protocols: ENFORCED</span><br/>')
              .pauseFor(500)
              .typeString('<span class="text-green-400">➜</span> <span class="text-blue-400">~</span> load_module "AI Integration"<br/>')
              .pauseFor(300)
              .typeString('<span class="text-yellow-400">> [INFO] Agents: DEPLOYED</span><br/>')
              .pauseFor(500)
              .typeString('<br/><span class="text-green-400">➜</span> <span class="text-blue-400">~</span> echo "System Status: All systems operational."')
              .start();
          }}
        />
      </div>
    </div>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I build things behind the scenes so they don’t fall apart in production.
        Cloud architecture, DevOps pipelines, backend systems, and AI agents that work more than they hallucinate.
        I like automation, clean design, and systems that stay quiet at 3 a.m.
        because silence usually means I did my job right.
      </motion.p>

      <motion.div
        variants={fadeIn("up", "spring", 0.5, 0.75)}
        className="w-full"
      >
        <Terminal />
      </motion.div>
    </>
  );
};

export default SectionWrapper(About, "about");
