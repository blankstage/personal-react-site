import React, { Component } from 'react';
import PropTypes from 'prop-types'
import '../../css/main.css';

class ImageGallery extends Component {
  renderImages = (images) => {
    let imageArray = []

    for(const [index, value] of images.entries()) {
      imageArray.push(<img key={index} className='gallery__image' src={value} alt={'Image gallery, image #' + (index + 1)} />)
    }

    return imageArray
  }

  render() {
    const { images } = this.props
    return (
      <div className='imageGallery'>
        <h1>Image Gallery</h1>
        <div className='gallery'>
          {this.renderImages(images)}
        </div>
      </div>
    );
  }
}

ImageGallery.propTypes = {
  images: PropTypes.array
}

export default ImageGallery;
