import Link from 'next/link'
import React from 'react'

const Pricing = () => {
  return (
    <div className='pricing text-white p-10 px-3 md:p-16'>
        <h2 className='font-semibold text-xl my-2 md:my-4'>Personal training</h2>
        <h1 className='text-3xl md:text-5xl font-semibold my-2 md:my-4'>Pricing plans</h1>
        <p className='leading-relaxed text-gray-300 pr-10 md:pr-48 md:w-[50%]'>Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad.</p>
        <main className="cardBox flex gap-2 md:gap-6">
            <div className='pricingBox p-5 text-start md:py-16 md:p-10 mt-5'>
                <h1 className='text-2xl my-4'>Basic</h1>
                <h2 className='text-4xl font-semibold md:text-6xl text-red-500'><span className='text-orange-600'>$55</span>.55</h2>
                <p className='text-gray-400 mt-2 mb-5'>Per month</p>
                <p className='text-gray-400 my-2'>Adipiscing elit sed do eusmod tempor incididunt ut labore et.</p>
                <button className='border-2 font-semibold p-3 px-7 hover:bg-red-700 hover:border-transparent transition-all'><Link href='#'>Get Now</Link></button>
            </div>
            <div className='pricingBox p-5 text-start md:py-16 md:p-10 mt-5'>
                <h1 className='text-2xl my-4'>Advanced</h1>
                <h2 className='text-4xl font-semibold md:text-6xl text-red-500'><span className='text-orange-600'>$75</span>.75</h2>
                <p className='text-gray-400 mt-2 mb-5'>Per month</p>
                <p className='text-gray-400 my-2'>Adipiscing elit sed do eusmod tempor incididunt ut labore et.</p>
                <button className='font-semibold p-3 px-7 hover:bg-transparent bg-red-700 border-2 border-transparent hover:border-2 hover:border-white transition-all'><Link href='#'>Get Now</Link></button>
            </div>
            <div className='pricingBox p-5 text-start md:py-16 md:p-10 mt-5'>
                <h1 className='text-2xl my-4'>Strong</h1>
                <h2 className='text-4xl font-semibold md:text-6xl text-red-500'><span className='text-orange-600'>$95</span>.70</h2>
                <p className='text-gray-400 mt-2 mb-5'>Per month</p>
                <p className='text-gray-400 my-2'>Adipiscing elit sed do eusmod tempor incididunt ut labore et.</p>
                <button className='border-2 font-semibold p-3 px-7 hover:bg-red-700 hover:border-transparent transition-all'><Link href='#'>Get Now</Link></button>
            </div>
        </main>
    </div>
  )
}

export default Pricing
