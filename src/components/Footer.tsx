import Image from 'next/image'
import React from 'react'
import img from '../../public/images/nav-logo.png'
import { Mail } from 'lucide-react'
import Link from 'next/link'
const Footer = () => {
  return (
    <div className='text-white px-5 py-10 footer'>
        <div className='w-[100%]'>
            <Link href='/#'><Image className='w-[9em] h-[2rem] my-10' src={img} alt='logo-image'/></Link>
            <h1 className='text-xl font-semibold my-2'>Newsletter Signup</h1>
            <div className='flex gap-2 my-4'>
                <Mail/>
                <input className='bg-transparent border-b focus:outline-none' type="email" 
                    placeholder='Enter your email address'
                    required
                />
            </div>
            <hr className='mr-5 bg-gray-900 text-gray-700' />
            <div className='flex gap-2 my-2'>
                <input className='bg-red-600 text-3xl border-2' 
                    type="checkbox" 
                    required
                />
                <p>Agree to <Link href='#' className='border-b-2 border-gray-500'>Privacy Policy</Link></p>
            </div>
        </div>
        <div className='w-[100%]'>
            <h1 className='text-3xl md:text-4xl font-semibold mr-20 my-10'>Transform your body, transform your life</h1>
            <main className='md:flex flex-wrap justify-around mr-10 md:mr-40 gap-6'>
                <div className='leading-[2rem]'>
                    <h1 className='text-xl font-semibold my-5'>Socials</h1>
                    <div className='transform transition-all hover:translate-x-2'><Link className='transform translate-x-2 hover:border-b text-gray-400 hover:text-white' href="#">Facebook</Link></div>
                    <div className='transform transition-all hover:translate-x-2'><Link className='transform translate-x-2 hover:border-b text-gray-400 hover:text-white' href="#">Twitter</Link></div>
                    <div className='transform transition-all hover:translate-x-2'><Link className='transform translate-x-2 hover:border-b text-gray-400 hover:text-white' href="#">LinkedIn</Link></div>
                    <div className='transform transition-all hover:translate-x-2'><Link className='transform translate-x-2 hover:border-b text-gray-400 hover:text-white' href="#">Instgram</Link></div>
                </div>
                <div className='leading-[2rem]'>
                    <h1 className='text-xl font-semibold my-5'>Menu</h1>
                    <div className='transform transition-all hover:translate-x-2'><Link className='transform translate-x-2 hover:border-b text-gray-400 hover:text-white' href="#">Home</Link></div>
                    <div className='transform transition-all hover:translate-x-2'><Link className='transform translate-x-2 hover:border-b text-gray-400 hover:text-white' href="#">Services</Link></div>
                    <div className='transform transition-all hover:translate-x-2'><Link className='transform translate-x-2 hover:border-b text-gray-400 hover:text-white' href="#">About Us</Link></div>
                    <div className='transform transition-all hover:translate-x-2'><Link className='transform translate-x-2 hover:border-b text-gray-400 hover:text-white' href="#">Contacts</Link></div>
                </div>
                <div className='leading-[2rem]'>
                    <h1 className='text-xl font-semibold my-5'>Say Hello</h1>
                    <Link className='text-gray-400' href={'mailto://info@gmail.com'}>info@email.com</Link>
                </div>
            </main>
        </div>
    </div>
  )
}

export default Footer
