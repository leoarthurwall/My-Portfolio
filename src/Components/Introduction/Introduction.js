import React from 'react';
import LinkButton from '../LinkButton/LinkButton';
import './Introduction.scss';

function Introduction() {
    return (
      <div main className='intro-container'>
          
            <div className='intro-main-text'>
              <h1 className='intro-main-text-name'>Leo Wall</h1>
              <h2 className='intro-main-text-role'>Front End developer<span className='span-orange'>.</span></h2>
              <p className='intro-main-text-summary'> Passionate about building responsive applications that <span className='span-orange'>solve</span> real-world user <span className='span-orange'>problems</span>.</p>
              <LinkButton hrefProp={`mailto:leowall93@gmail.com`} bodyProp={"Contact"}/>
            </div>
       
      </div>
  )
}

export default Introduction