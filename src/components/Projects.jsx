import React, { useState } from 'react'
import { data, projectsData } from '../assets/assets.js';

const Projects = () => {
  
  const [currentIndex ,setCurrentIndex]=useState(0);
  const [cardsToShow , setCardToShow]=useState(1);

  const hasnext=()=>{
    setCurrentIndex((prevIndex)=>(prevIndex + 1) % projectsData.length);
  }
  const hasprevious=()=>{
    setCurrentIndex((prevIndex)=>prevIndex === 0 ? projectsData.length-1 : prevIndex - 1)
  }

  return (
    <div>
   <div className="flex flex-col items-center justify-between text-center mt-12">
   <p className="text-6xl font-light">
   <span className="font-bold">Projects</span><span className='underline underline-offset-4 decoration-1 under font-light text-gray-800'>Completed</span>
   </p>
   <p className="text-xl text-gray-400 mt-4">Crafting Spaces Building Legacies-Explore</p>
   <p className="text-2xl text-gray-400 mt-2">Our Portfolio</p>
   </div>
   <div className="flex justify-end gap-2 items-center m-10 p-6">
  <button onClick={hasprevious} className="w-12 h-12 flex justify-center items-center border border-gray-400 rounded-md">
    <img src={data.left_arrow} alt="Left Arrow" className="w-6 h-6" />
  </button>
  <button onClick={hasnext} className="w-12 h-12 flex justify-center items-center border border-gray-400 rounded-md">
    <img src={data.right_arrow} alt="Right Arrow" className="w-6 h-6" />
 </button>
  </div> 
  {/*project slidder */}
  <div className="overflow-hidden m-8 p-6">
  <div className="flex gap-8 transition-transform duration-500 ease-in-out"
  style={{ transform: `translateX(-${(currentIndex * 100) / cardsToShow}%)` }}
   >
    {projectsData.map((project, index) => (
      <div key={index} className="relative flex-shrink-0 w-full sm:w-1/4">
        <img src={project.image} alt={project.title} className='w-full h-auto mb-12' />
        <div className="absolute left-0 right-0 bottom-5 flex items-center justify-center">
          <div className="inline-block bg-white text-black px-14 py-2 rounded-md shadow-lg mt-12">
            <p className="text-2xl font-semibold ">{project.title}</p>
            <p className="text-md text-gray-500">{project.price}|{project.location}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
</div>
 );
};

export default Projects