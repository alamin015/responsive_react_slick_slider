import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Circle.css';

const Circle = () => {
  const images = [
    'https://i.ibb.co/TbBGzzW/Yaser-Korhani.png',
    'https://i.ibb.co/zmzvtd9/Hamza.png',
    'https://i.ibb.co/zmzvtd9/Hamza.png',
    'https://i.ibb.co/zmzvtd9/Hamza.png',
  ];

  const settings = {
    dots: true,
    className: 'center',
    centerMode: true,
    slidesToShow: 3,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className='container mx-auto py-[60px]'>
        <Slider {...settings}>
          {images.map((img) => {
            return (
              <div key={Math.random()} className='text-center p-5'>
                <img src={img} alt='' className='mx-auto' />
              </div>
            );
          })}
        </Slider>
      </div>
    </>
  );
};

export default Circle;
