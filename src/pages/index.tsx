import React from 'react';
import Link from 'next/link';
import img from '../../public/images/nav-logo.png'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDashcube } from '@fortawesome/free-brands-svg-icons';
import { faBottleWater, faBars, faStarOfLife, faPersonSwimming} from '@fortawesome/free-solid-svg-icons';

import 'next/font/google';
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
      <header className='header flex justify-between py-8 text-white h-[3rem] px-4 place-items-center w-[100%] z-50 bg-gray-800'>
            <div className="logo text-center w-[100%]">
              <Link className='' href="#"><Image src={img} width={130} height={130} alt='logoIcon'></Image></Link>
              <div><FontAwesomeIcon icon={faBars} /></div>
            </div>
            <nav className='nav w-[100%]'>
              <ul className='flex justify-start gap-2 text-xl'>
                <li><Link href='/blog/blog'>Home</Link></li>
                <li><Link href='/'>Blog</Link></li>
                <li><Link href='/'>Shop</Link></li>
                <li><Link href='/blog/blog'>Contact</Link></li>
                <li><Link href='/blog/blog'>FAQs</Link></li>
              </ul>
            </nav>
          </header>
      <section className='mainSection'>
        <main className='mainSectionContent'>
          

          <div className='pt-[60px] h-[90vh] flex place-items-center'>
            <main className='leading-[6rem] text-[7rem] font-extrabold'>
              <h1 className='text-start mx-16  text-white w-[50%] font-bold'>Ultimate</h1>
              <h1 className='text-start mx-16 font-semibold text-white w-[50%]'>Crossfit</h1>
              <h1 className='text-start mainH1 mx-16 font-semibold text-white w-[50%]'> Facility</h1>
            </main>
          </div>
          <div className="scrolling-text text-white justify-evenly w-[fit-content] text-center gap-3">
            <h3 className='bg-gray-900 text-yellow-700 rounded-lg p-2 text-xl'>#Gym</h3>
            <h3 className='bg-gray-900 text-yellow-700 rounded-lg p-2 text-xl'>#training</h3>
            <h3 className='bg-gray-900 text-yellow-700 rounded-lg p-2 text-xl'>#health</h3>
            <h3 className='bg-gray-900 text-yellow-700 rounded-lg p-2 text-xl'>#sport</h3>
            <h3 className='bg-gray-900 text-yellow-700 rounded-lg p-2 text-xl'>#workout</h3>
            <h3 className='bg-gray-900 text-yellow-700 rounded-lg p-2 text-xl'>#fitness</h3>
            <h3 className='bg-gray-900 text-yellow-700 rounded-lg p-2 text-xl'>#progress</h3>
            <h3 className='bg-gray-900 text-yellow-700 rounded-lg p-2 text-xl'>#pumping</h3>
            <h3 className='bg-gray-900 text-yellow-700 rounded-lg p-2 text-xl'>#coach</h3>
            <h3 className='bg-gray-900 text-yellow-700 rounded-lg p-2 text-xl'>#crossfit</h3>
            <h3 className='bg-gray-900 text-yellow-700 rounded-lg p-2 text-xl'>#trainer</h3>
            <h3 className='bg-gray-900 text-yellow-700 rounded-lg p-2 text-xl'>#pool</h3>
            <h3 className='bg-gray-900 text-yellow-700 rounded-lg p-2 text-xl'>#personal</h3>
            <h3 className='bg-gray-900 text-yellow-700 rounded-lg p-2 text-xl'>#swimming</h3>
            <h3 className='bg-gray-900 text-yellow-700 rounded-lg p-2 text-xl'>#bodybuilding</h3>
          </div>
        </main>
      </section>

      <section className='section2 text-white p-8 h-[100vh]'>
        <div className='text-center'>
          <h2 className='text-xl font-semibold'>What we offer</h2>
          <h1 className='text-5xl font-bold px-32'>Achieve amazing results <br /> with our services</h1>
          <div className='place-content-center flex'>
            <Image className='text-center rounded-xl p-1 bg-white h-[40px] w-[40px] m-2' src='data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2225%22%20height%3D%2215%22%20viewBox%3D%220%200%2025%2015%22%3E%3Ctext%20transform%3D%22translate(0%2015)%20rotate(-90)%22%20font-size%3D%2229px%22%20font-family%3D%22PlayfairDisplay-Regular%2C%20Playfair%20Display%22%3E%3Ctspan%20x%3D%220%22%20y%3D%2220%22%3E%C2%AB%3C%2Ftspan%3E%3C%2Ftext%3E%3C%2Fsvg%3E' alt='image' width={70} height={70}></Image>
          </div>
        </div>

        <div className='sectionBox'>
            <main className='py-10 px-4 mainBox rounded-lg'>
              <div><FontAwesomeIcon icon={faDashcube}/></div>
              <h1 className='text-center text-xl font-semibold'>Best Equipment</h1>
              <p className='text-gray-200 text-center text-[19px]'>Consectetur adipiscing elit, sed do eiusmod tempo.</p>
            </main>

            <main className='py-10 px-4 mainBox  rounded-lg'>
              <div><FontAwesomeIcon icon={faStarOfLife}/></div>
              <h1 className='text-center text-xl font-semibold'>Training Plan</h1>
              <p className='text-gray-200 text-center text-[19px]'>Consectetur adipiscing elit, sed do eiusmod tempo.</p>
            </main>

            <main className='py-10 px-4 mainBox rounded-lg'>
              <div><FontAwesomeIcon icon={faBottleWater}/></div>
              <h1 className='text-center text-xl font-semibold'>Nutrition plan</h1>
              <p className='text-gray-200 text-center text-[19px]'>Consectetur adipiscing elit, sed do eiusmod tempo.</p>
            </main>

            <main className='py-10 px-4 mainBox rounded-lg'>
              <div><FontAwesomeIcon icon={faPersonSwimming} /></div>
              <h1 className='text-center text-xl font-semibold'>Swimming poor</h1>
              <p className='text-gray-200 text-center text-[19px]'>Consectetur adipiscing elit, sed do eiusmod tempo.</p>
            </main>
        </div>
      </section>

    </div>

  );
}
export default Index;