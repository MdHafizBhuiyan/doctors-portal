import React from 'react';
import fluoride from '../../../assets/images/fluorides.png';
import cavity from '../../../assets/images/cavitys.png';
import whitening from '../../../assets/images/whitenings.png';
import Service from './Service';


const Services = () => {

  const servicesData = [
    {
      id: 1,
      name: 'Fluoride Treatment',
      description: 'Fluoride is a naturally occuring mineral that people add to water, food, and other products.',
      img: fluoride
    },
    {
      id: 2,
      name: 'Cavity Filling',
      description: 'A dentist can prescribe fluoride treatments like mouthwash or varnish to reverse early tooth decay.',
      img: cavity
    },
    {
      id: 3,
      name: 'Teeth Whitening',
      description: 'Everyone notices a bright, white, glowing smile. And everyone notices how confident you feel when you have that beautiful smile.',
      img: whitening
    },
  ]
  return (
    <div className='mt-16'>
      <div className='text-center'>
        <h3 className='text-xl font-bold text-primary uppercase'>Our Services</h3>
        <h2 className='text-3xl font-semibold'>Services We Provide</h2>
      </div>
      <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {
          servicesData.map(service => <Service
            key={service.id}
            service={service}
          ></Service>)
        }
      </div>
    </div>
  );
};

export default Services;