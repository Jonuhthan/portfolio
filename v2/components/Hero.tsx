'use client';

import React from 'react'
import Image from 'next/image';
import { Link } from "react-scroll/modules";
import { HiArrowDown } from "react-icons/hi"
import { AiOutlineGithub, AiOutlineLinkedin, AiOutlineMail } from "react-icons/ai";

const Hero = () => {
  return (
    <section id='home' className='min-h-screen flex flex-col gap-10 items-center justify-center pt-24'>
        {/* container for entire hero section content */}
        <div className="flex flex-col max-w-4xl text-center items-center justify-center animate-fadeIn animation-delay-4 md:flex-row md:space-x-4 md:text-left">

            {/* container for profile picture */}
            <div className="md:mt-2 md:w-1/2">
                <Image className='rounded-3xl shadow-2xl' src="/profile.jpg" alt="profile picture" width={350} height={350}/>
            </div>

            <div className='md:mt-2 md:w-1/2'>
                <h1 className='font-bold text-5xl mt-6 md:text-7xl md:mt-0'>Hello, I&#39;m Jonathan!</h1>
                <p className="text-lg mt-4 mb-6 md:text-xl">
                    I&#39;m a passionate {" "}
                    <span className='font-semibold text-sky-500'>
                    computer science student {" "}
                    </span>
                    interested in {" "}
                    <span className='font-semibold text-sky-500'>
                    software engineering 
                    </span>
                    , {" "}
                    <span className='font-semibold text-sky-500'>
                    data science
                    </span>  
                    , and {" "}
                    <span className='font-semibold text-sky-500'>
                    cloud computing
                    </span>
                    . I love building applications to solve real-world problems that improve our daily lives. Please feel free to explore my work below or reach out for any inquiries!
                </p>

                {/* row of buttons for each social */}
                <div className='w-full flex flex-row gap-4 items-center justify-center md:justify-start'>
                    {/* mail icon */}
                    <a
                        href='mailto:jonhaolam@gmail.com'
                        className="hover:bg-neutral-300 bg-slate-200 p-2 rounded-xl"
                    >
                        <AiOutlineMail size={30} color='black' />
                    </a>
                    {/* github */}
                    <a
                        href='https://github.com/Jonuhthan'
                        className='hover:bg-neutral-300 bg-slate-200 p-2 rounded-xl'
                    >
                        <AiOutlineGithub size={30} color='black' />
                    </a>
                    {/* linkedin */}
                    <a
                        href='https://www.linkedin.com/in/jonathanlam2'
                        className='hover:bg-neutral-300 bg-slate-200 p-2 rounded-xl'
                    >
                        <AiOutlineLinkedin size={30} color='black' />
                    </a>
                </div>

            </div>
        </div>

        {/* arrow icon leading to education */}
        <div className="flex flex-row items-center text-center justify-center ">
            <Link
                to="education"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
            >
                <HiArrowDown size={45} className="animate-bounce cursor-pointer" />
            </Link>
        </div>
    </section>
  );
};

export default Hero;