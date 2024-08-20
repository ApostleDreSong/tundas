import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import "./custom-accordion.css"; // Import custom CSS for icons

const items = [
  {
    itemTitle: "Accordion1",
    itemDetails: "Details of Accordion 1",
  },
  {
    itemTitle: "Accordion1",
    itemDetails: "Details of Accordion 1",
  },
  {
    itemTitle: "Accordion1",
    itemDetails: "Details of Accordion 1",
  },
  {
    itemTitle: "Accordion1",
    itemDetails: "Details of Accordion 1",
  },
  {
    itemTitle: "Accordion1",
    itemDetails: "Details of Accordion 1",
  },
  {
    itemTitle: "Accordion1",
    itemDetails: "Details of Accordion 1",
  },
];

const Faq = () => {
  return (
    // <Accordion style={{border: 'none'}}>
    //   {
    //     items.map((item, index) => (
    //       <AccordionItem key={index} style={{marginBottom: '16px', border: 'none'}}>
    //         <AccordionItemHeading>
    //           <AccordionItemButton style={{borderRadius: '16px'}}>{item.itemTitle}</AccordionItemButton>
    //         </AccordionItemHeading>
    //         <AccordionItemPanel>
    //           <p>{item.itemDetails}</p>
    //         </AccordionItemPanel>
    //       </AccordionItem>
    //     ))
    //   }
    // </Accordion>
    <Accordion className="space-y-4">
      {items.map((item, index) => (
        <AccordionItem key={index} className="border-none">
          <AccordionItemHeading>
            <AccordionItemButton className="flex items-center justify-between w-full p-4 text-left bg-gray-100 rounded-lg hover:bg-gray-200">
              <span>{item.itemTitle}</span>
              <div className="bg-custom-grey rounded-full h-8 w-8 text-center">
                <span className="accordion-icon text-white">+</span>
              </div>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className="p-4 bg-gray-50">
            <p>{item.itemDetails}</p>
          </AccordionItemPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default Faq;
