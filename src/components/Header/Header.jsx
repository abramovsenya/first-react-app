import React from 'react';
import './Header.css';
// import { ICONS } from '/src/assets/assets.js';

function Header() {
	return (
		<div className='header'>
			<nav className='nav'>
				<ul className='nav__list'>
					<li>
						<a className='nav__list-el' href='#'>
							About
						</a>
					</li>
					<li>
						<a className='nav__list-el' href='#'>
							Shop
						</a>
					</li>
					<li>
						<a className='nav__list-el' href='#'>
							Contact
						</a>
					</li>
				</ul>
				<ul className='nav__login'>
					<li>
						<a href='#!'>
							<img src='/src/images/icons/Search.svg' alt='Search' />
						</a>
					</li>
					<li>
						<a href='#!'>
							<img src='/src/images/icons/Bag.svg' alt='Bag' />
						</a>
					</li>
					<li>
						<a href='#!'>
							<img src='/src/images/icons/User.svg' alt='user' />
						</a>
					</li>
				</ul>
			</nav>
		</div>
	);
}

export default Header;
