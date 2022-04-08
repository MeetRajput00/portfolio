import React, {useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import './front.css';
import Type from './type';
const Header = () => {
  return (
      <div className="mainBody">
        <Fade left={true} duration={1000} delay={500} distance="30px">
          <h1>
            <div className='intro_lines'>
                {'Hi, my name is'}{' '}
                <span className='name'>{'Meet Rajput'}</span>
            </div>
            <br />
            <div style={{padding: 30 ,textAlign: "center" , fontSize:24}}>
                <Type />
            </div>
          </h1>
        </Fade>
        <Fade left={true} duration={1000} delay={1000} distance="30px">
          <p>
          <button id="buttonID" href="https://twitter.com/kamildyrek">
                <div className="left" />
                Download my CV!
                <div className="right" />
            </button>
          </p>
        </Fade>
      </div>
  );
};

export default Header;
