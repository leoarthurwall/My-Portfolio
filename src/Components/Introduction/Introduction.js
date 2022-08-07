import React from 'react';
import LinkButton from '../LinkButton/LinkButton';
import './Introduction.scss';

function Introduction() {
    return (
      <div main className='intro-container'>
          
            <div className='intro-main-text'>
              <p className='intro-main-text-hi'>Hi<em>,</em> my name is</p>
              <h1 className='intro-main-text-name'>Leo Wall.</h1>
              <h2 className='intro-main-text-role'>I design & develop things<em>.</em></h2>
              <p className='intro-main-text-summary'> I'm a <em>full stack developer</em> & <em>UX designer</em>. I’ve just graduated the School of Code Bootcamp and am seeking my first opportunity.</p>
              <LinkButton hrefProp={`mailto:leowall93@gmail.com`} bodyProp={"Contact"}/>
            </div>
       
      </div>
  )
}

export default Introduction