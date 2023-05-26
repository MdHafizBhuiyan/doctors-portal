import React from 'react';
import clock from '../../../assets/icons/clocks.svg';
import marker from '../../../assets/icons/markers.svg';
import phone from '../../../assets/icons/phones.svg';
import InfoCard from './InfoCard';

const InfoCards = () => {

  const cardData = [
    {
      id: 1,
      name: 'Opening hours',
      description: 'Open 9.00 am to 5.00pm everyday',
      icon: clock,
      bgClass: 'bg-gradient-to-r from-primary to-secondary'
    },
    {
      id: 2,
      name: 'Visits Our Location',
      description: 'Dhaka Teeth Hospital, Dhaka-Bangladesh',
      icon: marker,
      bgClass: 'bg-gradient-to-r from-violet-500 to-fuchsia-500'
    },
    {
      id: 3,
      name: 'Contact Us Now',
      description: '01779973614',
      icon: phone,
      bgClass: 'bg-gradient-to-r from-sky-500 to-indigo-500'
    },
  ]
  return (
    <div className='grid mt-8 gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
      {
        cardData.map(card => <InfoCard
          key={card.id}
          card={card}
        ></InfoCard>)
      }
    </div>
  );
};

export default InfoCards;