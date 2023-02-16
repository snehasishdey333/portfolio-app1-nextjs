import React from 'react'
import me from '../public/assets/me/x.jpg'
import Image from 'next/image'
import Link from 'next/link'
import facebook from '../public/assets/social/facebook.png'
import instagram from '../public/assets/social/instagram.png'
import linkedin from '../public/assets/social/linkedin.png'
import pinterest from '../public/assets/social/pinterest.png'
import github from '../public/assets/social/github.png'
import scrollUp from '../public/assets/extras/up-arrow (1).png'
import { useRef,useState,useEffect } from 'react';
import emailjs from 'emailjs-com';
import {FaTwitter} from "react-icons/fa";

const Contact = () => {
    // const [details,setDetails]=useState(false)
    // useEffect(()=>{
    //     const detail1=document.getElementById('name')
    //     const detail2=document.getElementById('phone')
    //     const detail3=document.getElementById('email')
    //     const detail4=document.getElementById('subject')
    //     const detail5=document.getElementById('message')

    //     if(detail1.innerText!='' && detail2.innerText!='' && detail3.innerText!='' && detail4.innerText!='' && detail5.innerText!=''){
    //         setDetails(true)
    //     }
    // },[])
    
    

    const form = useRef();
    const [send,setSend]=useState(false);

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_gs3xi9u', 'template_0wvhi3g', form.current, 'CWAiFB9y5JWqnlf0O')
        .then((result) => {
            console.log(result.text);
            setSend(true);
            // if(send && details){
            //     setSend(true);
            //     document.getElementById('msg').innerHTML=`<h3 className="mt-4 text-green-500">Thank you for the message. I will get back to you soon.</h3>`
            // }
            // else{
            //     document.getElementById('msg').innerHTML=`<h3 className="mt-4 text-red-500">Something went wrong! Please check your details.</h3>`
            // }
            
            
        }, (error) => {
            console.log(error.text);
        });
    };

    return (
        <div id="contact" className="w-full lg:h-screen">
            <div className="w-full p-6 mx-auto my-10 md:px-40">
                <div className='space-y-4 text-center md:text-left md:space-y-6'>
                    <h2 className='uppercase text-violet-700'>Contact</h2>
                    <h1>Get In Touch</h1>
                </div>
                <div className='grid lg:grid-cols-5 gap-8 mt-8'>
                    {/* left */}
                    <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
                        <div className='lg:p-4 h-full rounded-xl'>
                            <div>
                                <Image className="w-full rounded-xl hover:scale-105 ease-in duration-300 bg-contain" src={me} alt="img" height='200' width='200' />
                            </div>
                            <div>
                                <h2 className='pt-4 pb-4 text-violet-700 '>Snehasish Dey</h2>
                                <p className="pb-2 font-bold">Front-End Web Developer</p>
                                <p className='py-2 pb-4'>I am available for freelance or full-time positions. Contact me and lets talk.</p>

                            </div>
                            <div>
                                <p className='uppercase pt-8'>Connect with me</p>
                                <div className='flex items-center justify-around py-4 space-x-4'>

                                    <div className='duration-200 ease-in rounded-full shadow-lg cursor-pointer shadow-violet-500 hover:scale-110 '>
                                        <Link href="https://www.facebook.com/profile.php?id=100022300059234">
                                            <Image src={facebook} alt="" height="40" width="40" />
                                        </Link>
                                    </div>

                                    <div className='duration-200 ease-in rounded-full shadow-lg cursor-pointer shadow-violet-500 hover:scale-110 '>
                                        <Link href="https://www.linkedin.com/in/snehasish-dey/">
                                            <Image src={linkedin} alt="" height="40" width="40" />
                                        </Link>
                                    </div>

                                    <div className='duration-200 ease-in rounded-full shadow-lg cursor-pointer shadow-violet-500 hover:scale-110 '>
                                        <Link href="https://www.instagram.com/snehasishdey333/">
                                            <Image src={instagram} alt="" height="40" width="40" />
                                        </Link>
                                    </div>

                                    <div className='duration-200 ease-in rounded-full shadow-lg cursor-pointer shadow-violet-500 hover:scale-110 '>
                                        <Link href="https://in.pinterest.com/snehasishdey131/">
                                            <Image src={pinterest} alt="" height="40" width="40" />
                                        </Link>
                                    </div>

                                    <div className='duration-200 ease-in rounded-full shadow-lg cursor-pointer shadow-violet-500 hover:scale-110 '>
                                        <Link href="https://github.com/snehasishdey333#connect-with-me">
                                            <Image src={github} alt="" height="40" width="40" />
                                        </Link>
                                    </div>



                                </div>
                            </div>
                        </div>

                    </div>

                    {/* right */}
                    <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
                        <div className='p-4'>
                            <form ref={form} onSubmit={sendEmail}>
                                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                                    <div className='flex flex-col'>
                                        <label className='uppercase text-sm py-2'>Name</label>
                                        <input className='border-2 rounded-lg flex p-3 border-gray-300' type="text" name="user_name" id="name"/>

                                    </div>

                                    <div className='flex flex-col'>
                                        <label className='uppercase text-sm py-2'>Phone Number</label>
                                        <input className='border-2 rounded-lg flex p-3 border-gray-300' type="number" name="ph" id="phone"/>
                                        
                                    </div>
                                </div>
                                <div className='flex flex-col py-2'>
                                <label className='uppercase text-sm py-2'>Email</label>
                                        <input className='border-2 rounded-lg flex p-3 border-gray-300' type="email" name="user_email" id="email"/>
                                </div>
                                <div className='flex flex-col py-2'>
                                <label className='uppercase text-sm py-2'>Subject</label>
                                        <input className='border-2 rounded-lg flex p-3 border-gray-300' type="text" name="subject" id="subject"/>
                                </div>

                                <div className='flex flex-col py-2'>
                                <label className='uppercase text-sm py-2'>Message</label>
                                <textarea className='border-2 rounded-lg p-3 border-gray-300 ' rows='10' name="message" id="message"/>
                                {send?<h3 className="mt-4 text-green-500">Thank you for your message, I will get back to you soon.</h3>:""}
                                {/* <div id="msg"></div> */}
                                </div>
                                <button className='w-full p-4 text-gray-100 mt-3'>Send Message</button>
                            </form>
                        </div>
                    </div>

                </div>
                   <div className='flex justify-center items-center py-12 md:py-16 '>
                   <Link href="#home">
                <div className='duration-200 ease-in rounded-full shadow-lg cursor-pointer shadow-violet-500 hover:scale-110 '>
                   <Image src={scrollUp} alt="scroll-up-icon" height='50' width='50' />
                </div>
            </Link>
                   </div>
            </div>
            
        </div>

    )
}

export default Contact