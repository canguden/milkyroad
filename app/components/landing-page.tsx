"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import icon from "@/public/icon-milkyroad.png";
import Link from "next/link";

const MilkyRoadHero = () => {
  return (
    <>
      <div className="relative w-full h-screen overflow-hidden bg-black z-10">
        {/* Animated stars */}
        <div className="absolute inset-0 -pt-10">
          {[...Array(200)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                width: Math.random() * 3 + 1 + "px",
                height: Math.random() * 3 + 1 + "px",
                top: Math.random() * 100 + "%",
                left: Math.random() * 100 + "%",
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                repeatType: "loop",
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="z-10 flex flex-col items-center justify-center h-[900px] text-white text-center px-4 font-mono">
          <motion.div
            className=" text-6xl md:text-8xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h1>Milkyroad Inc.</h1>
          </motion.div>
          <motion.p
            className="max-w-2xl text-xl md:text-2xl mb-8"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            We are a digital agency focused on creating innovative products. One
            of our latest projects is Snaparoid, bringing back the photo-sharing
            experience.
          </motion.p>
          <motion.div
            className="text-lg md:text-xl"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <p>Feel free to contact us anytime.</p>

            <a
              href="mailto:contact@milkyroad.com"
              className="inline-block mt-4 px-6 py-3 bg-gradient-to-br from-blue-900 via-purple-900 to-pink-800 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
            >
              Contact us: hi@milkyroad.nl
            </a>
          </motion.div>
          <footer className="absolute bottom-5 w-full -mt-20 rounded-lg max-w-4xl mx-auto  z-50 px-2 ">
            <div className="justify-between flex items-center">
              <div className="flex items-center gap-2">
                <Image
                  src={icon}
                  alt="MilkyRoad Inc"
                  width={40}
                  height={40}
                  className="object-cover"
                />
                <Link href="/">Milkyroad Inc</Link>
              </div>
              <div>
                <Link
                  className="inline-block text-sm px-6 py-3 bg-gradient-to-br from-blue-900 via-purple-900 to-pink-800 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                  href="https://Snaparoid.com"
                >
                  Snaparoid →
                </Link>
              </div>
            </div>
          </footer>
        </div>
      </div>
      {/* Nav */}
    </>
  );
};

export default MilkyRoadHero;
