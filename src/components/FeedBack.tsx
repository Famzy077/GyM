import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ArrowLeft, ArrowRight, QuoteIcon } from 'lucide-react';
import ReviewImg from '../../public/images/Review1.png'
import ReviewImg2 from '../../public/images/Review2.png'
import ReviewImg3 from '../../public/images/Review3.png'

const reviews = [
  {
    id: 1,
    name: 'Jennifer Lee',
    role: 'Client',
    text: 'Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    image: ReviewImg,
  },
  {
    id: 2,
    name: 'Michael Brown',
    role: 'Client',
    text: 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure.',
    image: ReviewImg2,
  },
  {
    id: 3,
    name: 'Emily Clark',
    role: 'Client',
    text: 'Eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident.',
    image: ReviewImg3,
  },
];

 const Reviews = () => {
  const [currentReview, setCurrentReview] = useState(0);
     // Automatically move to the next review after 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
    }, 4000); // 3000ms = 3 seconds

    return () => clearInterval(interval); // Clear interval on unmount to avoid memory leaks
  }, []);
  const handlePrevClick = () => {
    setCurrentReview((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const handleNextClick = () => {
    setCurrentReview((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="flex flex-col items-center bg-gray-900 pt-[5rem] p-8 md:px-[10rem] text-white">
      <div className="flex items-center space-x-4">
        <button className="p-2 bg-gray-700 rounded-full" onClick={handlePrevClick}>
          <ArrowLeft size={20} />
        </button>

        <div className="flex flex-col items-center">
          <Image
            src={reviews[currentReview].image} 
            alt={reviews[currentReview].name}
            width={80}
            height={80}
            className="rounded-full"
          />
          <p className="text-center text-gray-400 mt-4">
            &ldquo;{reviews[currentReview].text}&ldquo;
          </p>
          <h1 className='mt-5 text-yellow-900'><QuoteIcon/></h1>
          <div className="mt-4">
            <p className="font-semibold">{reviews[currentReview].name}</p>
            <p className="text-sm text-gray-500">{reviews[currentReview].role}</p>
          </div>
        </div>

        <button className="p-2 bg-gray-700 rounded-full" onClick={handleNextClick}>
          <ArrowRight size={20} />
        </button>
      </div>

    </div>
  );
}
export default Reviews;