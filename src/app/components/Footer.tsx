"use client";
import React from "react";
import {
  ArrowRightIcon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import TestimonialScroller from "./TestimonialScroller";
import Faq from "./Faq";

const Footer: React.FC = () => {
  return (
    <div className="bg-custom-grey flex flex-col pt-12 container">
      <p
        className="mb-8 text-white"
        style={{ fontSize: "48px", fontWeight: 700, lineHeight: "54px" }}
      >
        Success Stories
      </p>
      <hr
        style={{
          borderColor: "white",
          width: "100%",
          height: "1px",
          marginBottom: "32px",
        }}
      />
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-[50%]"></div>
        <div className="w-full lg:w-[50%]">
          <p className="mb-13 text-white" style={{ marginBottom: "54px" }}>
            Discover how businesses like yours have transformed their payment
            systems with Tundas Technology.
          </p>
        </div>
      </div>
      <div className="mb-24 ml-0 mr-0 md:ml-[-144px] md:mr-[-144px]">
        <TestimonialScroller />
      </div>
      <div
        id="faq"
        className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white rounded-[84px] p-10 md:p-[120px] ml-0 mr-0 md:ml-[-144px] md:mr-[-144px]"
      >
        <div>
          <p
            style={{
              fontSize: "48px",
              lineHeight: "54px",
              fontWeight: 700,
              marginBottom: "20px",
            }}
          >
            Frequently Asked <br /> Questions
          </p>
          <p style={{ marginBottom: "32px" }}>
            Get answers to commonly asked questions
          </p>
          <div
            className="inline-flex items-center rounded-custom-30.4 p-2 pr-6"
            style={{ backgroundColor: "#F0F1F8" }}
          >
            <div
              className="bg-custom-grey flex justify-center items-center"
              style={{ width: "40px", height: "40px", borderRadius: "100px" }}
            >
              <ArrowRightIcon
                className="text-white"
                style={{ width: "20px", height: "20px" }}
              />
            </div>
            <span className="ml-2">Contact sales</span>
          </div>
        </div>
        <div>
          <Faq />
        </div>
      </div>
      <p
        className="text-white text-center text-4xl md:text-6xl font-bold mb-8 md:mb-11"
        style={{ marginTop: "96px" }}
      >
        Let’s Help You Grow <br className="block md:hidden" /> Your Business
      </p>
      <div className="flex justify-center mb-8">
        <div className="flex justify-center items-center bg-white rounded-custom-30.4 p-2 pr-6">
          <div
            className="bg-custom-grey flex justify-center items-center"
            style={{ width: "40px", height: "40px", borderRadius: "100px" }}
          >
            <ArrowRightIcon
              className="text-white"
              style={{ width: "20px", height: "20px" }}
            />
          </div>
          <span className="ml-2">Contact sales</span>
        </div>
      </div>
      <hr
        style={{
          borderColor: "#3C384D",
          width: "100%",
          height: "1px",
          marginTop: "48px",
          marginBottom: "48px",
        }}
      />
      <div className="flex flex-col md:flex-row justify-between">
        <div className="mb-8 md:mb-0">
          <Image
            src="/tundas_logo_name.png"
            alt="Tundas Logo"
            width={145}
            height={39}
            className="mb-6 md:mb-14"
          />
          <p className="text-white text-base font-semibold mb-4">
            Get in touch
          </p>
          <div className="mb-2">
            <EnvelopeIcon className="inline w-6 h-6 text-white mr-3" />
            <span className="text-white">tundastechinnovation@gmail.com</span>
          </div>
          <div>
            <PhoneIcon className="inline w-6 h-6 text-white mr-3" />
            <span className="text-white">070-TUNDAS-00</span>
          </div>
        </div>
        <div className="mb-8 md:mb-0">
          <p className="text-white mb-4">Who we are</p>
          <p className="text-white mb-2">About Us</p>
          <p className="text-white mb-2">FAQs</p>
          <p className="text-white mb-2">Twitter [Formerly X]</p>
          <p className="text-white">LinkedIn</p>
        </div>
        <div>
          <p className="text-white mb-4">What We Do</p>
          <p className="text-white mb-2">Payment System Integration</p>
          <p className="text-white mb-2">Payment Strategy Consulting</p>
          <p className="text-white mb-2">Fraud Prevention & Risk Management</p>
          <p className="text-white">Security & Compliance Solution</p>
        </div>
      </div>
      <hr
        style={{
          borderColor: "#3C384D",
          width: "100%",
          height: "1px",
          marginTop: "48px",
          marginBottom: "24px",
        }}
      />
      <p className="text-white text-center text-sm md:text-base mb-10">
        <span className="block md:inline mr-0 md:mr-14 mb-2 md:mb-0">
          © 2024 Tundas Technology Innovation Limited. All Rights Reserved
        </span>
        <span className="block md:inline mr-0 md:mr-14 mb-2 md:mb-0">
          Privacy Policy
        </span>
        <span className="block md:inline">Terms & Conditions</span>
      </p>
    </div>
  );
};

export default Footer;
// px-6 md:px-24 lg:px-36
