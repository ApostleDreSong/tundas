"use client";
import React from "react";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Faq from "./Faq";

const Footer: React.FC = () => {
  return (
    <div className="bg-custom-grey flex flex-col">
      {/* pt-[6.50rem] */}
      <div className="bg-white rounded-b-[5.25rem]">
        <div
          id="faq"
          className="grid grid-cols-1 md:grid-cols-2 gap-8 container py-[7.5rem]"
        >
          {/* rounded-[84px] */}
          <div>
            <p className="text-5xl font-bold pb-5 text-[#0A002E]">
              Frequently Asked <br /> Questions
            </p>
            <p className="pb-8 text-[#35313F] font-normal text-lg">
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
                <Image
                  src={"/arrow-right-gray.svg"}
                  alt="arrow-right"
                  width={13.33}
                  height={12.96}
                />
              </div>
              <span className="ml-3 text-lg text-custom-grey font-medium">
                Contact sales
              </span>
            </div>
          </div>
          <div>
            <Faq />
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center">
        <p className="text-white text-center lg:leading-[68px] mt-24 text-4xl md:text-6xl font-bold mb-8 md:mb-11 lg:w-[50%]">
          Let’s Help You Grow Your Business
        </p>
      </div>
      <div className="flex justify-center mb-8 container">
        <div className="flex justify-center items-center bg-white rounded-custom-30.4 p-2 pr-6">
          <div
            className="bg-custom-grey flex justify-center items-center"
            style={{ width: "40px", height: "40px", borderRadius: "100px" }}
          >
            <Image
              src={"/arrow-right-gray.svg"}
              alt="arrow-right"
              width={13.33}
              height={12.96}
            />
          </div>
          <span className="ml-2">Contact sales</span>
        </div>
      </div>
      <hr
        className="container"
        style={{
          borderColor: "#3C384D",
          width: "80%",
          height: "1px",
          marginTop: "48px",
          marginBottom: "96px",
        }}
      />
      <div className="container flex flex-col md:flex-row justify-between">
        <div className="mb-8 md:mb-0">
          <Image
            src="/tundas_logo_name.png"
            alt="Tundas Logo"
            width={188.69}
            height={53.87}
            className="mb-6 md:mb-14"
          />
          <p className="text-[#A6A1BA] text-base font-semibold mb-4">
            Get in touch
          </p>
          <div className="mb-2 text-base font-normal">
            <EnvelopeIcon className="inline w-6 h-6 text-white mr-3" />
            <span className="text-white">tundastechinnovation@gmail.com</span>
          </div>
          <div className="text-base font-normal">
            <PhoneIcon className="inline w-6 h-6 text-white mr-3" />
            <span className="text-white">070-TUNDAS-00</span>
          </div>
        </div>
        <div className="mb-8 md:mb-0">
          <p className="text-white mb-6 font-semibold text-base">Who we are</p>
          <p className="mb-6 text-[#A6A1BA]">About Us</p>
          <p className="mb-6 text-[#A6A1BA]">FAQs</p>
          <p className="mb-6 text-[#A6A1BA]">Twitter [Formerly X]</p>
          <p className="text-[#A6A1BA]">LinkedIn</p>
        </div>
        <div>
          <p className="text-white mb-6 font-semibold text-base">What We Do</p>
          <p className="text-[#A6A1BA] mb-6">Payment System Integration</p>
          <p className="text-[#A6A1BA] mb-6">Payment Strategy Consulting</p>
          <p className="text-[#A6A1BA] mb-6">
            Fraud Prevention & Risk Management
          </p>
          <p className="text-[#A6A1BA]">Security & Compliance Solution</p>
        </div>
      </div>
      <hr
        className="container"
        style={{
          borderColor: "#3C384D",
          width: "80%",
          height: "1px",
          marginTop: "96px",
          marginBottom: "48px",
        }}
      />
      <p className="container text-[#A6A1BA] text-left text-sm mb-10">
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
