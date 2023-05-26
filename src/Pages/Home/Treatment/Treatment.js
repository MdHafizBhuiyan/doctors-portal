import React from 'react';
import treatment from '../../../assets/images/treatments.png'
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const Treatment = () => {
  return (
    <div className="hero  p-16">
      <div className="hero-content flex-col lg:flex-row">
        <img src={treatment} className="rounded-lg lg:w-1/3 shadow-2xl" alt='' />
        <div className='p-8'>
          <h1 className="text-5xl font-semibold">Exceptional Dental Care, On Your Terms</h1>
          <p className="py-6"> ​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​Dental or oral health is concerned with your teeth, gums and mouth. The goal is to prevent complications such as tooth cavities and gum disease and to maintain the overall health of your mouth.</p>
          <PrimaryButton>GET CARE</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Treatment;