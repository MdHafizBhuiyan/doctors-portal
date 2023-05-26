import React from 'react';
import chair from '../../../assets/images/chairs.png';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const Banner = () => {
  return (
    <div className="hero min-h-screen  p-2">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={chair} className=" rounded-lg lg:w-1/2 shadow-2xl" alt='' />
        <div>
          <h1 className="text-5xl font-bold">Peace begins with a smile</h1>
          <h2 className="text-2xl font-semibold mt-2">Life is short. Smile while you still have teeth</h2>
          <p className="py-6">Smiling is definitely one of the best beauty remedies. If you have a good sense of humor and a good approach to life, that’s beautiful.</p>
          <PrimaryButton>GET STARTED</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Banner;