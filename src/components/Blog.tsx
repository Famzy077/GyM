import HellmImg from '../../public/images/Hellm.png'
import Review2 from '../../public/images/Review2.png'
import Review1 from '../../public/images/Review1.png'
import Review3 from '../../public/images/Review3.png'
import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';

const carouselItems = [
  {
    title: "That's why stretching is worth trying",
    category: 'TRAINING',
    date: 'Apr 21, 2020',
    comments: 0,
    img: Review2, // update with your image paths
  },
  {
    title: '10 strength exercises to improve your running',
    category: 'TRAINING',
    date: 'Apr 21, 2020',
    comments: 1,
    img: Review1,
  },
  {
    title: 'How to choose the right workout strategy',
    category: 'TRAINING',
    date: 'Apr 21, 2020',
    comments: 0,
    img: Review3,
  },
  {
    title: 'Top 5 workout locations to vary your daily routine',
    category: 'TRAINING',
    date: 'Apr 21, 2020',
    comments: 0,
    img: HellmImg,
  },
];

const Carousel: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="container text-white bg-gray-900 mx-auto py-8 px-8 md:px-4">
      <h1 className='text-white font-semibold text-xl text-center'>our blog</h1>
      <h1 className='text-3xl md:text-6xl text-center font-semibold text-white mb-5'>Latest new & updates</h1>
      <Slider {...settings}>
        {carouselItems.map((item, index) => (
          <div key={index} className="px-4">
            <div className="bg-gray-60 rounded-lg overflow-hidden">
              <Image
                src={item.img}
                alt={item.title}
                className="w-full h-48 object-fill"
              />
              <div className="px-0 py-4 text-white">
                <p className="uppercase text-sm text-white">{item.category}</p>
                <h3 className="text-lg text-white font-bold">{item.title}</h3>
                <div className="text-white text-sm">
                  {item.date} &bull; {item.comments} Comments
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
