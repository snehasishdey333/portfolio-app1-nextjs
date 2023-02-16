import React from 'react'
import Image from 'next/Image'
import img from '../public/assets/me/jeet-portfolio_image.png'
import Link from 'next/link'
import facebook from '../public/assets/social/facebook.png'
import instagram from '../public/assets/social/instagram.png'
import linkedin from '../public/assets/social/linkedin.png'
import pinterest from '../public/assets/social/pinterest.png'
import github from '../public/assets/social/github.png'
import Navbar from './Navbar'
import {FaTwitter} from "react-icons/fa";

const Main = () => {
  return (
    
    <section id="home" className='flex items-center justify-center w-full h-screen p-6 mx-auto text-center'>
        <div className='flex flex-col items-center justify-center w-full h-full  space-y-4 text-center md:space-y-6  md:px-20'>
       <Image src={img} alt="img" height="200" width="200" className='cursor-pointer duration-500 ease-in rounded-full shadow-md shadow-gray-500 hover:scale-105'/>
       <p className='tracking-widest text-gray-600 uppercase'>I build responsive layouts.</p>
       <h1 className='text-gray-700'>Hi, I'm <span className='text-violet-700'>Snehasish</span></h1>
       <h1 className='text-gray-700'>A Front-End Web Developer</h1>
       
       <p className='text-center max-w-[80%] m-auto' >CS graduate and adept front-end
                                                developer focusing on JavaScript
                                                mobile-first development. After
                                                success with React JS front-end
                                                development, I am eager to
                                                learn NEXT JS. I will
                                                continue expanding my JavaScript
                                                knowledge into perfecting
                                                accessibility and responsive design.
                                                </p>
        <div className='flex items-center justify-around pb-10 space-x-8'>

           <div className='duration-200 ease-in rounded-full shadow-lg cursor-pointer shadow-violet-500 hover:scale-110 '>
            <Link href="https://www.facebook.com/profile.php?id=100022300059234">
                <Image src={facebook} alt="" height="40" width="40"/>
            </Link>
           </div>

           <div className='duration-200 ease-in rounded-full shadow-lg cursor-pointer shadow-violet-500 hover:scale-110 '>
            <Link href="https://www.linkedin.com/in/snehasish-dey/">
                <Image src={linkedin} alt="" height="40" width="40"/>
            </Link>
           </div>

           <div className='duration-200 ease-in rounded-full shadow-lg cursor-pointer shadow-violet-500 hover:scale-110 '>
            <Link href="https://www.instagram.com/snehasishdey333/">
                <Image src={instagram} alt="" height="40" width="40"/>
            </Link>
           </div>

           <div className='duration-200 ease-in rounded-full shadow-lg cursor-pointer shadow-violet-500 hover:scale-110 '>
            <Link href="https://in.pinterest.com/snehasishdey131/">
                <Image src={pinterest} alt="" height="40" width="40"/>
            </Link>
           </div>

           <div className='duration-200 ease-in rounded-full shadow-lg cursor-pointer shadow-violet-500 hover:scale-110 '>
            <Link href="https://github.com/snehasishdey333#connect-with-me">
                <Image src={github} alt="" height="40" width="40"/>
            </Link>
           </div>

           
                                                    
        </div>                                        

       </div>


    </section>
    
  )
}

export default Main