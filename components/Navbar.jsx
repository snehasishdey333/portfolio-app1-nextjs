import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useState,useEffect } from 'react'
import {FaBars,FaExpandArrowsAlt} from "react-icons/fa";
import facebook from '../public/assets/social/facebook.png'
import instagram from '../public/assets/social/instagram.png'
import linkedin from '../public/assets/social/linkedin.png'
import pinterest from '../public/assets/social/pinterest.png'
import github from '../public/assets/social/github.png'
import {useRouter} from 'next/router'
// import img from '../public/assets/me/SD.png'

const Navbar = () => {
    const [navBg,setNavBg]=useState('#ecf0f3')
    const [linkColor,setLinkColor]=useState('#1f2937')
    const [mobileMenu,setMobileMenu]=useState(false);
    const [shadow,setShadow]=useState(false);

    const router=useRouter();

    useEffect(()=>{
       if(router.asPath==='/bookmark-manager' ||
       router.asPath==='/clipboard' ||
       router.asPath==='/loopstudios' ||
       router.asPath==='/shortly' ||
       router.asPath==='/testimonial-grid' 
       ){
        setNavBg('transparent')
        setLinkColor('#ecf0f3')
        // setMobileMenu('true')
       }
       else{
        setNavBg('red-900')
        setLinkColor('#1f2937')
       }
    },[router])

    function setMenu(){
        setMobileMenu(!mobileMenu)
    }

    useEffect(()=>{
        const handleShadow=()=>{
            if(window.scrollY>=90){
                setShadow(true)
            }
            else{
                setShadow(false)
            }
        }
        window.addEventListener('scroll',handleShadow)
    },[])
    // {shadow?'fixed bg-[#ecf0f3] w-full h-20 shadow-xl z-[100] ':'fixed w-full h-20 bg-[#ecf0f3] z-[100]'}
  return (
    <div  className=' md:w-full md:h-20 md:shadow-xl md:z-100'>
         <div style={{backgroundColor:`${navBg}`}} className='hidden md:flex items-center justify-center w-full h-full p-2 2xl:px-16'>
             {/* <Image src={img} alt="logo" height="100" width="100"/> */}
            
             <div>
                <ul className='items-center hidden md:flex '>
                    <Link href="/#home">
                        <li className='ml-10 text-sm uppercase hover:border-b border-violet-500'>home</li>
                    </Link>
                    
                    <Link href="/#about">
                        <li className='ml-10 text-sm uppercase hover:border-b border-violet-500'>About</li>
                    </Link>

                    <Link href="/#skills">
                        <li className='ml-10 text-sm uppercase hover:border-b border-violet-500'>Skills</li>
                    </Link>

                    <Link href="/#projects">
                        <li className='ml-10 text-sm uppercase hover:border-b border-violet-500'>Projects</li>
                    </Link>

                    <Link href="/#contact">
                        <li className='ml-10 text-sm uppercase hover:border-b border-violet-500'>Contact</li>
                    </Link>
                </ul>
                
             </div>
             <div>
             <p><FaBars onClick={setMenu} className={mobileMenu==true?'hidden':'cursor-pointer text-violet-800 text-2xl md:hidden top-10 absolute right-5'}/></p> 
           
         </div>
         
         </div>
         
         <div className={mobileMenu?'absolute w-full top-0 left-0 bg-black/70 h-screen z-600 md:hidden':'hidden'}>
         {/* <div className="absolute w-full top-0 left-0 bg-black/70 h-screen z-600 md:hidden"> */}
               <div className={mobileMenu?'absolute top-0 left-0 w-[75%] bg-[#ecf0f3] h-full z-700 md:hidden':'hidden'}> 
               {/* <div className="absolute top-0 left-0 w-[75%] bg-[#ecf0f3] h-full z-700 md:hidden"> */}
               
                  <div className='flex flex-col justify-start py-10 px-8 z-1000'>
                     <div className='flex flex-col justify-start '>
                     
                     
                     <div className='flex justify-between items-center p-2'>
                     <div>
                     <h2 className='text-violet-700'>Snehasish Dey</h2>
                     <p className="pb-2 font-bold">Front-End Web Developer</p>
                     </div>
                     <div className='p-2 bg-gray-100 rounded-full shadow-lg shadow-gray-400'>
                     <p><FaExpandArrowsAlt onClick={setMenu} className={mobileMenu==true?'cursor-pointer':'hidden'}/></p>
                     </div>
                     
                     </div>
                     <div className='mt-10'>
                     <ul className='items-start flex flex-col space-y-10'>
                    <Link href="/#home">
                        <li className='ml-10 text-sm uppercase hover:border-b border-violet-500'>home</li>
                    </Link>
                    
                    <Link href="/#about">
                        <li className='ml-10 text-sm uppercase hover:border-b border-violet-500'>About</li>
                    </Link>

                    <Link href="/#skills">
                        <li className='ml-10 text-sm uppercase hover:border-b border-violet-500'>Skills</li>
                    </Link>

                    <Link href="/#projects">
                        <li className='ml-10 text-sm uppercase hover:border-b border-violet-500'>Projects</li>
                    </Link>

                    <Link href="/#contact">
                        <li className='ml-10 text-sm uppercase hover:border-b border-violet-500'>Contact</li>
                    </Link>
                </ul>
                     </div>

<div className='mt-16'>
<h3 className='text-violet-700 uppercase text-normal my-2'>LETS CONNECT</h3>    
<div className=' flex items-center justify-around p-4 space-x-4 shadow-lg rounded-lg'>

<div className='duration-200 ease-in rounded-full shadow-lg cursor-pointer shadow-violet-500 hover:scale-110 '>
 <Link href="https://www.facebook.com/profile.php?id=100022300059234">
     <Image src={facebook} alt="" height="30" width="30"/>
 </Link>
</div>

<div className='duration-200 ease-in rounded-full shadow-lg cursor-pointer shadow-violet-500 hover:scale-110 '>
 <Link href="https://www.linkedin.com/in/snehasish-dey/">
     <Image src={linkedin} alt="" height="30" width="30"/>
 </Link>
</div>

<div className='duration-200 ease-in rounded-full shadow-lg cursor-pointer shadow-violet-500 hover:scale-110 '>
 <Link href="https://www.instagram.com/snehasishdey333/">
     <Image src={instagram} alt="" height="30" width="30"/>
 </Link>
</div>

<div className='duration-200 ease-in rounded-full shadow-lg cursor-pointer shadow-violet-500 hover:scale-110 '>
 <Link href="https://in.pinterest.com/snehasishdey131/">
     <Image src={pinterest} alt="" height="30" width="30"/>
 </Link>
</div>

<div className='duration-200 ease-in rounded-full shadow-lg cursor-pointer shadow-violet-500 hover:scale-110 '>
 <Link href="https://github.com/snehasishdey333#connect-with-me">
     <Image src={github} alt="" height="30" width="30"/>
 </Link>
</div>


                                         
</div>
</div>
                  
                     
                        
                        
                     </div>
                  </div>
               </div>
         </div>
         
    </div>

  )
}

export default Navbar