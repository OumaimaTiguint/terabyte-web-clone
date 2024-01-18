import './App.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { Home, AboutUs } from './pages';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';

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

			<main className="sm:p-8 px-4 py-8 w-full bg-blue-900 min-h-screen">
				<Routes>
					<Route path="/" element={ <Home />} />
					<Route path="/about-us" element={ <AboutUs />} />
				</Routes>
			</main>
		</BrowserRouter>
  )
}

export default App
