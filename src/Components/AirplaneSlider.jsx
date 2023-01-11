import React from "react";

import Slider from "react-slick";

import "../../src/Styles/home.css";

const AirplaneSlider = () => {
  const settings = {
    fade: true,
    speed: 2000,
    autoplaySpeed: 3000,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
  };
  return (
    <Slider {...settings} className="hero__slider">
      <div className="slider__item airplane-1">
      <div className="bg-cover flex h-full flex-col justify-center">
        <p className="text-white text-6xl font-roboto font-bold max-w-3xl lh-2 ml-5"> 
          Around The World Always With you 
        </p>
        <p className="text-white font-roboto mt-12 text-lg ml-5">Enjoy your life, Enjoy your ride ...</p>
      </div>
      </div>
 
      <div className="slider__item airplane-2">
      <div className="bg-cover flex h-full flex-col justify-center">
      <p className="text-white text-6xl font-roboto font-bold max-w-3xl lh-2 ml-5"> 
          Around The World Always With you 
        </p>
        <p className="text-white font-roboto mt-12 text-lg ml-5">Enjoy your life, Enjoy your ride ...</p>
      
      </div>
      </div>

      <div className="slider__item airplane-3">
      <div className="bg-cover flex h-full flex-col justify-center">
      <p className="text-white text-6xl font-roboto font-bold max-w-3xl lh-2 ml-5"> 
          Around The World Always With you 
        </p>
        <p className="text-white font-roboto mt-12 text-lg ml-5">Enjoy your life, Enjoy your ride ...</p>
      
      </div>
      </div>
      <div className="slider__item airplane-4">
      <div className="bg-cover flex h-full flex-col justify-center">
      <p className="text-white text-6xl font-roboto font-bold max-w-3xl lh-2 ml-5"> 
          Around The World Always With you 
        </p>
        <p className="text-white font-roboto mt-12 text-lg ml-5">Enjoy your life, Enjoy your ride ...</p>
      </div>
      </div> 
          </Slider>
  );
};

export default AirplaneSlider;
