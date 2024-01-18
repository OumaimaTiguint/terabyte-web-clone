import './App.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { Home, AboutUs } from './pages';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';
import { FaLinkedin, FaInstagram, FaFacebook, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import { socialsData } from './data/socialsData';
import { BackToTop } from './components';
import ScrollToTop from './utils/ScrollToTop';

function App() {
	const [isBurgerMenuOpen, setBurgerMenuOpen] = useState(false);
	const links = [
		{ id: 0, name: 'Home', path: '/' },
		{ id: 1, name: 'About us', path: '/about-us' },
		{ id: 2, name: 'Services', path: '/services' },
		{ id: 3, name: 'Umbraco', path: '/umbraco' },
		{ id: 4, name: 'Offers', path: '/offers' },
		{ id: 5, name: 'Contact' , path: '/contact' },
	];

  	const toggleBurgerMenu = () => {
    	setBurgerMenuOpen(!isBurgerMenuOpen);
  	};

	return (
		<BrowserRouter>
			<header className="w-full flex justify-between items-center sm:px-8 px-4 py-4 fixed top-0 left-0 h-16 md:h-32 animate-fade-in-down z-50">
        		<Link to="/" className='shrink-0'>
          			<img src="https://terabyte-web.com/img/terabyte-web-logo.webp" 
               			 alt="logo" 
               			 className="h-10 md:h-16 shrink-0" />
        		</Link>
        		<div className="md:hidden">
          			{isBurgerMenuOpen ? (
            			<FaTimes onClick={toggleBurgerMenu} className="text-white cursor-pointer" />
          			) : (
            			<FaBars onClick={toggleBurgerMenu} className="text-white cursor-pointer" />
          			)}
        		</div>
        		<div className={`md:flex ${isBurgerMenuOpen ? 'flex-col mt-4' : 'hidden'}`}>
          			{links.map(e => (
            			<Link to={e.path} 
                  			  key={e.id}
                  			  className={`font-inter font-medium ${e.id === 5 ? 'bg-[#0284c7]' : ''} text-white px-4 py-2 rounded-md mb-2`}>
              				{e.name}
            			</Link>
          			))}
        		</div>
      		</header>

			<main className="sm:py-32 sm:px-16 px-4 py-16 w-full bg-blue-950 min-h-screen">
				<ScrollToTop />
				<Routes>
					<Route path="/" element={ <Home />} />
					<Route path="/about-us" element={ <AboutUs />} />
				</Routes>
				<BackToTop />
			</main>

			<footer className="w-fullrelative bg-blue-950 text-white">
    			<div className="container-xxl">
        			<div className="py-3">
            			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                			<div className="col-span-1 md:col-span-2 lg:col-span-1 py-5">
                    			<div className="flex flex-col px-3 md:w-80 mx-auto">
									<div className="mb-3">
                        				<strong>Reach Us</strong>
                    				</div>
									<div className="flex mb-3">
											<FaMapMarkerAlt className="inline-block mr-2" />
										<p>
											Terabyte Web<br/>
											Business Centre BH2<br/>
											Av. Hassan II n° 6,<br/>
											12 Kenitra, Morocco
										</p>
									</div>
									<div className="flex mb-3">
										<FaPhone className="inline-block mr-2" />
										<p>
											Denmark: +45 65 74 04 08<br/>
											Morocco: +212 7 07 19 03 17
										</p>
									</div>
									<div className="flex mb-3">
										<FaEnvelope className="inline-block mr-2" />
										<p>
											info@terabyte-web.com
										</p>
									</div>
								</div>
                			</div>
                			<div className="col-span-1 md:col-span-1 lg:col-span-1">
                    			<ul className="list-unstyled footer-menu py-5">
                        			<li className="mb-3">
                            			<strong>Menu</strong>
                        			</li>
                        			<li>
                            			<a href="/">Home</a>
                        			</li>
                        			<li>
                            			<a href="/services">Services</a>
                        			</li>
                    			</ul>
                			</div>
                			<div className="col-span-1 md:col-span-1 lg:col-span-1">
                    			<ul className="list-unstyled footer-menu py-5">
                        			<li className="mb-3">
                            			<strong>Info</strong>
                        			</li>
                        			<li>
                            			<a href="/about-us">About us</a>
                        			</li>
                        			<li>
                            			<a href="/contact">Contact</a>
                        			</li>
                        			<li>
                            			<a href="/jobs">Jobs</a>
                        			</li>
                    			</ul>
                			</div>
                			<div className="col-span-1 lg:col-span-1 py-5">
                    			<div className="mb-3 text-center">
                        			<strong>Our Social Media</strong>
                    			</div>
                    			<div className="lcl-content w-full flex items-center justify-center">
                        			{socialsData.linkedIn && (
                            			<a href={socialsData.linkedIn} target="_blank" rel="noreferrer">
                                			<FaLinkedin className='text-3xl mx-4 transform transition-transform hover:scale-125' aria-label="LinkedIn" />
                            			</a>
                        			)}
                        			{socialsData.instagram && (
                            			<a href={socialsData.instagram} target="_blank" rel="noreferrer">
                                			<FaInstagram className='text-3xl mx-4 transform transition-transform hover:scale-125' aria-label="Instagram" />
                            			</a>
                        			)}
									{socialsData.facebook && (
                            		<a href={socialsData.facebook} target="_blank" rel="noreferrer">
                                		<FaFacebook className='text-3xl mx-4 transform transition-transform hover:scale-125' aria-label="Facebook" />
                            		</a>
                        			)}
                    			</div>
                			</div>
            			</div>
        			</div>
    			</div>

    			<div id="copyright">
        			<div className="container-fluid">
            			&copy; Copyrights reserved 2023 Terabyte.
        			</div>
    			</div>
			</footer>

		</BrowserRouter>
  )
}

export default App
