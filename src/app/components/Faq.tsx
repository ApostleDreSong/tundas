"use client";
import React, { useState } from "react";
import "react-accessible-accordion/dist/fancy-example.css";
import "./custom-accordion.css"; // Import custom CSS for icons
import Image from "next/image";

interface AccordionItemProps {
  itemTitle: string;
  itemDetails: string;
}

const items: AccordionItemProps[] = [
  {
    itemTitle: "How do I get started with your services?",
    itemDetails:
      "Use the contact sales button to schedule an initial consultation",
  },
  {
    itemTitle: "What type of business do you work with?",
    itemDetails:
      "We work with businesses of all sizes and industries, from startups to large enterprises.",
  },
  {
    itemTitle: "Can your solution be customised for my business?",
    itemDetails:
      "Yes, our solutions are tailored to meet your specific business needs.",
  },
  {
    itemTitle: "Do you provide support after implementation?",
    itemDetails: "Yes, we offer ongoing support and maintenance.",
  },
  {
    itemTitle: "How do you handle compliance with industry regulations?",
    itemDetails:
      "We ensure all solutions comply with latest industry regulations and offer compliance consulting.",
  },
  {
    itemTitle: "How do I request a demo of your services?",
    itemDetails:
      "Use the contact sales button to request a demo of our services.",
  },
];

const Faq: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleAccordionClick = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div key={index} className="">
          <div
            onClick={() => handleAccordionClick(index)}
            className="rounded-t-2xl rounded-b-sm flex items-center justify-between w-full p-3 lg:p-8 text-left bg-gray-100 hover:bg-gray-200 cursor-pointer"
          >
            <span className="w-[85%] lg:w-full text-lg font-medium text-custom-grey">
              {item.itemTitle}
            </span>
            <div className="bg-custom-grey rounded-full h-8 w-8 text-center flex items-center justify-center">
              <span className="accordion-icon text-white">
                {expandedIndex === index ? (
                  <Image
                    src={"/cancel-icon.svg"}
                    alt="Cancel"
                    width={10.61}
                    height={10.61}
                  />
                ) : (
                  "+"
                )}
              </span>
            </div>
          </div>
          {expandedIndex === index && (
            <div className="p-3 lg:p-8 text-[#434960] font-normal text-base bg-gray-100 rounded-b-2xl">
              <p>{item.itemDetails}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Faq;
