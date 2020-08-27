import React, { Component } from 'react';
import gato from '../../assets/img/gato.svg';
import gmail from '../../assets/img/logotipo-de-gmail.svg';
import linkedin from '../../assets/img/linkedin.svg';

import './Footer.css';

export default class Footer extends Component {

  render() {
    return (
      <div className="w-full px-3 py-2 footer-section">
        <div className="text-center font-semibold">
          <span className='title'>Contact Me</span>
        </div>
        <div className="w-full flex justify-center">
        <a href="https://github.com/LKezHn" className='inline-block'>
          <img className='my-2 mx-2' src={gato} alt='github-page' width='40vw' height='40vh' />
        </a>
        <a href="https://github.com/LKezHn" className='inline-block'>
          <img className='my-2 mx-2' src={gmail} alt='github-page' width='40vw' height='40vh' />
        </a>
        <a href="https://www.linkedin.com/in/lkezhn/" className='inline-block'>
          <img className='my-2 mx-2' src={linkedin} alt='github-page' width='40vw' height='40vh' />
        </a>
        </div>
      </div>
    )
  }
}