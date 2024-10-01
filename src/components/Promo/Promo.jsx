import React from 'react';
import './Promo.css';

function Promo() {
	return (
		<section className='promo'>
			<div className='promo__content container'>
				<p className='promo__description'>Сreate a style, create yourself</p>
				<h1 className='promo__title'>SNEAKERS</h1>
				<a className='promo__btn' href='#'>
					SHOP NOW
				</a>
			</div>
		</section>
	);
}

export default Promo;
