import React from 'react';
import { Link } from 'react-router-dom';
import footer from '../../../assets/images/footers.png';


const Footer = () => {
  return (
    <footer
      style={{
        background: `url(${footer})`,
        backgroundSize: 'cover'
      }}
      className="p-10 mt-8">
      <div className='footer'>
        <div>
          <span className="footer-title">Services</span>
          <Link to='/' className="link link-hover">Emergency Checkup</Link>
          <Link to='/' className="link link-hover">Monthly Checkup</Link>
          <Link to='/' className="link link-hover">Weekly Checkup</Link>
          <Link to='/' className="link link-hover">Deep Checkup</Link>
        </div>
        <div>
          <span className="footer-title">Oral health</span>
          <Link to='/' className="link link-hover">Fluoride Treatment</Link>
          <Link to='/' className="link link-hover">Cavity Filling</Link>
          <Link to='/' className="link link-hover">Teeth Whitening</Link>
        </div>
        <div>
          <span className="footer-title">Our Address</span>
          <Link to='/' className="link link-hover">Bangladesh Teeth Hospital</Link>
          <Link to='/' className="link link-hover">Dhaka</Link>
          <Link to='/' className="link link-hover">Bangladesh</Link>
        </div>
      </div>
      <div className='text-center mt-32'>
        <p>Copyright © 2023 - All right reserved by Md.Abdul Hafiz Bhuiyan</p>
      </div>
    </footer>
  );
};

export default Footer;