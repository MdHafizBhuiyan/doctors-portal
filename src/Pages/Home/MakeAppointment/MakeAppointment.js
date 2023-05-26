import React from 'react';
import doctor from '../../../assets/images/doctors.png';
import appointment from '../../../assets/images/appointments.png';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const MakeAppointment = () => {
  return (
    <section className='mt-32'
      style={{
        background: `url(${appointment})`
      }}
    >
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row">
          <img src={doctor} className="-mt-36 hidden md:block lg:w-1/2 rounded-lg shadow-2xl" alt='' />
          <div>
            <h4 className='text-lg text-primary font-bold'>Appointment</h4>
            <h1 className="text-4xl font-bold text-white">Make An Appointment Today</h1>
            <p className="py-6 text-white">A doctor appointment letter is used to set an appointment with your doctor or to reschedule the previous appointment which you, unfortunately, cannot go to. There are various kinds of simple doctor appointment letters applicable for use in different purposes and functions which is very essential to be sent as doctors have a lot to do in a day’s time due to hospital meetings and emergencies which is the reason why their schedule must truly be respected.</p>
            <PrimaryButton> GET APPOINTMENT</PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakeAppointment;