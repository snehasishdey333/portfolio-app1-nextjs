import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const ProjectItem = ({image,projectName,tech,projectUrl}) => {
  return (
    
<div className='relative flex flex-col items-center group justify-center w-full md:h-auto p-2 md:p-4 shadow-xl shadow-gray-400 rounded-xl bg-gradient-to-r from-violet-700 to-violet-400 '>
            <Image src={image} className="rounded-xl  w-full bg-cover bg-center group-hover:opacity-10" alt="project-img" height="200" width="200"/>
            <div className='hidden justify-center items-center group-hover:flex group-hover:flex-col  top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] absolute'>
               <h3  className='text-2xl text-white tracking-wider text-center'>{projectName}</h3>
               <p className='text-center pb-4 pt-2 text-white'>{tech}</p>
               <Link href={projectUrl}>
                   <p className='text-center py-3 rounded-lg px-3 bg-white text-gray-700 font-bold text-lg cursor-pointer'>More Info</p>
               </Link>
            </div>
        </div>
    

   
    
  )
}

export default ProjectItem