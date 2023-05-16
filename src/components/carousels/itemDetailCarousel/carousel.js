import React, {useState} from 'react';
import {GrFormNext, GrFormPrevious} from "react-icons/all";
import styles from './carousel.module.css'


const ImageSlider = ({ slides }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };
    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };
    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };

    return (
        <div className={styles.sliderStyles}>
            <div>
                <div onClick={goToPrevious} className={`${styles.leftArrowStyles} ${styles.arrow}`}>
                    <GrFormPrevious/>
                </div>
                <div onClick={goToNext} className={`${styles.rightArrowStyles} ${styles.arrow}`}>
                    <GrFormNext className={styles.arrow_color}/>
                </div>
            </div>
            <div className={styles.slideStylesWidthBackground} style={{backgroundImage: `url(${slides[currentIndex].url})`}}></div>
            <div className={styles.dotsContainerStyles}>
                {slides.map((slide, slideIndex) => (
                    <div
                        className={`${styles.dotStyle} ${slideIndex === currentIndex && styles.activeDot}`}
                        key={slideIndex}
                        onClick={() => goToSlide(slideIndex)}
                    >
                        ●
                    </div>
                ))}
            </div>
        </div>
    );
};
export default ImageSlider;

