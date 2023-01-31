import { useState } from 'react';
import { slides } from '../../slides';
import BtnSlider from './BtnSlider';
import style from './Slider.module.css';
import cn from 'classnames'

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    if (slideIndex !== slides.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === slides.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(slides.length);
    }
  };

  const moveDot = (index) => {
    setSlideIndex(index);
  };
  return (
      <div className={style.sliderSection}>
    <div className={style.slider}>
      <div className={style.container}>
        {slides.map((item, index) => {
          return (
            <div key={item.id} className={cn(style.slide, {[style.activeAnim] : slideIndex === index + 1})}>
              <img src={item.url} alt={item.alt} />
            </div>
          );
        })}
        <BtnSlider moveSlide={nextSlide} direction={'next'} />
        <BtnSlider moveSlide={prevSlide} direction={'prev'} />
      </div>

      <div className={style.containerDots}>
        <div className={style.dots}>
          {slides.map((item, index) => (
            <div
              key={item.id}
              onClick={() => moveDot(index + 1)}
              className={cn(style.dot, {[style.active] : slideIndex === index + 1 })}></div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Slider;
