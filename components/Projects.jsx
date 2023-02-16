import React from 'react'
import Image  from 'next/image'
import project1 from '../public/assets/projects/project1.png'
import project2 from '../public/assets/projects/project2.png'
import project3 from '../public/assets/projects/project3.png'
import project4 from '../public/assets/projects/project4.png'
import project5 from '../public/assets/projects/project5.png'
import Link from 'next/link'
import ProjectItem from './ProjectItem'


const Projects = () => {
  return (
    <div id="projects" className="w-full p-6 mx-auto my-10 md:px-40 ">
       <div className='space-y-4 text-center md:text-left md:space-y-6'>
    <h2 className='uppercase text-violet-700'>Projects</h2>
               <h1>What I've Built</h1>
    </div>
    <div className='grid gap-8 p-6 mt-10 md:grid-cols-2'>
        
       
        <ProjectItem image={project1} projectName='Loopstudios' tech="Tailwind CSS" projectUrl='/loopstudios' />
        <ProjectItem image={project4} projectName='Bookmark Manager' tech="Tailwind CSS" projectUrl='/bookmark-manager' />
        <ProjectItem image={project3} projectName='Clipboard' tech="Tailwind CSS" projectUrl='/clipboard' />
        <ProjectItem image={project2} projectName='Shortly' tech="Tailwind CSS" projectUrl='/shortly' />
        <ProjectItem image={project5} projectName='Testimonial Grid' tech='Tailwind CSS' projectUrl='/testimonial-grid'/>
        
        
    </div>
    </div>
  )
}

export default Projects