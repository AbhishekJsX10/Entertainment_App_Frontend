import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SingleCard from './SingleCard';
import Loader from "./Loader"

const AutoScrollCarousel = ({data}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  };

  return (
    <>
    <div className='overflow-hidden'>
      <Slider {...settings}>
        {data.map((trend,index)=>{
          return(
            <div key={index}>
              <SingleCard cards={trend}/>
            </div>
          )
        })}
      </Slider>

    </div>
    </>
  );
};

export default AutoScrollCarousel;
