import React, { useState } from 'react';
import { ContactUs } from '../components';

const Offer2 = () => {
    const [loading, setLoading] = useState(false);

    return (
        <div className='relative overflow-hidden'>
            <div className='md:w-[80%] mx-auto flex justify-center p-3 sm:pt-[-50%] bg-transparent bg-cover bg-top'>
                <div className='max-w-screen-2xl w-full p-5 pb-28 mt-40 flex-col justify-center items-start gap-[25px] inline-flex element-to-fade-to-top fade-in-top'>
                    <div className='relative w-full flex justify-center mt-9 z-10'>
                        <img src="https://terabyte-web.com/img/Offers/offer%202.png" 
                             alt="" 
                             width="100%" 
                             className="hidden md:block" />
                        <img src="https://terabyte-web.com/img/Offers/offer-2-mobile.png" 
                             alt="" 
                             width="100%" 
                             className="block md:hidden" />
                    </div>
                    <h2 className="text-white text-[39px] 2xl:text-[50px] font-extrabold font-['inter'] leading-[50px]">
                        Free Umbraco Website Service (Maintenance/ Redesign)
                    </h2>
                    <p className="max-w-screen-2xl opacity-80 text-justify text-white text-base 2xl:leading-[2rem] 2xl:text-lg font-medium font-['Inter']">
                        Terabyte Web understands the importance of ongoing website maintenance to ensure your online presence remains
                        secure, up-to-date, and performing at its peak. With our Free Umbraco Website Maintenance campaign, we provide
                        Danish businesses with comprehensive maintenance services to keep their Umbraco websites running smoothly and
                        error-free.
                    </p>
                </div>
            </div>
            <div className='container mx-auto md:w-[80%]'>
                <div className='items-start px-6 mx-auto space-y-0 md:space-y-0 md:items-center element-to-fade-to-top fade-in-top'>
                    <div className='w-full mb-16 space-y-12'>
                        <h1 className='w-[100%] text-3xl font-bold text-white text-start 2xl:text-[50px] 2xl:leading-[4rem]'>
                            What's Included in Our Free Umbraco Website Maintenance Offer?
                        </h1>
                        <p className='text-start text-white md:w-[100%] 2xl:leading-[2rem] 2xl:text-lg'>
                            Our comprehensive free Umbraco website maintenance package encompasses the following services:
                        </p>
                        <ul className='text-white w-[100%] 2xl:leading-[2rem] 2xl:text-lg'>
                            <li>
                                <span className='text-blue-300 font-semibold'>Security Updates:</span>
                                    We'll apply the latest security patches and updates to your Umbraco website, 
                                    safeguarding it from potential vulnerabilities and cyberattacks.
                            </li>
                            <br />
                            <li>
                                <span className='text-blue-300 font-semibold'>Umbraco Core Updates:</span>
                                    We'll keep your Umbraco CMS up to date with the latest core releases,
                                    ensuring compatibility with new features, plugins, and themes.
                            </li>
                            <br />
                            <li>
                                <span className='text-blue-300 font-semibold'>Plugin and Theme Updates:</span>
                                    We'll manage and update all plugins and themes on your Umbraco website 
                                    to maintain optimal performance and compatibility.
                            </li>
                            <br />
                            <li>
                                <span className='text-blue-300 font-semibold'>Performance Optimization:</span>
                                    We'll regularly monitor and optimize your Umbraco website's performance,
                                    ensuring fast loading times and a seamless user experience.
                            </li>
                            <br />
                            <li>
                                <span className='text-blue-300 font-semibold'>Bug Fixes and Troubleshooting:</span>
                                    We'll promptly address any bugs or technical issues that arise on your Umbraco website, 
                                    maintaining its functionality and stability.
                            </li>
                            <br />
                            <li>
                                <span className='text-blue-300 font-semibold'>Free Feature Implementation:</span>
                                    In addition to our comprehensive maintenance services, we'll also implement one new feature on your Umbraco website at no cost.
                                    This could include adding a new page, integrating a new plugin, or customizing a specific functionality to better suit your business needs.
                            </li>
                            <br />
                        </ul>
                        <br />
                        <span className='font-bold'>
                            <span className='text-blue-300 font-semibold'>NB:</span>
                            Get One Free Feature Implementation of up to 40 Hours and Free Maintenance.
                        </span>
                    </div>
                </div>
            </div>
            <div className='container mx-auto mt-[5%] md:w-[80%]'>
                <div className='items-start px-6 mx-auto space-y-0 md:space-y-0 md:items-center element-to-fade-to-top fade-in-top'>
                    <div className='w-full mb-16 space-y-12'>
                        <h1 className='w-[100%] text-3xl font-bold text-white text-start 2xl:text-[50px] 2xl:leading-[4rem]'>
                            The offer provides Danish businesses with the following benefits:
                        </h1>
                        <ul className='text-white w-[100%]'>
                            <li>
                                <span className='text-blue-300 font-semibold'>Peace of Mind:</span>
                                With our expert care, you can rest assured that your Umbraco website is in safe hands, allowing you to focus on your core business operations.
                            </li>
                            <br />
                            <li>
                                <span className='text-blue-300 font-semibold'>Enhanced Cost Savings:</span>
                                Our complimentary maintenance services eliminate the need for in-house maintenance resources,
                                saving you money on staffing and training.
                            </li>
                            <br />
                            <li>
                                <span className='text-blue-300 font-semibold'>Enhanced Website Performance:</span>
                                Regular maintenance ensures your Umbraco website remains secure,
                                up-to-date, and performing at its best, optimizing your online presence and digital marketing efforts.
                            </li>
                            <br />
                            <li>
                                <span className='text-blue-300 font-semibold'>Eligibility:</span>
                                To be eligible for our Free Umbraco Website Maintenance offer,
                                your business must be in Denmark and have an existing Umbraco website.
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
                            Take advantage of our limited-time offer and experience the benefits of expert Umbraco website maintenance at no cost.
                        </p>
                    </div>
                </div>
            </div>
            <ContactUs />
        </div>
    )
}

export default Offer2;