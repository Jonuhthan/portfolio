import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"
import SlideUp from './SlideUp';

const projectsList = [
    {
        name: "calview",
        description: "Vite, FastAPI, PostgreSQL web application hosted on AWS S3, CloudFront, and EC2 to upload and parse .ics calendar files to visualize university student schedules and share with others.",
        image: "/calview.png",
        github: "https://github.com/kyle-luong/calview",
        link: "https://calview.me/",
    },
    {
        name: "RateMate",
        description: "Next.js, Pinecone, and Google Gemini web application with query and filter functionality on professor review data and RAG-AI chatbot for personalized suggestions.",
        image: "/RateMate.png",
        github: "https://github.com/boffskbob/rate-mate",
        link: "https://github.com/boffskbob/rate-mate",
    },
    {
        name: "Movie Picker",
        description: "Full-stack application built with Next.js and Express.js to perform CRUD operations on movie catalogs.",
        image: "/MoviePicker.png",
        github: "https://github.com/Jonuhthan/movie-picker",
        link: "https://github.com/Jonuhthan/movie-picker",
    },    
    {
        name: "Nothing But Nutrition!",
        description: "Flask web application powered by OpenFoodFacts API to scan UPC food item barcodes and return relevant macronutrient/allergen data.",
        image: "/NothingButNutrition.png",
        github: "https://github.com/Jonuhthan/nutrition-tracker-app",
        link: "https://github.com/Jonuhthan/nutrition-tracker-app",
    }
];

const Projects = () => {
    return (
        <section id="projects">
            <h1 className='text-center font-bold text-4xl'>
                Projects
                <hr className="w-6 h-1 mx-auto my-4 bg-sky-500 border-0 rounded" />
            </h1>
            
            <div className='flex flex-col space-y-28'>
                {/* populate with each project listed */}
                {projectsList.map((project, idx) => {
                    return (

                    <div key={idx}>
                        <SlideUp offset='-300px 0px -300px 0px'>
                            <div className='flex flex-col animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12'>
                                {/* project image */}
                                <div className='md:w-1/2 mt-8'>
                                    <Link href={project.link} target='_blank'>
                                        <Image
                                            src={project.image}
                                            alt=""
                                            width={1250}
                                            height={1250}
                                            className="rounded-xl shadow-xl hover:opacity-70"
                                        />
                                    </Link>

                                </div>
                                {/* text section for each project */}
                                <div className='md:w-1/2 mt-10'>
                                    <h1 className='text-4xl font-bold mb-6'>
                                        {project.name}
                                    </h1>
                                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                                        {project.description}
                                    </p>
                                    {/* github and project links */}
                                    <div className='flex flex-row align-bottom space-x-4'>
                                        <Link href={project.github} target='_blank'>
                                            <BsGithub size={30} className='hover:translate-y-1 transition transform cursor-pointer' />
                                        </Link>
                                        <Link href={project.link} target='_blank'>
                                            <BsArrowUpRightSquare size={30} className='hover:translate-y-1 transition transform cursor-pointer' />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </SlideUp>
                    </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Projects