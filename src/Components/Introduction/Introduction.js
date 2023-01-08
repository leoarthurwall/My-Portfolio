import React from 'react';
import LinkButton from '../LinkButton/LinkButton';
import './Introduction.scss';

function Introduction() {
    return (
      <div main className='intro-container'>
          
            <div className='intro-main-text'>
              <p className='intro-main-text-hi'>Hi<em>,</em> my name is</p>
              <h1 className='intro-main-text-name'>Leo Wall.</h1>
              <h2 className='intro-main-text-role'>Front End developer</h2>
              <p className='intro-main-text-summary'> with a passion for building responsive applications that <em>solve</em> real-world user <em>problems</em>.</p>
              <LinkButton hrefProp={`mailto:leowall93@gmail.com`} bodyProp={"Contact"}/>
            </div>
       
      </div>
  )
}

export default Introduction