import React from 'react';
import Link from 'next/link';

const Index = () => {
  return (
    <div>
      <header className='header flex justify-around'>
        <div className="logo">
          <h1 className='text-red-700'>GyM House</h1>
        </div>
        <nav className='nav'>
          <ul className='flex justify-center'>
            <li><Link href='/blog/blog'>Home</Link></li>
            <li><Link href='/blog/blog'>Blog</Link></li>
            <li><Link href='/blog/blog'>Equipment</Link></li>
            <li><Link href='/blog/blog'>Booking</Link></li>
          </ul>
        </nav>
      </header>

      <section className='mainSection'>
        <main className='mainSectionContent'>
          <h1 className='text-center text-4xl'>Welcome to GyM House</h1>
          <p className='text-center text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia.</p>
        </main>
      </section>
    </div>
  );
}

export default Index;