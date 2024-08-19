"use client";
import React, { FC } from "react";
import Image from "next/image";

// Define the props type
interface TestimonialProps {
  imageUrl: string;
  title: string;
  content: string;
}

const Testimonial: FC<TestimonialProps> = ({ imageUrl, title, content }) => {
  return (
    <div className="bg-[#140D2B] container rounded-lg p-5 mb-4 text-white w-full max-w-xs">
      <div className="flex items-start mb-4">
        <Image
          src={imageUrl}
          alt={title}
          width={32}
          height={32}
          className="mr-1.5"
        />
        <p>{title}</p>
      </div>
      <p>{content}</p>
    </div>
  );
};

export default Testimonial;
