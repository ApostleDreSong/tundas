"use client";
import React from "react";
import TestimonialScroller from "./TestimonialScroller";

const SuccessStories: React.FC = () => {
  return (
    <div className="bg-custom-grey flex flex-col pt-[6.50rem] container">
      <p className="mb-8 text-white text-5xl font-bold">Success Stories</p>
      <hr className="mb-8 w-full border-[#A6A1BA]" />
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-[50%]"></div>
        <div className="w-full lg:w-[50%]">
          <p
            className="mb-13 text-[#A6A1BA] text-lg font-normal"
            style={{ marginBottom: "54px" }}
          >
            Discover how businesses like yours have transformed their payment
            systems with Tundas Technology.
          </p>
        </div>
      </div>
      <div className="mb-24 ml-0 mr-0 md:ml-[-144px] md:mr-[-144px]">
        <TestimonialScroller />
      </div>
    </div>
  );
};

export default SuccessStories;
