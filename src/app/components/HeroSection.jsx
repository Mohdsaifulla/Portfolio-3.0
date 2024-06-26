"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12 sm:gap-10 lg:gap-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className=" mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="">Hello, I&apos;m</span>
            <br></br>
            <TypeAnimation
              sequence={["Saif", 1000, "Frontend", 1000, "Developer", 1000]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-[#9900FF]"
            />
          </h1>
          <p className="text-base sm:text-lg mb-6 lg:text-xl text-justify">
            I excel at writing clean and maintainable code, incorporating
            reusable components within a well-structured folder hierarchy. I
            also pay meticulous attention to search engine optimization (SEO)
            best practices. My commitment to staying updated with the latest
            frameworks and libraries enhances both the productivity and
            performance of the applications I develop.
          </p>
          <div>
            <Link
              href="#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 border border-[#9900FF] hover:bg-slate-800"
            >
              Contact Me
            </Link>
            <Link
              href="https://drive.google.com/file/d/1knH71-d-muH22ZLjk9iBN2zKeB7MU6yQ/view"
              target="_blank"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-3 border">
                Download CV
              </span>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0.5, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div
            className="rounded-full border border-[#9900FF]
 w-[250px] h-[250px] lg:w-[350px] lg:h-[350px] relative flex justify-center items-center"
          >
            <Image
              src="/images/hero-image1.png"
              priority
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full w-full"
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
