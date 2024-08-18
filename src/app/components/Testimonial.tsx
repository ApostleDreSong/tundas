"use client";
import React, { FC } from 'react';
import Image from 'next/image';

// Define the props type
interface TestimonialProps {
    imageUrl: string;
    title: string;
    content: string;
}

const Testimonial: FC<TestimonialProps> = ({ imageUrl, title, content }) => {
    return (
        <div style={{ backgroundColor: '#140D2B', borderRadius: '16px', marginRight: '20px', padding: '20px', color: 'white' }}>
            <div className='flex'>
                <Image src={imageUrl} alt={title} width={32} height={32} className="mb-6 md:mb-14 mr-1.5" />
                <p>{title}</p>
            </div>
            <p>{content}</p>
        </div>
    );
};

export default Testimonial;
