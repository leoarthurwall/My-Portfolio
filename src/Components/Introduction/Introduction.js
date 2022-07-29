// import { GitHub, LinkedIn, Twitter } from '@material-ui/icons';
import React from 'react';
import '../social-icons/socialicons.scss'

// import Navbar from '../Navbar/navbar';
import './Introduction.scss';

function Introduction() {
    return (
      <div main className='intro-container'>
        <div className='intro-main'>
          <div className='intro-main-left'>
          </div>
          <div className='intro-main-right'>
            <text className='intro-main-text'>
              <p className='intro-main-text-hi'>Hi<em>,</em> my name is</p>
              <h1 className='intro-main-text-name'>'name'</h1>
              <h2 className='intro-main-text-role'>I design & develope things.</h2>
              <p className='intro-main-text-summary'> I am <em>full stack developer</em> & <em>Cyber security analyst</em>. I've just completed the prestigious School of code,looking to enter the world of software developement.</p>
              <button className='intro-main-button'>get in touch </button>       
            </text>
          </div>
        </div>
      </div>
  )
}

export default Introduction