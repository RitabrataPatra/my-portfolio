"use client";
import React from "react";
import cursor from "../assets/icon1.png";
import lightning from "../assets/icon2.png";
import profilepic from "../assets/profilepic.png";
import { motion } from "framer-motion";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="py-24 relative overflow-clip bg-hero-gradient">
      <div className="absolute rounded-[50%] w-[3000px] h-[1300px]  top-[550px] left-[50%] -translate-x-1/2 bg-custom-radial"></div>


      <div className="relative">
        <div className="text-8xl font-bold text-center">
          <h1 className="text-[#98B4CE]">Hi , I am</h1>
          <h1 className="text-[#E48A57]">Ritabrata</h1>
        </div>

        <motion.div className="hidden md:block absolute left-[150px] top-[170px]" drag>
          <Image
            src={cursor}
            alt="cursor"
            width="170"
            height="170"
            className=""
            draggable="false"
          />
        </motion.div>

        <motion.div className="hidden md:block absolute right-[220px] top-[20px]" drag>
          <Image
            src={lightning}
            alt="message"
            width="100"
            height="100"
            className=""
            draggable="false"
          />
        </motion.div>
      

      <p className="text-2xl text-center max-w-[700px] mx-auto mt-8 text-white/80">
        Proficient in C++ , NodeJS , NextJS and database systems like SQL and
        MongoDB.
        <br />
        Highly focused at problem solving and learning new technologies.
      </p>
      <Image
        src={profilepic}
        alt="profilepic"
        className="h-auto w-auto mx-auto"
      />
      </div>
    </div>
  );
};

export default Hero;
