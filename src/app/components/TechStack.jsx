import React from "react";
import Marquee from "react-fast-marquee";
const techImgOne = [
  {
    name: "html",
    img: "/images/techStack/html.png",
  },
  {
    name: "CSS",
    img: "/images/techStack/css.png",
  },
  {
    name: "JavaScript",
    img: "/images/techStack/js.png",
  },
  {
    name: "TypeScript",
    img: "/images/techStack/type.png",
  },
  {
    name: "React",
    img: "/images/techStack/react.png",
  },
  {
    name: "Next",
    img: "/images/techStack/next.png",
  },
  {
    name: "Node",
    img: "/images/techStack/node.png",
  },
  {
    name: "MongoDB",
    img: "/images/techStack/mongo.png",
  },
  {
    name: "Express",
    img: "/images/techStack/express.png",
  },
];

const techImgTwo = [
  {
    name: "Tailwind Css",
    img: "/images/techStack/tailwind.png",
  },
  {
    name: "Chakra UI",
    img: "/images/techStack/chakra.png",
  },

  {
    name: "Firebase",
    img: "/images/techStack/fire.png",
  },
  {
    name: "Zustand",
    img: "/images/techStack/zustand.png",
  },
  {
    name: "Redux",
    img: "/images/techStack/redux.png",
  },
  {
    name: "Github",
    img: "/images/techStack/github.png",
  },
  {
    name: "C++",
    img: "/images/techStack/c.png",
  },
  {
    name: "Context API",
    img: "/images/techStack/context.png",
  },
];
const TechStack = () => {
  return (
    <div className="overflow-x-auto w-[90%] pt-8 mt-8 flex flex-col gap-4 items-center justify-center overflow-y-hidden">
      <div className="flex skew-y-6">
        <Marquee speed="150" className="font-extralight">
          Tech Stacks i have worked on
        </Marquee>
        <Marquee speed="150">Tech Stacks i have worked on</Marquee>
      </div>
      <Marquee>
        <div className="flex items-center justify-start gap-4">
          {techImgOne.map((item, index) => (
            <div
              key={index}
              className="flex  items-center"
              style={{ minWidth: "120px" }}
            >
              <img src={item.img} alt={item.name} className="w-36" />
            </div>
          ))}
        </div>
      </Marquee>
      <div className="flex skew-y-6">
        <Marquee speed="150" className="font-extralight">
          Tech Stacks i have worked on
        </Marquee>
      </div>
      <Marquee direction="right">
        <div className="flex items-center justify-start gap-4">
          {techImgTwo.map((item, index) => (
            <div
              key={index}
              className="flex  items-center"
              style={{ minWidth: "120px" }}
            >
              <img src={item.img} alt={item.name} className="w-36" />
            </div>
          ))}
        </div>
      </Marquee>
      <div className="flex skew-y-6">
        <Marquee speed="150" className="font-extralight">
          Tech Stacks i have worked on
        </Marquee>
        <Marquee speed="150">Tech Stacks i have worked on</Marquee>
      </div>
    </div>
  );
};

export default TechStack;
