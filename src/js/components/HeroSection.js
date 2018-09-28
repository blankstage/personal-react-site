import React, { Component } from 'react';
import Logo from '../../img/logo.svg'
import '../../css/main.css';

class HeroSection extends Component {
  render() {
    return (
      <div className='hero'>
        <header className='hero__top'>
          <a href='#'><img className='logo' src={Logo} /></a>
          <nav>
            <span className='desktop'>
            <a href='#'>Text 1</a>
            <a href='#'>Text 2</a>
            <a href='#'>Text 3</a>
            <a href='#'>Text 4</a>
            </span>
            <span className='mobile'>
              <a className='hamburgerMenu'>&#8801;</a>
            </span>
          </nav>
        </header>
        <div className='hero__middle'>
          <h1>Hero</h1>
        </div>
        <div className='hero__bottom'>
        </div>
      </div>
    );
  }
}

export default HeroSection;
