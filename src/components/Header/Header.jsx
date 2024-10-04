import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
	return (
		<div className='header'>
			<nav className='nav'>
				<ul className='nav__list'>
					<li>
						<Link className='nav__list-el' to='/'>
							About
						</Link>
					</li>
					<li>
						<Link className='nav__list-el' to='/shop'>
							Shop
						</Link>{' '}
						{/* Замените href на to */}
					</li>
					<li>
						<Link className='nav__list-el' to='#'>
							Contact
						</Link>
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
