import React from 'react';
import './Facts.css';
// import { IMAGES } from '/src/assets/assets.js';
function Facts() {
	return (
		<section className='facts'>
			<div className='facts__content container'>
				<div className='facts__points'>
					<div className='facts__points-point'>
						{/* <img src={IMAGES.LOGO} alt='box' /> */}
						<div className='facts__description'>
							<p className='facts__description-title'>Free Shapping</p>
							<p className='facts__description-about'>
								No charge for each delivery
							</p>
						</div>
					</div>
					<div className='facts__points-point'>
						<img src='/src/images/icons/cashIcon.svg' alt='cash' />
						<div className='facts__description'>
							<p className='facts__description-title'>Quick Payment</p>
							<p className='facts__description-about'>100% secure payment</p>
						</div>
					</div>
					<div className='facts__points-point'>
						<img src='/src/images/icons/supportIcon.svg' alt='support' />
						<div className='facts__description'>
							<p className='facts__description-title'>24/7 Support</p>
							<p className='facts__description-about'>Quick support</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Facts;
