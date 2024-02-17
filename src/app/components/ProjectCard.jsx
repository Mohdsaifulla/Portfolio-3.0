import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ imgUrl,videolink, title, description, gitUrl, previewUrl }) => {
  // console.log(videolink)
  return (
    <div> 
      <div
        className="h-72 md:h-72 relative group"
        // style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
      >
        
        <iframe src={videolink}       
        allow='autoplay'
        title='video'
        mute="true" 
        style={{backgroundSize:"cover"}}
        className="w-full h-full rounded-xl"
/>
        
        <div className="overlay  justify-center absolute top-5 right-11  bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-100 transition-all duration-500 rounded-xl w-16 h-7 items-center">
          <Link
            href={gitUrl}
            target="_blank"
            className="h-6 w-6 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <CodeBracketIcon className="h-6 w-6 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white p-1" />
          </Link>
          <Link
            href={previewUrl}
            target="_blank"
            className="h-6 w-6 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <EyeIcon className="h-6 w-6 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white p-1" />
          </Link>
        </div>
      </div>
      <div className="rounded-b-xl mt-3 bg-[#181818]py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;