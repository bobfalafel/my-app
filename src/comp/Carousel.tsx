import React, { useState } from 'react';
import './Carousel.css';
import {
  BrowserRouter,
  useParams,
  Route,
  Routes,
  Link,
} from 'react-router-dom';

const Carousel = (props:{images:string[]}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const length = props.images.length;

  const goToNextSlide = () => {
    const index = currentIndex === length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(index);
  };

  const goToPrevSlide = () => {
    const index = currentIndex === 0 ? length - 1 : currentIndex - 1;
    setCurrentIndex(index);
  };

  return (
    <div className="carousel">
      <div className="carousel-images">
        {props.images.map((image, index) => (
          <div
            key={index}
            className={index === currentIndex ? 'active' : 'inactive'}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
        
      </div>
      <button className="carousel-prev" onClick={goToPrevSlide}>
        Previous
      </button>
      <button className="carousel-next" onClick={goToNextSlide}>
        Next
      </button> 
    </div>
  );
};

export default Carousel;
