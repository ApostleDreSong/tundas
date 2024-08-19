"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Testimonial from "./Testimonial";

const TestimonialScroller = () => {
  const testimonials = [
    {
      imageUrl: "/leslie_testimonial.png",
      title: "Leslie Alexander",
      content:
        "Their seamless integration and proactive support have ensured our payment processes are efficient and secure.",
    },
    {
      imageUrl: "/leslie_testimonial.png",
      title: "Leslie Alexander",
      content:
        "Their seamless integration and proactive support have ensured our payment processes are efficient and secure.",
    },
    {
      imageUrl: "/leslie_testimonial.png",
      title: "Leslie Alexander",
      content:
        "Their seamless integration and proactive support have ensured our payment processes are efficient and secure.",
    },
    {
      imageUrl: "/leslie_testimonial.png",
      title: "Leslie Alexander",
      content:
        "Their seamless integration and proactive support have ensured our payment processes are efficient and secure.",
    },
    {
      imageUrl: "/leslie_testimonial.png",
      title: "Leslie Alexander",
      content:
        "Their seamless integration and proactive support have ensured our payment processes are efficient and secure.",
    },
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
    responsive: [
      {
        breakpoint: 768, // Adjust the breakpoint as needed
        settings: {
          slidesToShow: 1, // Show one slide at a time on small screens
          slidesToScroll: 1,
          dots: false,
          arrows: false,
        },
      },
      {
        breakpoint: 1024, // Adjust the breakpoint as needed
        settings: {
          slidesToShow: 2, // Show two slides at a time on medium screens
          slidesToScroll: 1,
          dots: false,
          arrows: false,
        },
      },
      {
        breakpoint: 1440, // Adjust the breakpoint as needed
        settings: {
          slidesToShow: 3, // Show three slides at a time on large screens
          slidesToScroll: 1,
          dots: false,
          arrows: false,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {testimonials.map((testimonial, index) => (
        <div key={index}>
          <Testimonial
            imageUrl={testimonial.imageUrl}
            title={testimonial.title}
            content={testimonial.content}
          />
        </div>
      ))}
    </Slider>
  );
};

export default TestimonialScroller;
