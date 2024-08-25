"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const LogoScroller = () => {
  const logos = [
    "/alliancepay.svg",
    "/woodchip.svg",
    "/safe.svg",
    "/ercas.svg",
    "/infoassure.svg",
    "/sayswitch.svg",
  ];
  const settings = {
    dots: false,
    arrows: false,
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
        <div key={index} className="pr-12">
          <div className="text-center">
            <Image
              src={logo}
              alt={`Logo ${index + 1}`}
              width={140}
              height={10}
              objectFit="contain"
            />
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default LogoScroller;
