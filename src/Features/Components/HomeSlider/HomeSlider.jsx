import React from 'react';
import Slider from "react-slick";
import slider1 from '../../../Assets/images/slider-2.jpeg'
import slider2 from '../../../Assets/images/grocery-banner.png'
import slider3 from '../../../Assets/images/grocery-banner-2.jpeg'
import slider4 from '../../../Assets/images/slider4.jpeg'
import slider5 from '../../../Assets/images/slider5.jpeg'

export default function HomeSlider() {

  var settings = {
    dots: false,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className="row g-0 my-2">
      <div className="col-md-8">
        <Slider {...settings}>
          <img src={slider1} alt="slider1" className='w-100' height={400} />
          <img src={slider2} alt="slider2" className='w-100' height={400} />
          <img src={slider3} alt="slider3" className='w-100' height={400} />
        </Slider>
      </div>
      <div className="col-md-4">
        <img src={slider4} alt="blog1" className='w-100' height={200} />
        <img src={slider5} alt="blog2" className='w-100' height={200} />
      </div>
    </div>
  )
}
