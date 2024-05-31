import React, { useState } from 'react';
import '../styles/main.css';
import { MdArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import { slides } from '../assets/slides';
import { imgfiles } from '../assets/imgfiles';

const Main = ({clicked}) => {

    const [ slide, setSlide ] = useState(0);

    

    const nextSlide = () => {
        setSlide(slide === slides.length-1 ? 0 : slide + 1);
    };

    const prevSlide = () => {
        setSlide(slide === 0 ? slides.length-1 : slide - 1);
    };
    
  return (
    <div className='imgMainDiv'>
        <div className='carouselDiv'>
            {
                slides.map((el, idx) => (                  
                    <img key={idx} src={el.src} alt={el.alt} className={slide === idx ? "slide" : "slide slide-hidden"}/>
                ))
            }
        </div> 

        <div className='imgSectionDiv'>
            <div className='imgCardSection'>
            <MdArrowBackIosNew onClick={prevSlide} className='arrowBackIcon'/>
                {
                    imgfiles.map(({src, src1, src2, src3, alt}, idx) => (
                        <div key={idx} className='imgCardDiv'>
                            <div>
                            <h3>Appliances for your home</h3>
                            </div>

                            <div className='imgCard'>
                            <div>
                                <img src={src} alt={alt} />
                                <p>Air conditioners</p>
                            </div>
                            <div>
                                <img src={src1} alt={alt} />
                                <p>Machines</p>
                            </div>
                            <div>
                                <img src={src2} alt={alt} />
                                <p>Fans</p>
                            </div>
                            <div>
                                <img src={src3} alt={alt} />
                                <p>Electronics</p>
                            </div>
                            </div>
                        </div>
                    ))
                }
                <MdArrowForwardIos onClick={nextSlide} className='arrowForwardIcon'/>
            </div>
        </div>
    </div>
  )
}

export default Main;
