import React, { Component } from 'react';
import './home.css';

import SignUpForm from '../SignupForm/signup-form';
import second from '../../assets/img/second.png';
export default class Home extends Component {

  render() {
    return (
      <>
        <div className='mx-0 w-full h-auto px-2 py-4 bg-local signup-section'>
          <div className='flex mb-4'>
            <div className='w-full h-12'>
              <h5 className="text-center py-4 lg:py-2 text-3xl md:text-5xl title"><strong>Do you want to buy or sell products?</strong></h5>
            </div>
          </div>
          <div className='flex mb-3 flex-col lg:flex-row'>
            <div className="w-full lg:w-2/3 text-left pt-16 md:py-10 my-auto md:px-3 md:mx-3">
              <h3 className=' text-2xl md:text-4xl subtitle'><strong>You're not a company?</strong></h3>
              <h5 className='text-lg md:text-2xl content'>Lorem ipsum dolor sit.</h5>
              <h5 className='text-lg md:text-2xl content'>Only register in our page and you can start to join our services.</h5>
            </div>
            <div className="w-full lg:w-1/3 py-0 md:py-10 md:px-3 md:mx-3 my-4 rounded-md card">
              <h3 className=' text-center text-xl md:text-3xl subtitle'><strong>Sign Up</strong></h3>
              <SignUpForm />
            </div>
          </div>
        </div>
        <div className='mx-0 w-full h-auto px-3 py-5 bg-local our-services'>
          <p className=" text-6xl service-text text-center font-bold mb-0">Our Services </p>
          <div className="flex mb-2 flex-col lg:flex-row">
            <div className="w-full text-left lg:w-1/2 pt-16 md:py-10 my-auto md:px-3 md:mx-3">
              <h3 className="text-xl md:text-2xl service-content font-semibold">
                You dont know it the biggest of our services. Your best decision is go and register now here.
                Our services are the best in the market, you can comprobe this now.
              </h3>
              <h3 className="text-xl md:text-2xl service-content font-semibold mt-4">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Cupiditate repellat, aspernatur ab sequi porro laudantium minima dolorum repellendus hic qui!
              </h3>
            </div>
            <div className="w-full text-left lg:w-1/2 pt-16 md:py-4 my-auto md:px-3 md:mx-3">
              <img src={ second } alt="secondImage" className="mx-auto my-0"/>
            </div>
          </div>
        </div>
      </>
    );
  }
}