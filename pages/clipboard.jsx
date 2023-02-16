import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import bgImg from '../public/assets/projects/project3.png'
import settings from '../public/assets/extras/settings.png'
const Clipboard = () => {
  return (
    <div className='w-full overflow-hidden'>
      <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10'></div>
        <Image src={bgImg} alt="bg-img" className='absolute z-1' layout='fill' objectFit='cover'/>
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-8'>
          <h2 className='py-2'>Clipboard</h2>
          <h3>HTML / Tailwind CSS / JavaScript</h3>
        </div>
      </div>
      
      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
         <div className='col-span-4 p-4 md:p-0'>
            
            <p>Project</p>
            <h2 className='mb-4'>Overview</h2>
            <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <button className='px-8 py-2 mt-4 mr-8' >
                <Link href="https://snehasishdey333.github.io/clipboard-tailwindcss/">Demo</Link>
            </button>
            <button className='px-8 py-2 mt-4 mr-8'>
                <Link href="https://github.com/snehasishdey333/clipboard-tailwindcss">Code</Link>
            </button>
            
         </div>

         <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4 mb-20 mt-6'>
             <div className='p-2'>
              <p className='my-3 font-bold'>Technologies</p>
              <div className='grid grid-cols-3 gap-3 md:grid-cols-1'>
                <div className='flex flex-row items-center space-x-2'>
                  <Image src={settings} alt="logo" height='20' width='20'/>
                  <p>HTML</p>
                </div>
                <div className='flex flex-row items-center space-x-2'>
                  <Image src={settings} alt="logo" height='20' width='20'/>
                  <p>CSS</p>
                </div>

                <div className='flex flex-row items-center space-x-2'>
                  <Image src={settings} alt="logo" height='20' width='20'/>
                  <p>JavaScript</p>
                </div>

                <div className='flex flex-row items-center space-x-2'>
                  <Image src={settings} alt="logo" height='20' width='20'/>
                  <p>Tailwind CSS</p>
                </div>

              </div>
             </div>
             
         </div>
         <Link href="/#projects">
              <p className='underline hover:text-blue-600 cursor-pointer p-4 mb-8'>Back</p>
             </Link>
      </div>
    </div>
  )
}

export default Clipboard