"use client";
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';

const LogoScroller = () => {
  const logos = ["/alliancepay.png", "/woodchip.png", "/safe.png", "/ercas.png", "/infoassure.png", "sayswitch.png"];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Slider {...settings}>
      {logos.map((logo, index) => (
        <div key={index}>
          <img src={logo} alt={`Logo ${index + 1}`} style={{ width: '100px' }} />
        </div>
      ))}
    </Slider>
  );
};

export default LogoScroller;
