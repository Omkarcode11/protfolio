// import React, { useEffect, useState } from 'react';
import projects from "../../assets/Project/projectArray";

import { useParams } from "react-router-dom";

function PhotoPerv({ link }) {
  return (
    <img
      className='w-5/6 m-8 rounded-lg flex justify-center mx-[10%] '
      src={link}
      alt='img'
    />
  );
}

function SourceButton({ link }) {
  let name ;
  if (link.includes("vercel.app")) {
    name = "Go Live";
  } else {
     name = link.split("/");
    name = name[name.length - 1];
  }
  console.log(link.includes('vercel.app'))
  return (
    <a
      target='_blank'
      href={link}
      rel='noreferrer'>
      <button className='bg-gradient-rainblue rounded-md px-4 py-2 hover:shadow-md text-black font-sans'>
        {name}
      </button>
    </a>
  );
}

function ProjectPrev() {
  let { id } = useParams();
  let projectInfo = projects[id];

  return (
    <div className='font-playfair'>
      {/* HEADINT */}
      <h1 className='text-6xl text-center my-8 '>{projectInfo.name}</h1>

      {/* PHOTOS */}
      <div className='w-full '>
        {projectInfo.img.map((item) => (
          <PhotoPerv link={item} />
        ))}
      </div>
      {/* LINK OR RESOURCES */}
      <div className='flex justify-between  mx-[10%] h-16'>
        {projectInfo.links.map((item) => (
          <SourceButton link={item} />
        ))}
      </div>
    </div>
  );
}

export default ProjectPrev;
