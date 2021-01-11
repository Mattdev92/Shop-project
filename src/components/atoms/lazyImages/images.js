import React from 'react';
import Slider from 'react-slick';

import {
   Wrapper,
   WrapperTwo,
} from 'views/Main-styles';

const Images = () => {
    const settings = {
        dots: false,
        fade: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 6000,
        slidesToShow: 1,
        arrows: true,
        slidesToScroll: 1,
        className: 'slides',
        lazyLoad: 'progressive',
     };
     return(
        <Slider {...settings}>
      <Wrapper />
      <WrapperTwo />
     </Slider> 
     )

     };

export default Images;
