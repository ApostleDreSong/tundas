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
    <div className="bg-[#140D2B] container rounded-2xl p-5 h-[10.5625rem] text-white w-full max-w-xs">
      <div className="flex flex-row items-center gap-2 pb-2">
        <Image src={imageUrl} alt={title} width={32} height={32} className="" />
        <p className="text-white text-sm font-medium">{title}</p>
      </div>
      <p className="text-[#A6A1BA] font-normal text-sm">{content}</p>
    </div>
  );
};

export default Testimonial;
