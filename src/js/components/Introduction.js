import React, { Component } from 'react';
import Stockimage1 from '../../img/stockimage1.jpg'
import '../../css/main.css';

class Introduction extends Component {
  render() {
    return (
      <div className='introduction'>
        <div className='imageWrapper'>
        <img src={Stockimage1} className='image' alt='Introduction Image' />
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam viverra semper dui eu porttitor. Nunc convallis elit quis massa venenatis, at gravida nulla convallis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In sollicitudin hendrerit neque, mollis lacinia magna egestas eu. Nunc laoreet in nisl nec pretium.</p>
      </div>
    );
  }
}

export default Introduction;
