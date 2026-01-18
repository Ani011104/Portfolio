import React from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

import { styles } from "../styles";
import { StarsCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { shivagange, trekHills } from "../assets";

const TrekCard = ({ index, name, description, date, image }) => (
    <motion.div
        variants={fadeIn("up", "spring", index * 0.5, 0.75)}
        className='bg-[#F5ECD5] p-5 rounded-2xl sm:w-[360px] w-full border border-[#1e293b]/10 shadow-sm hover:shadow-md transition-all duration-300'
    >
        <div className='relative w-full h-[230px]'>
            <img
                src={image}
                alt={name}
                className='w-full h-full object-cover rounded-2xl'
            />
        </div>

        <div className='mt-5'>
            <h3 className='text-[#1e293b] font-bold text-[24px]'>{name}</h3>
            <p className='mt-2 text-[#1e293b]/80 text-[14px] leading-[24px]'>{description}</p>
        </div>

        <div className='mt-4 flex justify-between items-center'>
            <p className='text-[12px] text-[#1e293b]/60 italic'>{date}</p>
        </div>
    </motion.div>
);

const Beyond = () => {
    return (
        <div className='relative z-0 bg-[#A4B465] min-h-screen'>
            <div className='bg-transparent'>
                <section className={`relative w-full h-[60vh] mx-auto`}>
                    <div
                        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5 z-10`}
                    >
                        <div className='flex flex-col justify-center items-center mt-5'>
                            <div className='w-5 h-5 rounded-full bg-[#F0BB78] shadow-[0_0_15px_rgba(240,187,120,0.5)]' />
                            <div className='w-1 sm:h-40 h-20 bg-gradient-to-b from-[#F0BB78] to-transparent' />
                        </div>

                        <div>
                            <h1 className={`${styles.heroHeadText} text-[#1e293b]`}>
                                <Typewriter
                                    options={{
                                        strings: ["Life <span class='text-[#F0BB78]'>Beyond</span> Tech"],
                                        autoStart: true,
                                        loop: true,
                                        cursor: "|",
                                        delay: 50,
                                    }}
                                />
                            </h1>

                            <p className={`${styles.heroSubText} mt-2 !text-[#1e293b]`}>
                                When I'm not debugging code, I'm usually debugging my trail path. <br className='sm:block hidden' />
                                I climb mountains and steal their rocks (legally, I think).
                            </p>
                        </div>
                    </div>
                </section>
            </div>

            <div className={`${styles.paddingX} max-w-7xl mx-auto pb-20`}>
                <motion.div variants={textVariant()}>
                    <p className="sm:text-[18px] text-[14px] text-[#F0BB78] font-bold uppercase tracking-wider">My Adventures & Rock Collection</p>
                    <h2 className="text-[#1e293b] font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Completed Treks.</h2>
                </motion.div>

                <div className='mt-20 flex flex-wrap gap-7'>
                    <TrekCard
                        index={0}
                        name="Shivagange"
                        description="Basically a vertical staircase disguised as a mountain. The monkeys here are better at parkour than I am at JavaScript. Reached the top without crying (mostly)."
                        date="Completed in 2022, 2024"
                        status="Survivor"
                        rockType="Small mountain stone"
                        image={shivagange}
                    />
                    <TrekCard
                        index={1}
                        name="Netravati"
                        description="Lush greenery, mist, and enough leeches to start a medical clinic. The view from the peak is so good it almost made me forget my legs were on fire."
                        date="Completed in 2025"
                        status="Conquered"
                        rockType="Smooth river rock"
                        image={trekHills}
                    />
                </div>

                <motion.div
                    variants={fadeIn("up", "text", 1, 1)}
                    className="mt-16 p-8 rounded-3xl bg-[#F5ECD5] border border-[#1e293b]/10 shadow-sm"
                >
                    <h3 className="text-[#1e293b] font-bold text-[24px] mb-4">The Rock Collection 🪨</h3>
                    <p className="text-[#1e293b]/80 text-[16px] leading-[30px]">
                        Every mountain has a story, and I like to take a physical piece of that story home with me.
                        My desk is currently 40% code and 60% geological debris. If I ever go missing,
                        just follow the trail of increasingly exotic pebbles.
                    </p>
                </motion.div>
            </div>

            <StarsCanvas color="#F5ECD5" />
        </div>
    );
};

export default Beyond;
