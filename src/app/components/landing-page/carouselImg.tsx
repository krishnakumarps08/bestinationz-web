import React from 'react';
import { Carousel } from 'antd';
import Image from 'next/image';
import Property from '../../../../public/property.jpg'
import propertyone from '../../../../public/resortone.jpg'
import propertytwo from '../../../../public/resorttwo.jpg'
import proprtythree from '../../../../public/heading.jpg'
const contentStyle: React.CSSProperties = {
  height: '350px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

export const CarouselImg: React.FC = () => (
  <Carousel autoplay speed={1000} arrows={true}>
    <div>
     <Image src={Property} style={contentStyle} alt='Image1' />
    </div>
    <div>
    <Image src={propertyone} style={contentStyle} alt='Image1' />
    </div>
    <div>
    <Image src={propertytwo} style={contentStyle} alt='Image1' />
    </div>
    <div>
    <Image src={proprtythree} style={contentStyle} alt='Image1' />
    </div>
  </Carousel>
);
