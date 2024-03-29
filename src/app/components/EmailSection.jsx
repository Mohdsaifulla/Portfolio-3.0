"use client"

import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EmailSection = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    toast.info("Email is sending...", { autoClose: true });
    emailjs
      .sendForm(
        "service_am5rvjf",
        "template_eviw649",
        form.current,
        "QPgjShn0Gwpuvdthd"
      )
      .then(
        (result) => {
          // console.log(result.text);
          toast.success("Email sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          toast.error("Failed to send email!");
        }
      );
  };
  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative -z-0"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold my-2 text-[#9900FF]">
          Let`&apos;s Connect
        </h5>
        <p className=" mb-4 max-w-md">
          
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/Mohdsaifulla" target="_blank">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="https://www.linkedin.com/in/mohd-saifulla-336633262/" target="_blank">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
        </div>
      </div>
      <div className="z-10">
        <form className="flex flex-col" ref={form} onSubmit={sendEmail}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block mb-2 text-sm font-medium"
            >
              Your Name
            </label>
            <input
              type="text"
              name="from_name"
              id="email"
              required
              className="border border-[#9900FF]
              placeholder-[#9CA2A9]  text-sm rounded-lg block w-full p-2.5"
              placeholder="Jacob Inoski"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-white block text-sm mb-2 font-medium"
            >
              Email
            </label>
            <input
             type="email"
             name="from_email"
              id="subject"
              required
              className=" border border-[#9900FF]
              placeholder-[#9CA2A9]  text-sm rounded-lg block w-full p-2.5"
              placeholder="jacob46@gmail.com"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block text-sm mb-2 font-medium"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className=" border border-[#9900FF] placeholder-[#9CA2A9]   text-sm rounded-lg block w-full p-2.5"
              placeholder="Let's talk about..."
            />
          </div>
          <button
            type="submit"
            className="bg-primary-500 hover:bg-primary-600 border hover:border-[#0099FF] border-[#9900FF] font-medium py-2.5 px-5 rounded-lg w-full hover:text-[#9900FF]"
            value="Send"
          >
            Send Message
          </button>
        </form>
        <ToastContainer />
      </div>
    </section>
  );
};

export default EmailSection;