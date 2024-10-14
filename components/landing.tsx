"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import wallpaper from "@/public/wallpaper.png";
import Link from "next/link";

const Landing = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-between bg-zinc-900 text-white">
      <main className="w-full flex-grow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative w-full h-full mb-10 max-w-7xl mx-auto">
            <div className="absolute top-0 bottom-0 inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-zinc-900" />
            <div className="absolute top-0 bottom-0 inset-x-0 inset-y-12 bg-gradient-to-r from-zinc-900 via-transparent to-zinc-900" />
            <Image
              src={wallpaper}
              alt="Hero Image"
              height={1600}
              width={2400}
              className="object-cover h-[500px] w-full"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="px-6 max-w-3xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-6">Milkyroad Inc</h1>
          <p className="text-sm lg:text-lg mb-6">
            At Milkyroad, we specialize in building apps that merge timeless
            experiences with a modern twist. Why? Because we&apos;re the ones
            who fondly say, &apos;Things were just better back in the day.&apos;
            Sorry, Gen Z!
          </p>
          <p className="text-sm lg:text-lg mb-6">
            We’ve reimagined the photo-sharing experience by blending the charm
            of classic Polaroids with the convenience of digital sharing through
            our app,{" "}
            <Link
              className="hover:underline text-blue-400 hover:underline-offset-4"
              href="https://snaparoid.com"
            >
              Snaparoid
            </Link>
            . Our focus is on fostering connections with your loved ones, not
            overengineering features or chasing revenue. We build what we love
            and what we believe should already exist.
          </p>
          <p className="text-sm lg:text-lg mb-6">
            We&apos;re a team of engineers, pushing the boundaries of
            what&apos;s both useful and possible in the digital world. If this
            resonates with you, let&apos;s create something extraordinary
            together. <Link
            className="hover:underline text-blue-400 hover:underline-offset-4"
            href="https://milkyroad.nl"
          >
            hi@milkyroad.nl
          </Link>
          </p>
        </motion.div>
      </main>

      <motion.footer
        className="w-full max-w-4xl text-center mt-12 pb-6 px-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        <p className="text-sm text-gray-400">
          © 2024 Milkyroad Inc. All rights reserved.
 
        </p>
      </motion.footer>
    </div>
  );
};

export default Landing;
