import React from 'react';
import chair from '../../../assets/images/chairs.png';
import { DayPicker } from 'react-day-picker';
import bg from '../../../assets/images/bgs.png';

const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {

  return (
    <header
      style={{
        background: `url(${bg})`,
        backgroundSize: 'cover'
      }}
      className='my-6'>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={chair} className="max-w-sm lg:w-1/2 rounded-lg shadow-2xl" alt='dentist chair' />
          <div className='mr-6'>
            <DayPicker
              mode='single'
              selected={selectedDate}
              onSelect={setSelectedDate}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppointmentBanner;