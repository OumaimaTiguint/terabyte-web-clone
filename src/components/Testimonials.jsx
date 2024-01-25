import React, { useRef, useState} from 'react';
import Slider from 'react-slick';
import { testimonialsData } from '../data/testimonialsData';
import TestimonialCard from './TestimonialCard';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Testimonials = () => {
    const sliderRef = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [totalSlides, setTotalSlides] = useState(testimonialsData.length);
    const [visibleSlides, setVisibleSlides] = useState(1);


    const updateTotalSlides = (slideCount) => {
        setTotalSlides(slideCount);
    };

    const updateVisibleSlides = () => {
        if (sliderRef.current) {
          setVisibleSlides(sliderRef.current.props.slickVisible);
        }
    };

    const CustomNextArrow = () => (
        <div className={`next tes-prev-btn tes-controller-btn ${currentSlide === totalSlides - 1 ? 'tes_edge' : ''}`}
             onClick={() => {
                sliderRef.current.slickNext();
                updateVisibleSlides();
              }}>
            <img className="rotate-180 w-6 active"
                 src="https://terabyte-web.com/img/home/tes/arrow.svg"
                 alt="arrow-img"
                 width="16"
                 height="16" />
        </div>
    );

    const CustomPrevArrow = () => (
        <div className={`prev tes-prev-btn tes-controller-btn ${currentSlide === 0 ? 'tes_edge' : ''}`}
             onClick={() => {
                sliderRef.current.slickPrev();
                updateVisibleSlides();
              }}>
            <img className="w-6 active"
                 src="https://terabyte-web.com/img/home/tes/arrow.svg"
                 alt="arrow-img"
                 width="16"
                 height="16" />
        </div>
    );

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToScroll: 1,
        arrows: false, // Hide default arrows
        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomPrevArrow />,
        afterChange: (current) => setCurrentSlide(current),
        beforeChange: (_, next) => {
            updateTotalSlides(next + 1);
            updateVisibleSlides();
        },      
        responsive: [
            {
                breakpoint: 9999,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                    centerPadding: "0"
                },
            },
        ],
    };

    return (
        <div className='relative min-h-[100vh] mt-20 pb-28'>
            <div className='relative w-full max-w-screen-2xl'>
                <img src="/assets/testimonials.svg" 
                     alt="testimonials" 
                     width="100%" 
                     height="100%" />
            </div>
            <div className='sm:px-16 px-4 mt-32 relative w-full flex flex-col xs:flex-row xs:justify-between justify-center items-center mb-6 min-[600px]:px-0 gap-y-2'>
                <h2 className='sm:text-4xl xs:text-2xl text-xl font-semibold'>
                    What Our Customers Say
                </h2>
                <h3 className="bg-none"></h3>
                <div className='flex gap-2'>
                    <CustomPrevArrow />
                    <CustomNextArrow />
                </div>
            </div>
            <Slider ref={sliderRef} {...settings}
                    className={`sm:px-16 px-4 testimonial-slider ${totalSlides === 1 ? 'single-slide' : ''}`}>
                {testimonialsData.map((tes, index) => (
                    <TestimonialCard key={index}
                                     id={index}
                                     name={tes.name}
                                     role={tes.role}
                                     company={tes.company}
                                     picture={tes.picture}
                                     message={tes.message}
                                     rating={tes.rating} />
                ))}
            </Slider>

            <div className='absolute w-full top-0 z-[-1]'>
                <div className='absolute top-0 w-full flex justify-center'>
                    <img src="https://terabyte-web.com/img/home/tes/teraweb-dark_0.webp" 
                         className="blur-[4px]" 
                         alt="teraweb-dark_0" 
                         width="1366" 
                         height="1528" />
                    <div className='absolute -bottom-[10px] w-full h-[1048px] origin-top-left bg-gradient-to-t from-[#0B2359] to-transparent from-35%'></div>
                </div>
                <div className='absolute top-0 w-full h-[1048px] origin-top-left bg-gradient-to-b from-[#0B2359] to-transparent'></div>
            </div>
        </div>
    );
};

export default Testimonials;
