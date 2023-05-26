import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import appointment from '../../../assets/images/appointments.png';

const Form = () => {
  const { register, handleSubmit } = useForm()
  const [data, setData] = useState('');
  return (
    <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))} className='mt-16'
      style={{
        background: `url(${appointment})`
      }}>
      <h4 className='text-3xl text-primary font-bold text-center'>Contact Us</h4>
      <h2 className="text-4xl font-semibold text-white text-center">Stay Connected With Us</h2>
      <div className='flex flex-col items-center justify-center'>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text"></span>
          </label>
          <input type="text" {...register("email")} placeholder='Enter Your Email Address' className="input input-bordered w-full max-w-xs" />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text"></span>
          </label>
          <input type="text" {...register("subject")} placeholder='Subject' className="input input-bordered w-full max-w-xs" />
        </div>
        <textarea {...register("aboutYou")} placeholder="Send Messeage...." className='mt-4 p-10' />
        <p>{data}</p>
        <button className='btn btn-primary bg-gradient-to-r from-primary to-secondary text-white font-bold px-6 py-2 m-4 rounded-lg' >SUBMIT</button>
      </div>
    </form>


  );
};

export default Form;