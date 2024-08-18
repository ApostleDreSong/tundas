import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';

const items = [
  {
    itemTitle: 'Accordion1',
    itemDetails: 'Details of Accordion 1'
  },
  {
    itemTitle: 'Accordion1',
    itemDetails: 'Details of Accordion 1'
  },
  {
    itemTitle: 'Accordion1',
    itemDetails: 'Details of Accordion 1'
  },
  {
    itemTitle: 'Accordion1',
    itemDetails: 'Details of Accordion 1'
  },
  {
    itemTitle: 'Accordion1',
    itemDetails: 'Details of Accordion 1'
  },
  {
    itemTitle: 'Accordion1',
    itemDetails: 'Details of Accordion 1'
  }
]

const Faq = () => {
  return (
    <Accordion style={{border: 'none'}}>
      {
        items.map(item => (
          <AccordionItem style={{marginBottom: '16px', border: 'none'}}>
            <AccordionItemHeading>
              <AccordionItemButton style={{borderRadius: '16px'}}>{item.itemTitle}</AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>{item.itemDetails}</p>
            </AccordionItemPanel>
          </AccordionItem>
        ))
      }
    </Accordion>
  );
};

export default Faq;
