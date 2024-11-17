"use client"
// import { div } from 'motion/react-client'
import React from 'react'
import { FaCss3Alt, FaHtml5, FaJsSquare, FaReact } from 'react-icons/fa'
const skillICons = [
    { icon : <FaHtml5 size={140} /> , label : "HTML"},
    { icon : <FaCss3Alt size={140} /> , label : "CSS"},
    { icon : <FaReact size={110} /> , label : "React"},
    { icon : <FaJsSquare size={140} /> , label : "Javascript"},
    { icon : <FaHtml5 size={140} /> , label : "HTML"},
    { icon : <FaCss3Alt size={140} /> , label : "CSS"},
    { icon : <FaReact size={110} /> , label : "React"},
    { icon : <FaJsSquare size={140} /> , label : "Javascript"},
]

const Skills = () => {
  return (
    <div className='bg-custom-gradient py-32'>
        <div className='text-white w-[400px] md:min-w-[950px] mx-auto p-8 text-center'>
            <h2 className='text-6xl font-bold mb-4 '>What I do</h2>
            <div className='grid grid-cols-2 , md:grid-cols-4 gap-6'>
                {skillICons.map((skill , index) => (
                       <div key={index} className='h-[160px]  w-[160px] 
                       md:h-[220px]  md:w-[220px] flex flex-col items-center justify-between bg-white/10 p-4 rounded-xl'>
                           {skill.icon}
                           <p className='mt-2'>{skill.label}</p>
                       </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Skills