import React, {useState} from 'react';
import axios from 'axios';
import isEmail from 'validator/lib/isEmail';

const ContactUs = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setphoneNumber] = useState('');
    const [company, setCompany] = useState('');
    const [message, setMessage] = useState('');

    const handleContactForm = (e) => {
        e.preventDefault();

        if (name && email && phoneNumber && company && message) {
            if (isEmail(email)) {
                const responseData = {
                    name: name,
                    email: email,
                    phoneNumber: phoneNumber,
                    company: company,
                    message: message,
                };

                axios.post("https://formspree.io/f/xdorplew", responseData).then((res) => {
                    console.log('success');

                    setName('');
                    setEmail('');
                    setphoneNumber('');
                    setCompany('');
                    setMessage('');
                });
            } else {
                setErrMsg('Invalid email');
            }
        } else {
            setErrMsg('Enter all the fields');
        }
    };

    return (
        <div id='contact' className='relative pb-28 flex flex-col justify-center items-center'>
            <div className='relative w-full max-w-screen-2xl'>
                <img src="https://terabyte-web.com/img/home/contact/contact_us.svg" 
                     alt="contact_us"
                     width="100%" 
                     height="100%" 
                     className="active" />
            </div>
            <div className='w-full flex items-center justify-center px-5 z-10'>
                <div className='max-w-[75.5rem] w-full h-full px-6 py-[6rem] bg-tera-container-to-tl border-[1px] rounded-[44px] border-white border-opacity-10 justify-start items-center flex mt-20 element-to-fade-to-top fade-in-top'>
                    <form className='w-full' onSubmit={handleContactForm}>
                        <div className='max-w-[75.5rem] w-full h-full flex-col sm:justify-start justify-center items-center inline-flex'>
                            <div>
                                <h2 className='text-center md:text-5xl sm:text-4xl xs:text-3xl text-2xl font-bold'>
                                    Let’s talk about your project
                                </h2>
                            </div>
                            <div className='max-w-[47.5rem] sm:w-full flex justify-between sm:flex-row flex-col px-8 gap-5 mt-8'>
                                <div className='flex sm:flex-col flex-row justify-start items-center text-center gap-3 m-2'>
                                    <img src="https://terabyte-web.com/img/home/contact/mail.svg" 
                                         alt="mail-img" 
                                         width="64" 
                                         height="63" />
                                    <a href="mailto:Info@terabyte-web.com" 
                                       className="text-start sm:text-center text-sm font-medium leading-[18.90px]">
                                        Info@terabyte-web.com
                                    </a>
                                </div>
                                <div className='flex sm:flex-col flex-row justify-start items-center text-center gap-3 m-2'>
                                    <img src="https://terabyte-web.com/img/home/contact/phone.svg" 
                                         alt="phone-img" 
                                         width="64" 
                                         height="63" />
                                    <p className='text-start sm:text-center text-sm font-medium leading-[18.90px]'>
                                        Denmark: 
                                        <a href="tel:+4565740408">+45 65 74 04 08</a>
                                        <br/>
                                        Morocco:
                                        <a href="tel:+212707190317">+212 7 07 19 03 17</a>
                                    </p>
                                </div>
                                <div className='flex sm:flex-col flex-row justify-start items-center text-center gap-3 m-2'>
                                    <img src="https://terabyte-web.com/img/home/contact/flag.svg" 
                                         alt="phone-img" 
                                         width="64" 
                                         height="63" />
                                    <p className='text-start sm:text-center text-sm font-medium leading-[18.90px]'>
                                        Business Center <br/> 
                                        BH2Av. Hassan II n° 6,<br/>
                                        12 Kenitra, Morocco
                                    </p>
                                </div>
                            </div>
                            <div className='flex w-full max-w-[47.5rem] flex-col gap-7 mt-24 mx-5'>
                                <div className='relative w-full flex flex-col min-[686px]:flex-row gap-7'>
                                    <input className='w-full h-[60px] border-[1px] placeholder-white border-white bg-transparent py-3 px-6'
                                           name='name'
                                           type='text'
                                           placeholder='Your name*'
                                           value={name}
                                           onChange={(e) => setName(e.target.value)} />
                                    <input className='w-full h-[60px] border-[1px] placeholder-white border-white bg-transparent py-3 px-6'
                                           name='email'
                                           type='text'
                                           placeholder='Email*'
                                           value={email}
                                           onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                <div className='flex flex-col min-[686px]:flex-row gap-7'>
                                    <input className='w-full h-[60px] border-[1px] placeholder-white border-white bg-transparent py-3 px-6'
                                           name='phoneNumber'
                                           type='number'
                                           placeholder='Phone Number*'
                                           value={phoneNumber}
                                           onChange={(e) => setphoneNumber(e.target.value)} />
                                    <input className='w-full h-[60px] border-[1px] placeholder-white border-white bg-transparent py-3 px-6'
                                           name='company'
                                           type='text'
                                           placeholder='Company*'
                                           value={company}
                                           onChange={(e) => setCompany(e.target.value)} />
                                </div>
                                <textarea className='border-[1px] placeholder-white border-white bg-transparent py-3 px-6'
                                          rows={5}
                                          name='message'
                                          placeholder='Your Message*'
                                          value={message}
                                          onChange={(e) => setMessage(e.target.value)} />
                                <div className='relative flex justify-center items-center mt-10'>
                                    <input type='submit'
                                           name='Submit'
                                           value='Submit'
                                           className='absolute py-3 px-6 bg-white bg-opacity-20 rounded-3xl flex items-center justify-center text-sm font-bold shining-btn'/>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className='absolute bottom-0 right-0'>
                <img src="https://terabyte-web.com/img/background_svg/gradient_2.svg" 
                     width="1366" 
                     height="1545" 
                     alt="gradient_2" />
            </div>
        </div>
    );
};

export default ContactUs;