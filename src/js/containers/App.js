import React, { Component } from 'react';
import Introduction from '../components/Introduction'
import ImageGallery from '../components/ImageGallery'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import Stockimage1 from '../../img/stockimage1.jpg'
import '../../css/main.css';

class App extends Component {
  render() {
    const images = [Stockimage1, Stockimage1, Stockimage1, Stockimage1, Stockimage1]
    return (
      <div className='app'>
        <div className='app__body'>
          <HeroSection />
          <div className='block block--dark'>
            <Introduction />        
          </div>
          <div className='block block--light'>
            <ImageGallery images={images} />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
