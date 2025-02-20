import React from 'react';
import Link from 'next/link';
import img from '../../public/images/nav-logo.png'
import Image from 'next/image'
import style from '../components/general.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDashcube } from '@fortawesome/free-brands-svg-icons';
import { faBottleWater, faStarOfLife, faPersonSwimming, faArrowRight} from '@fortawesome/free-solid-svg-icons';
import 'next/font/google';
import { useState, useEffect } from 'react';
import GymBoy from '../../public/images/gymBoy.png'
import Reviews from '../components/FeedBack';
import ChainImg from '../../public/images/chain.png'
import Excise from '../../public/images/Excise.png'
import NikeImg from '../../public/images/nike.png'
import HellmImg from '../../public/images/Hellm.png'
import Asics from '../../public/images/asics.png'
import Befib from '../../public/images/befib.png'
import Amani from '../../public/images/Amani.png'
import Reebok from '../../public/images/Reebok.png'

const Index: React.FC = () => {

    const [scroll, setScroll] = useState(0);
    const [isOpen, setIsOpen] = useState(false)
    const handleNav= () => {
      setIsOpen(!isOpen);
    }
    const handleScroll = () => {
      const position = window.scrollY;
      setScroll(position);
    }
    useEffect(() => {
      console.log("Nav state changed:", isOpen ? "Open" : "Closed");
    }, [isOpen])
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
    <div className=''>
      <header className='header flex justify-between py-8 text-white h-[3rem] px-4 place-items-center w-[100%] z-50 bg-gray-800'>
            <div className="logo text-center w-[100%] flex justify-between">
              <Link className='logoImg' href="#"><Image src={img} width={130} height={130} alt='logoIcon'></Image></Link>
              <div onClick={handleNav} className={`nav-icon text-3xl cursor-pointer ${style.toggleColor} ${isOpen ? style.open : ''}`}>{isOpen ? `✖`: '☰'}</div>
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
            <div className={`miniSreen w-[100%] absolute bg-black top-16 p-10 left-0 h-[50vh] ${isOpen ? 'open' : ''}`}>
              <div><Link href='/blog/blog' className='font-semibold text-2xl text_nav'>Home </Link><FontAwesomeIcon className='ml-7 cursor-pointer arror_icon font-semibold text-2xl'  icon={faArrowRight} /></div>
              <div><Link href='/blog/blog' className='font-semibold text-2xl mr-8 text-gray-400 text_nav'>Blog </Link><FontAwesomeIcon className='ml-7 cursor-pointer font-semibold text-2xl arror_icon text-gray-400' icon={faArrowRight} /></div>
              <div><Link href='/blog/blog' className='font-semibold text-2xl mr-8 text-gray-400 text_nav'>Shop </Link><FontAwesomeIcon className='ml-7 font-semibold text-2xl cursor-pointer arror_icon text-gray-400'  icon={faArrowRight} /></div>
              <div><Link href='/blog/blog' className='font-semibold text-2xl mr-8 text-gray-400 text_nav'>COntact </Link><FontAwesomeIcon className='ml-7 font-semibold text-2xl cursor-pointer arror_icon text-gray-400'  icon={faArrowRight} /></div>
              <div><Link href='/blog/blog' className='font-semibold text-2xl mr-8 text-gray-400 text_nav'>FAQs </Link><FontAwesomeIcon className='ml-7 font-semibold text-2xl cursor-pointer arror_icon text-gray-400'  icon={faArrowRight} /></div>
              <div>
                <button className='bg-blue-gray-400 text-gray-400'>Get Started</button>
              </div>
            </div>
          </header>
      <section className='mainSection'>
        <main className='mainSectionContent'>

          <div className='pt-[60px] h-[90vh] flex place-items-center'>
            <main className='leading-[6rem] text-[7rem] font-extrabold'>
              <h1 className='text-start mx-16 home_text  text-white w-[50%] font-bold'>Ultimate</h1>
              <h1 className='text-start mx-16 home_text font-semibold text-white w-[50%]'>Crossfit</h1>
              <h1 className='text-start home_text mx-16 font-semibold text-white w-[50%]'> Facility</h1>
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

      <section className='section2 text-white p-8 h-[fit-content]'>
        <div className='text-center section1_Box'>
          <h2 className='text-xl font-semibold'>What we offer</h2>
          <h1 className='text-5xl font-bold px-'>Achieve amazing results <br /> with our services</h1>
          <div className='place-content-center flex'>
            <Image className='text-center rounded-xl p-1 bg-white h-[40px] w-[40px] m-2' src='data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2225%22%20height%3D%2215%22%20viewBox%3D%220%200%2025%2015%22%3E%3Ctext%20transform%3D%22translate(0%2015)%20rotate(-90)%22%20font-size%3D%2229px%22%20font-family%3D%22PlayfairDisplay-Regular%2C%20Playfair%20Display%22%3E%3Ctspan%20x%3D%220%22%20y%3D%2220%22%3E%C2%AB%3C%2Ftspan%3E%3C%2Ftext%3E%3C%2Fsvg%3E' alt='image' width={70} height={70}></Image>
          </div>
        </div>

        <div className='sectionBox'>
            <main className='py-10 px-4 mainBox rounded-lg'>
              <div className='text-center'><FontAwesomeIcon className='iconBox text-6xl my-3 text-pink-500'  icon={faDashcube}/></div>
              <h1 className='text-center text-xl font-semibold my-2'>Best Equipment</h1>
              <p className='text-gray-200 text-center text-[19px]'>Consectetur adipiscing elit, sed do eiusmod tempo.</p>
            </main>

            <main className='py-10 px-4 mainBox  rounded-lg'>
              <div className='text-center'><FontAwesomeIcon className='iconBox text-6xl my-3 text-pink-500' icon={faStarOfLife}/></div>
              <h1 className='text-center text-xl font-semibold my-2'>Training Plan</h1>
              <p className='text-gray-200 text-center text-[19px]'>Consectetur adipiscing elit, sed do eiusmod tempo.</p>
            </main>

            <main className='py-10 px-4 mainBox rounded-lg'>
              <div className='text-center'><FontAwesomeIcon className='iconBox text-6xl my-3 text-pink-500'  icon={faBottleWater}/></div>
              <h1 className='text-center text-xl font-semibold my-2'>Nutrition plan</h1>
              <p className='text-gray-200 text-center text-[19px]'>Consectetur adipiscing elit, sed do eiusmod tempo.</p>
            </main>

            <main className='py-10 px-4 mainBox rounded-lg'>
              <div className='text-center' ><FontAwesomeIcon className='iconBox text-6xl my-3 text-pink-500'  icon={faPersonSwimming} /></div>
              <h1 className='text-center text-xl font-semibold my-2'>Swimming poor</h1>
              <p className='text-gray-200 text-center text-[19px]'>Consectetur adipiscing elit, sed do eiusmod tempo.</p>
            </main>
        </div>
      </section>

      <section className='section3 bg-gray-900 md:flex p-10 md:p-3 gap-10'>
        <div className='w-[100%]'>
          <Image className='w-[100%]' src={GymBoy} alt='gym image'></Image>
        </div>
        <div className='box text-gray-400 md:mt-5 mt-20 w-[100%]'>
          <h1 className='text-4xl md:text-5xl font-semibold text-white md:translate-x-[-7rem] md:leading-snug'>Sport has the power to change the world</h1>
          <p className='px-0 md:px-[4rem] md:leading-relaxed'>Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam.natus error sit voluptatem accusantium doloremque laudantium. Veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas.</p>
          <button className='mx-0 md:mx-[4rem] mt-6 bg-red-400 p-4 px-8 text-white font-semibold'>About Us</button>
        </div>
      </section>

      <section>
        <Reviews/>
      </section>
      
      <section className='bg-gray-900'>
        <div className="scrolling-text p-3 bg-red-400 text-white justify-evenly w-[fit-content] text-center gap-3">
          <h3 className='text-white rounded-lg p-2 text-2xl'>KrossFit</h3>
          <h3 className='text-white rounded-lg p-2 text-2xl'>Sport</h3>
          <h3 className='p-2 text-2xl'>Swimming</h3>
          <h3 className='rounded-lg p-2 text-2xl'>Gym</h3>
          <h3 className='rounded-lg p-2 text-2xl'>Fitness</h3>
          <h3 className=' p-2 text-2xl'>Trainer</h3>
          <h3 className=' p-2 text-2xl'>Workout</h3>
          <h3 className=' p-2 text-2xl'>Pool</h3>
          <h3 className=' p-2 text-2xl'>Healthy</h3>
          <h3 className='p-2 text-2xl'>Bodybuilding</h3>
          <h3 className='p-2 text-2xl'>Personal</h3>
        </div>
      </section>

      <main className='welcomeGym py-20 bg-gray-900 gap-10 px-10'>
        <div className='welcomeSection w-[100%] md:w-[40%] h-[fit-content] md:h-[80vh]'>
          <Image className='imgBox border border-red-500 h-[fit-content] w-[100%] md:h-[80vh]' src={ChainImg} alt='chain-Image'/>
        </div>
        <div className='gymBox w-[fit-content] md:w-[50%]'>
          <div className='md:pr-[13rem] mb-5 md:mb-40'>
            <h3 className='text-white text-xl'>welcome to the gym</h3>
            <h1 className='text-3xl md:text-5xl text-white font-semibold md:leading-[3rem]'>Forge your fitness: gym and crossfit adventures</h1>
            <p className='text-gray-500 md:leading-snug pt-2 text-[19px]'>Adipiscing elit, sed do eiusmod tempor incididunt labore dolore magna aliqua. Ut enim ad minim veniam, quis.</p>
          </div>
          <div className='excise w-[100%] h-[fit-content] md:h-[60vh]'>
            <Image className='Image border border-red-500 h-[fit-content] md:h-[60vh]' src={Excise} alt='Excise-Image'/>
          </div>
        </div>
      </main>

      <div className='bg-gray-900 justify-center gap-5 flex'>
        <div className='object-cover brightness-50 hover:brightness-100 transition duration-300'>
          <Image src={Asics}  alt='brand-logo'></Image>
        </div>
        <div className='object-cover brightness-50 hover:brightness-100 transition duration-300'>
          <Image src={NikeImg} alt='brand-logo'></Image>
        </div>
        <div className='object-cover brightness-50 hover:brightness-100 transition duration-300'>
          <Image src={Befib} alt='brand-logo'></Image>
        </div>
        <div className='object-cover brightness-50 hover:brightness-100 transition duration-300'>
          <Image src={Amani} alt='brand-logo'></Image>
        </div>
        <div className='object-cover brightness-50 hover:brightness-100 transition duration-300'>
          <Image src={HellmImg} alt='brand-logo'></Image>
        </div>
        <div className='object-cover brightness-50 hover:brightness-100 transition duration-300'>
          <Image src={Reebok} alt='brand-logo'></Image>
        </div>
      </div>
      <main>
        <div></div>
        <div></div>
        <div></div>
      </main>
    </div>

  );
}
export default Index;