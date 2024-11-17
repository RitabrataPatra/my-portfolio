"use client";
import React from 'react'
import proj2 from '../assets/proj2.jpg'
import proj3 from '../assets/proj3.png'
import proj4 from '../assets/proj4.jpg'

const projects = [
    { title : "Expense Tracker Pro",
     description : "A web application to track daily expenses and manage budgets. Users can add, edit, or delete expenses, categorize transactions, and visualize spending habits with charts." ,
     devStack : "React.js, Tailwind CSS",
     link : "https://github.com/username/expense-tracker-pro",
     git : "https://github.com/username/expense-tracker-pro",
     src: proj2
   },
    { title : "Expense Tracker Pro",
     description : "A web application to track daily expenses and manage budgets. Users can add, edit, or delete expenses, categorize transactions, and visualize spending habits with charts." ,
     devStack : "React.js, Tailwind CSS",
     link : "https://github.com/username/expense-tracker-pro",
     git : "https://github.com/username/expense-tracker-pro",
     src: proj3
   },
    { title : "Expense Tracker Pro",
     description : "A web application to track daily expenses and manage budgets. Users can add, edit, or delete expenses, categorize transactions, and visualize spending habits with charts." ,
     devStack : "React.js, Tailwind CSS",
     link : "https://github.com/username/expense-tracker-pro",
     git : "https://github.com/username/expense-tracker-pro",
     src: proj4
   },
 ];

import { motion } from 'framer-motion'
import Image from 'next/image';
const Portfolio = () => {
    
  return (
    <div className='text-white bg-gradient-to-b from-black to-[#381a5f] py-18 mt-52 id="portfolio" '>
        
        <h1 className="text-white text-6xl max-w-[320px] mx-auto font-semibold my-12">My<span className="text-orange-400"> Projects</span></h1>

        <div className='px-6 md:px-0 max-w-[1000px] mx-auto mt-40 space-y-24 '>
            {projects.map((project , index) => (
                <motion.div key = {index} initial = {
                    {opacity : 0, y : 75}
                }
                whileInView={{opacity : 1 , y : 0}}
                viewport={{once : true}}
                transition={{duration : 0.5 , delay : 0.25}}
                className={`mt-12 flex flex-col ${index%2 == 1 ? "md:flex-row-reverse gap-12 " : "md:flex-row"} `}
                >
                    <div className='space-y-4 max-w-[550px] '>
                        <h2 className='text-7xl my-4 text-white/70'>{`0${index+1}`}</h2>
                        <h2 className='text-4xl'>{project.title}</h2>
                        <p className='text-lg text-white/70 break-words p-4'>{project.description}</p>
                        <p className='text-xl text-orange-500 font-semibold'>{project.devStack}</p>
                        <div className='w-64 h-[1px] bg-gray-400 mb-8'>
                            <a href={project.link} className='mr-6'>Link</a>
                            <a href={project.git}>Git</a>
                        </div>
                    </div>


                    <div className='flex justify-center items-center md:mt-0 mt-6'>
                        <Image src={project.src} alt={project.title} className='h-[380px] w-[500px] object-cover border rounded-md border-gray-700' />
                    </div>
                </motion.div>
            ))}
        </div>
    </div>
  )
}

export default Portfolio