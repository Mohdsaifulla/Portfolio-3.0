"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
const projectsData = [
  {
    id: 1,
    title: "Full Stack Insta Clone",
    description:
      "Tech Stack: React Vite, FireBase, Zustand, Chakra UI,FramerMotion, ",
    image: "/images/projects/1.png",
    videoLink: "https://www.youtube.com/embed/CLuQQ2PpLxs?si=pfejigPbXn5_doWE",
    tag: ["All", "TypeScript", "Next.js", "MERN"],
    gitUrl: "https://github.com/Mohdsaifulla/Instagram-Clone",
    previewUrl: "https://instagram-clone-sable-ten.vercel.app/",
  },
  {
    id: 2,
    title: "Fashion clothings",
    description:
      "Tech Stack: Next.js Page Router, TypeScript, Tailwind Css, Redux Toolkit, Next Auth, Stripe.",
    image: "/images/projects/1.png",
    videoLink: "https://www.youtube.com/embed/L_nCwkX_qYA?si=3Nmr8Ezx2im14v7N",
    tag: ["All", "TypeScript", "Next.js"],
    gitUrl: "https://github.com/Mohdsaifulla/Fashion-Next",
    previewUrl: "https://fashion-next-hazel.vercel.app/",
  },
  {
    id: 3,
    title: "Amazon E-Commerce Clone",
    description:
      "Tech Stack: Next.js Page Router, TypeScript, Tailwind Css, Redux Toolkit, Next Auth, Stripe.",
    image: "/images/projects/1.png",
    videoLink: "https://www.youtube.com/embed/_byJ2tWY2S4?si=21m9h9cUdZvuz3oT",
    tag: ["All", "TypeScript", "Next.js"],
    gitUrl: "https://github.com/Mohdsaifulla/totalitycorp-frontend-challenge",
    previewUrl: "https://totalitycorp-frontend-challenge-ten-lake.vercel.app/",
  },
  {
    id: 4,
    title: "Youtube Clone",
    description: "Tech Stack: React Vite, Material UI (MUI), YouTube API's.",
    videoLink: "https://www.youtube.com/embed/y09UM_9RPMs",
    tag: ["All", "React.js"],
    gitUrl: "https://github.com/Mohdsaifulla/YouTube-Clone",
    previewUrl: "https://my-you-tube-video-clone.netlify.app/",
  },
  {
    id: 5,
    title: "MERN Dashboard",
    description:
      "Tech Stack: React, Tailwind Css, MUI, D3 Charts, Apex Chart, Node.js, Express, Mongoose, MongoDB Atlas.",
    videoLink: "https://www.youtube.com/embed/Enm2j6kbXUE",
    tag: ["All", "React.js", "MERN"],
    gitUrl: "https://github.com/Mohdsaifulla/Frontend-Mern-Dashboard",
    previewUrl: "https://coruscating-salamander-ccd895.netlify.app/",
  },
  {
    id: 6,
    title: "Google Search Clone",
    description: "Tech Stack: React.js, Tailwind Css,Google Api's.",
    videoLink: "https://www.youtube.com/embed/xmzKsXyJjtM",
    image: "/images/projects/4.png",
    tag: ["All", "React.js"],
    gitUrl: "https://github.com/Mohdsaifulla/Google-Search-Application",
    previewUrl: "https://google-search-application-12.netlify.app/",
  },
  {
    id: 7,
    title: "React Crypto Dashbaord",
    description: "Tech Stack: React.js, HTML, CSS, Apex Chart, Crypto Api's.",
    image: "/images/projects/5.png",
    videoLink: "https://www.youtube.com/embed/iLhKQ02Xfvs",
    tag: ["All", "React.js"],
    gitUrl: "https://github.com/Mohdsaifulla/ReactDashboard",
    previewUrl: "https://glittery-dodol-70c1c6.netlify.app/",
  },
  {
    id: 8,
    title: "Google Form Clone MERN",
    description:
      "Tech Stack: React.js ,Tailwind Css, Node.js, Express, Mongoose, MongoDB Atlas, Node Mailer.",
    videoLink: "https://www.youtube.com/embed/0WXkRogt2Fk",
    image: "/images/projects/6.png",
    tag: ["All", "MERN"],
    gitUrl: "https://github.com/Mohdsaifulla/Google_Form-Clone",
    previewUrl: "https://admirable-pony-10ae14.netlify.app/",
  },
  {
    id: 9,
    title: "React Customer & Sales Dashboard",
    description: "Tech Stack: React ,Tailwind Css, React Chart, MUI.",
    videoLink: "https://www.youtube.com/embed/Yy5jLtoBLzM",
    image: "/images/projects/6.png",
    tag: ["All", "React.js"],
    gitUrl: "https://github.com/Mohdsaifulla/Product-Dashboard",
    previewUrl: "https://magnificent-panda-8b36f3.netlify.app/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold  mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6 flex-wrap">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="TypeScript"
          isSelected={tag === "TypeScript"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="React.js"
          isSelected={tag === "React.js"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Next.js"
          isSelected={tag === "Next.js"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="MERN"
          isSelected={tag === "MERN"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-2 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              videolink={project.videoLink}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
