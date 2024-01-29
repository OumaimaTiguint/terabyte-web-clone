import './App.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { Home, AboutUs, Services, Umbraco, Offers, Offer1, Offer2 } from './pages';
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
		{ id: 5, name: 'Contact' , path: '#contact' },
	];

  	const toggleBurgerMenu = () => {
    	setBurgerMenuOpen(!isBurgerMenuOpen);
  	};

	return (
		<BrowserRouter>
			<header className="fixed w-full flex items-center justify-between  bg-transparent min-[880px]:px-16 px-8 py-10 z-50 h-32 animate-fade-in-down fixed-top">
        		<Link to="/" className='shrink-0'>
          			<img src="https://terabyte-web.com/img/terabyte-web-logo.webp" 
               			 alt="logo" 
               			 className="h-10 shrink-0" />
        		</Link>
        		<div className="md:hidden z-10">
          			{isBurgerMenuOpen ? (
            			<FaTimes onClick={toggleBurgerMenu} className="cursor-pointer" />
          			) : (
            			<FaBars onClick={toggleBurgerMenu} className="cursor-pointer" />
          			)}
        		</div>
				{isBurgerMenuOpen ? (
					<div className="absolute top-0 right-0 bottom-0 h-full sm:w-[50vw] w-[70vw] min-[880px]:hidden justify-end">
						<div className="space-y-7 flex flex-col left-0 top-0 w-full h-screen p-7 pb-2 pt-28 items-end justify-start text-center text-base font-medium bg-gradient-to-l from-[#0B2359] from-10% to-transparent">
							{links.map(e => (
								<Link to={e.path} 
									key={e.id}
									className='flex items-center text-sm font-medium px-4 py-2 rounded-full mb-2'>
									{e.name}
								</Link>
							))}
						</div>
				  	</div>
				): (
					<div className={`md:flex ${isBurgerMenuOpen ? 'flex-col mt-4' : 'hidden'}`}>
						{links.map(e => (
							<Link to={e.path} 
								key={e.id}
								className={`flex items-center text-sm font-medium ${e.id === 5 ? 'bg-[#0284c7]' : ''} px-4 py-2 rounded-full mb-2`}>
								{e.name}
							</Link>
						))}
        			</div>
				)}
      		</header>

			<main className="relative overflow-hidden sm:py-32 py-16 w-full min-h-screen">
				<ScrollToTop />
				<Routes>
					<Route path="/" element={ <Home />} />
					<Route path="/about-us" element={ <AboutUs />} />
					<Route path="/services" element={ <Services />} />
					<Route path="/umbraco" element={ <Umbraco />} />
					<Route path="/offers" element={ <Offers />} />
					<Route path="/offers/offer-1" element={ <Offer1 />} />
					<Route path="/offers/offer-2" element={ <Offer2 />} />
				</Routes>
				<BackToTop />
			</main>

			<footer className="w-full relative px-4">
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
