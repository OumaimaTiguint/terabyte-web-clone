import React, { useState } from 'react';
import { ContactUs } from '../components';

const Offer1 = () => {
    const [loading, setLoading] = useState(false);

    return (
        <div className='relative overflow-hidden'>
            <div className='md:w-[80%] mx-auto flex justify-center p-3 sm:pt-[-50%] bg-transparent bg-cover bg-top'>
                <div className='max-w-screen-2xl w-full p-5 pb-28 mt-40 flex-col justify-center items-start gap-[25px] inline-flex element-to-fade-to-top fade-in-top'>
                    <div className='relative w-full flex justify-center mt-9 z-10'>
                        <img src="https://terabyte-web.com/img/Offers/offer%201%201.png" 
                             alt="" 
                             width="100%" 
                             className="hidden md:block" />
                        <img src="https://terabyte-web.com/img/Offers/offer-1-mobile.png" 
                             alt="" 
                             width="100%" 
                             className="block md:hidden" />
                    </div>
                    <h2 className="text-white text-[39px] 2xl:text-[50px] font-extrabold font-['inter'] leading-[50px]">
                        Free Umbraco Website Design and Development
                    </h2>
                    <p className="max-w-screen-2xl opacity-80 text-justify text-white text-base 2xl:leading-[2rem] 2xl:text-lg font-medium font-['Inter']">
                        Terabyte Web is thrilled to offer Danish companies the opportunity to experience the power of Umbraco CMS with
                        our exclusive Free Umbraco Website Design and Development campaign. Through this initiative, we aim to empower
                        Danish businesses to establish or enhance their online presence with a high-performing, user-friendly website
                        built on the robust Umbraco platform.
                    </p>
                </div>
            </div>
            <div className='container mx-auto md:w-[80%]'>
                <div className='items-start px-6 mx-auto space-y-0 md:space-y-0 md:items-center element-to-fade-to-top fade-in-top'>
                    <div className='w-full mb-16 space-y-12'>
                        <h1 className='w-[100%] text-3xl font-bold text-white text-start 2xl:text-[50px] 2xl:leading-[4rem]'>
                            What's Included in Our Free Umbraco Website Offer?
                        </h1>
                        <p className='text-start text-white md:w-[100%] 2xl:leading-[2rem] 2xl:text-lg'>
                            Our comprehensive free Umbraco
                            website package encompasses the
                            following services:
                        </p>
                        <ul className='text-white w-[100%] 2xl:leading-[2rem] 2xl:text-lg'>
                            <li>
                                <span className='text-blue-300 font-semibold'>Custom Umbraco Website Design:</span>
                                Our experienced designers will create a visually appealing and brand-aligned website that resonates with your target audience.
                            </li>
                            <br />
                            <li>
                                <span className='text-blue-300 font-semibold'>Umbraco Development and Implementation:</span>
                                Our skilled developers will seamlessly integrate Umbraco into your website, ensuring a smooth and efficient user experience.
                            </li>
                            <br />
                            <li>
                                <span className='text-blue-300 font-semibold'>Responsive Design:</span>
                                Your website will be optimized for all devices, ensuring seamless accessibility across desktops, tablets, and smartphones.
                            </li>
                            <br />
                            <li>
                                <span className='text-blue-300 font-semibold'>Content Management Training:</span>
                                We'll provide comprehensive training to your team, empowering them to easily manage and update your Umbraco website.
                            </li>
                            <br />
                        </ul>
                    </div>
                </div>
            </div>
            <div className='container mx-auto mt-[5%] md:w-[80%]'>
                <div className='items-start px-6 mx-auto space-y-0 md:space-y-0 md:items-center element-to-fade-to-top fade-in-top'>
                    <div className='w-full mb-16 space-y-12'>
                        <h1 className='w-[100%] text-3xl font-bold text-white text-start 2xl:text-[50px] 2xl:leading-[4rem]'>
                            Who Can Benefit from Our Free Umbraco Website Offer?
                        </h1>
                        <p className='text-start text-white md:w-[100%]'>
                            Our free Umbraco website offer is ideal for Danish companies seeking to:
                        </p>
                        <ul className='text-white w-[100%]'>
                            <li>
                                <span className='text-blue-300 font-semibold'>Establish a strong online presence:</span>
                                Create a professional, engaging website that attracts new customers and strengthens brand recognition.
                            </li>
                            <br />
                            <li>
                                <span className='text-blue-300 font-semibold'>Enhance their existing website:</span>
                                Upgrade their outdated website to a modern, user-friendly platform that delivers a superior user experience.
                            </li>
                            <br />
                            <li>
                                <span className='text-blue-300 font-semibold'>Responsive Design:</span>
                                Your website will be optimized for all devices, ensuring seamless accessibility across desktops, tablets, and smartphones.
                            </li>
                            <br />
                            <li>
                                <span className='text-blue-300 font-semibold'>Content Management Training:</span>
                                We'll provide comprehensive training to your team, empowering them to easily manage and update your Umbraco website.
                            </li>
                            <br />
                        </ul>
                    </div>
                </div>
            </div>
            <div className='container mx-auto mt-[5%] w-[80%]'>
                <div className='items-start px-6 mx-auto space-y-0 md:space-y-0 md:items-center element-to-fade-to-top fade-in-top'>
                    <div className='w-full mb-32 space-y-12'>
                        <h1 className='w-[100%] text-3xl font-bold text-white text-start 2xl:text-[50px] 2xl:leading-[4rem]'>
                            Limited Spots Available !
                        </h1>
                        <p className='text-start text-white md:w-[100%] 2xl:leading-[2rem] 2xl:text-lg'>
                            This exclusive offer is available
                            for a limited time only. Apply
                            now to secure your spot and elevate your online presence with a free Umbraco website.
                        </p>
                    </div>
                </div>
            </div>
            <ContactUs />
        </div>
    )
}

export default Offer1;