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
      title: "Darl Robertson",
      content:
        "Tundas innovative technologies and best practices have minimised our fraud risk and ensured our payment processes are smooth and secure.",
    },
    {
      imageUrl: "/leslie_testimonial.png",
      title: "Jenny Wilson",
      content:
        "We’ve streamlined our payment systems effortlessly. their team’s expertise & dedication to our success have made all the difference.",
    },
    {
      imageUrl: "/leslie_testimonial.png",
      title: "Wade Warren",
      content:
        "Our partnership with Tundas has transformed our payment systems. Their expert guidance have ensured our transactions are efficient & secure.",
    },
    {
      imageUrl: "/leslie_testimonial.png",
      title: "Savannah Nguyen",
      content:
        "Tundas has been a reliable partner in upgrading our payment systems. their thorough approach & support have significantly improved our operations.",
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
