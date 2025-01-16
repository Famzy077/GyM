import React from 'react'
import Link from 'next/link'
const Index = () => {
  return (
    <div>
        <header>
            <div className="logo">
                <h1 className='text-red-700'>GyM House</h1>
            </div>
            <nav>
                <ul className=''>
                    <li><Link href='/blog/blog'>Home</Link></li>
                    <li><Link href='/blog/blog'>Blog</Link></li>
                    <li><Link href='/blog/blog'>Equipment</Link></li>
                    <li><Link href='/blog/blog'>Booking</Link></li>
                </ul>
            </nav>
        </header>

        <section>
            
        </section>
    </div>
  )
}

export default Index
