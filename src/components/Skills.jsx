import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3, faJs, faReact, faGithub, faNodeJs, faAws, faPython, faSass, faJava } from '@fortawesome/free-brands-svg-icons';

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div className=' w-full flex justify-center items-center flex-col mb-7'>
              <p className='text-4xl font-bold inline border-b-4 border-cyan-500 text-center '>Skills</p>
              <p className='py-4 text-2xl'>I enjoy diving into and learning new things. Here's a list of technologies I've worked with</p>
          </div> 
          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
             <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
               <FontAwesomeIcon icon={faJava} size="3x" className="my-4" />
               <p className='my-4'>JAVA</p>
             </div>
             <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
               <FontAwesomeIcon icon={faHtml5} size="3x" className="my-4" />
               <p className='my-4'>HTML</p>
             </div>
             <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
               <FontAwesomeIcon icon={faCss3} size="3x" className="my-4" />
               <p className='my-4'>CSS</p>
             </div>
             <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
               <FontAwesomeIcon icon={faJs} size="3x" className="my-4" />
               <p className='my-4'>JAVASCRIPT</p>
             </div>
             <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
               <FontAwesomeIcon icon={faReact} size="3x" className="my-4" />
               <p className='my-4'>REACT</p>
             </div>
             <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
               <FontAwesomeIcon icon={faGithub} size="3x" className="my-4" />
               <p className='my-4'>GITHUB</p>
             </div>
             <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
               <FontAwesomeIcon icon={faNodeJs} size="3x" className="my-4" />
               <p className='my-4'>NODE JS</p>
             </div>
             {/* <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
               <FontAwesomeIcon icon={faDatabase} size="3x" className="my-4" />
             </div> */}
             <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
               <FontAwesomeIcon icon={faAws} size="3x" className="my-4" />
               <p className='my-4'>AWS</p>
             </div>
             <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
               <FontAwesomeIcon icon={faPython} size="3x" className="my-4" />
               <p className='my-4'>Django</p>
             </div>
             <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
               <FontAwesomeIcon icon={faSass} size="3x" className="my-4" />
               <p className='my-4'>Sass</p>
             </div>
             {/* <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
               <FontAwesomeIcon icon={faDatabase} size="3x" className="my-4" />
             </div> */}
             {/* <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
               <FontAwesomeIcon icon={faGraphql} size="3x" className="my-4" />
             </div> */}
         </div>
      </div>
    </div>
  );
};
export default Skills;