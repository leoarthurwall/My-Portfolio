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
              <h1 className='intro-main-text-name'>Leo Wall</h1>
              <h2 className='intro-main-text-role'>I design & develop things.</h2>
              <p className='intro-main-text-summary'> I'm a <em>full stack developer</em> & <em>UX designer</em>. I’ve just graduated the School of Code Bootcamp and am seeking my first opportunity.</p>
              <button className='intro-main-button'>get in touch </button>       
            </text>
          </div>
        </div>
      </div>
  )
}

export default Introduction