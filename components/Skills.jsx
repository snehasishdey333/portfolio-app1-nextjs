import React from 'react'
import Image from 'next/image'
import react from '../public/assets/skills/physics.png'
import html from '../public/assets/skills/html-5.png'
import css from '../public/assets/skills/css-3.png'
import java from '../public/assets/skills/java.png'
import javascript from '../public/assets/skills/js.png'
import mongodb from '../public/assets/skills/database.png'
import mysql from '../public/assets/skills/mysql.png'
import node from '../public/assets/skills/node-js.png'
import tailwind from '../public/assets/skills/tailwind-css-icon.png'
import next from '../public/assets/skills/nextjs-icon.png'



const Skills = () => {
  return (
    <div id="skills" className="w-full p-6 mx-auto my-10 md:px-40">
    <div className='space-y-4 text-center md:text-left md:space-y-6'>
    <h2 className='uppercase text-violet-700'>Skills</h2>
               <h1>What I can do</h1>
    </div>
    
        <div className='w-full p-6 mx-auto md:p-20'>
    <div className='flex flex-wrap items-center justify-around'>
    {/* item 1 */}
        <div className='mx-1 my-3 md:mx-2 md:my-3 lg:mx-3 lg:my-3 flex items-center justify-center px-4 py-3 space-x-4 bg-white shadow-lg rounded-xl w-[180px] h-[80px] hover:scale-105 duration-800 cursor-pointer ease'>
            <div className='w-2/5'>
                <Image src={html} alt="icon" height="50" width="50"/>
            </div>
            <div>
                <h3>HTML</h3>
            </div>
        </div>
        
        {/* item 1 */}
        <div className='mx-1 my-3 md:mx-2 md:my-3 lg:mx-3 lg:my-3 flex items-center justify-center px-4 py-3 space-x-4 bg-white shadow-lg rounded-xl w-[180px] h-[80px] hover:scale-105 duration-800 cursor-pointer ease'>
            <div className='w-2/5'>
                <Image src={css} alt="icon" height="50" width="50"/>
            </div>
            <div>
                <h3>CSS</h3>
            </div>
        </div>
        
        {/* item 1 */}
        <div className='mx-1 my-3 md:mx-2 md:my-3 lg:mx-3 lg:my-3 flex items-center justify-center px-4 py-3 space-x-4 bg-white shadow-lg rounded-xl w-[180px] h-[80px] hover:scale-105 duration-800 cursor-pointer ease'>
            <div className='w-2/5'>
                <Image src={javascript} alt="icon" height="50" width="50"/>
            </div>
            <div>
                <h3>JavaScript</h3>
            </div>
        </div>

        {/* item 1 */}
        <div className='mx-1 my-3 md:mx-2 md:my-3 lg:mx-3 lg:my-3 flex items-center justify-center px-4 py-3 space-x-4 bg-white shadow-lg rounded-xl w-[180px] h-[80px] hover:scale-105 duration-800 cursor-pointer ease'>
            <div className='w-2/5'>
                <Image src={java} alt="icon" height="50" width="50"/>
            </div>
            <div>
                <h3>Java</h3>
            </div>
        </div>

        {/* item 1 */}
        <div className='mx-1 my-3 md:mx-2 md:my-3 lg:mx-3 lg:my-3 flex items-center justify-center px-4 py-3 space-x-4 bg-white shadow-lg rounded-xl w-[180px] h-[80px] hover:scale-105 duration-800 cursor-pointer ease'>
            <div className='w-2/5'>
                <Image src={react} alt="icon" height="50" width="50"/>
            </div>
            <div>
                <h3>React JS</h3>
            </div>
        </div>
        
        {/* item 1 */}
        <div className='mx-1 my-3 md:mx-2 md:my-3 lg:mx-3 lg:my-3 flex items-center justify-center px-4 py-3 space-x-4 bg-white shadow-lg rounded-xl w-[180px] h-[80px] hover:scale-105 duration-800 cursor-pointer ease'>
            <div className='w-2/5'>
                <Image src={node} alt="icon" height="50" width="50"/>
            </div>
            <div>
                <h3>Node JS</h3>
            </div>
        </div>
        
          {/* item 1 */}
          <div className='mx-1 my-3 md:mx-2 md:my-3 lg:mx-3 lg:my-3 flex items-center justify-center px-4 py-3 space-x-4 bg-white shadow-lg rounded-xl w-[180px] h-[80px] hover:scale-105 duration-800 cursor-pointer ease'>
            <div className='w-2/5'>
                <Image src={next} alt="icon" height="50" width="50"/>
            </div>
            <div>
                <h3>NEXT JS</h3>
            </div>
        </div>
        
        {/* item 1 */}
        <div className='mx-1 my-3 md:mx-2 md:my-3 lg:mx-3 lg:my-3 flex items-center justify-center px-4 py-3 space-x-4 bg-white shadow-lg rounded-xl w-[180px] h-[80px] hover:scale-105 duration-800 cursor-pointer ease'>
            <div className='w-2/5'>
                <Image src={tailwind} alt="icon" height="50" width="50"/>
            </div>
            <div>
                <h3>Tailwind CSS</h3>
            </div>
        </div>

        {/* item 1 */}
        <div className='mx-1 my-3 md:mx-2 md:my-3 lg:mx-3 lg:my-3 flex items-center justify-center px-4 py-3 space-x-4 bg-white shadow-lg rounded-xl w-[180px] h-[80px] hover:scale-105 duration-800 cursor-pointer ease'>
            <div className='w-2/5'>
                <Image src={mysql} alt="icon" height="50" width="50"/>
            </div>
            <div>
                <h3>MySQL</h3>
            </div>
        </div>
        
        {/* item 1 */}
        <div className='mx-1 my-3 md:mx-2 md:my-3 lg:mx-3 lg:my-3 flex items-center justify-center px-4 py-3 space-x-4 bg-white shadow-lg rounded-xl w-[180px] h-[80px] hover:scale-105 duration-800 cursor-pointer ease'>
            <div className='w-2/5'>
                <Image src={mongodb} alt="icon" height="50" width="50"/>
            </div>
            <div>
                <h3>mongoDB</h3>
            </div>
        </div>
    </div>

    </div>
    </div>
    
  )
}

export default Skills