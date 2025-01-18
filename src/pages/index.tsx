import React from 'react';
import Link from 'next/link';
import img from '../../public/images/nav-logo.png'
import Image from 'next/image'
import { useState, useEffect } from 'react';
const Index: React.FC = () => {

    const [scroll, setScroll] = useState(0);
    const handleScroll = () => {
      const position = window.scrollY;
      setScroll(position);
    }
    useEffect(() => {
      if (scroll > 100) {
        document.querySelector('.header')?.classList.add('bg-gray-900');
        document.querySelector('.header')?.classList.add('opacity-90');
      } else {
        document.querySelector('.header')?.classList.remove('bg-gray-900');
        document.querySelector('.header')?.classList.add('opacity-90');
      }
      window.addEventListener('scroll', handleScroll);

      return () => {
       window.removeEventListener('scroll', handleScroll);
      }
    }, [scroll]);
  return (
    <div>
      <section className='mainSection'>
        <main className='mainSectionContent'>
          <header className='header flex justify-between bg- text-white h-[3rem] place-items-end fixed top-0 w-[100%] z-50'>
            <div className="logo text-center border-2 border-blue-800 w-[100%]">
              <Link className='' href="#"><Image src={img} width={100} height={100} alt='logoIcon'></Image></Link>
              <div><i className="fa-solid fa-bars"></i></div>
            </div>
            <nav className='nav'>
              <ul className='flex justify-center gap-2'>
                <li><Link href='/blog/blog'>Home</Link></li>
                <li><Link href='/'>Blog</Link></li>
                <li><Link href='/'>Equipment</Link></li>
                <li><Link href='/blog/blog'>Booking</Link></li>
              </ul>
            </nav>
          </header>

          <div className='pt-[60px]'>
            <h1 className='text-center text-4xl'>Welcome to GyM House</h1>
            <p className='text-center text-lg'>Hi ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia.</p>
          </div>
        </main>
      </section>

      <section>
        <div className="section1 h-[120vh]">

        </div>
        <main className='h-[200vh]'></main>
      </section>
    </div>
  );
}

export default Index;