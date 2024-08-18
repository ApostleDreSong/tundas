"use client";
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import Testimonial from './Testimonial';

const TestimonialScroller = () => {
  const testimonials = [
    {
      imageUrl: "/leslie_testimonial.png",
      title: "Leslie Alexander",
      content: "Their seamless integration and proactive support have ensured our payment processes are efficient and secure."
    },
    {
      imageUrl: "/leslie_testimonial.png",
      title: "Leslie Alexander",
      content: "Their seamless integration and proactive support have ensured our payment processes are efficient and secure."
    },
    {
      imageUrl: "/leslie_testimonial.png",
      title: "Leslie Alexander",
      content: "Their seamless integration and proactive support have ensured our payment processes are efficient and secure."
    },
    {
      imageUrl: "/leslie_testimonial.png",
      title: "Leslie Alexander",
      content: "Their seamless integration and proactive support have ensured our payment processes are efficient and secure."
    },
    {
      imageUrl: "/leslie_testimonial.png",
      title: "Leslie Alexander",
      content: "Their seamless integration and proactive support have ensured our payment processes are efficient and secure."
    }
  ];
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
      {testimonials.map((testimonial, index) => (
        <div key={index}>
          <Testimonial imageUrl={testimonial.imageUrl} title={testimonial.title} content={testimonial.content} />
        </div>
      ))}
    </Slider>
  );
};

export default TestimonialScroller;
