import './Footer.css';
function Footer() {
	return (
		<footer className='footer'>
			<div className='footer__content container'>
				<div className='footer__left'>
					<form className='subscribe-form'>
						<input
							type='email'
							className='subscribe-form__input'
							placeholder='Yourmail@mail.com'
						/>
						<button className='btn--subscribe'>
							<img src='/src/images/icons/send.svg' alt='#' />
						</button>
					</form>
					<ul className='footer__list'>
						<li className='footer__list-item'>
							<a href='#'>
								<img src='/src/images/icons/insta.svg' alt='insta' />
							</a>
						</li>
						<li className='footer__list-item'>
							<a href='#'>
								<img src='/src/images/icons/twitter.svg' alt='insta' />
							</a>
						</li>
						<li className='footer__list-item'>
							<a href='#'>
								<img src='/src/images/icons/youtube.svg' alt='insta' />
							</a>
						</li>
						<li className='footer__list-item'>
							<a href='#'>
								<img src='/src/images/icons/ball.svg' alt='insta' />
							</a>
						</li>
					</ul>
				</div>
				<ul className='footer__list-company'>
					<li className='footer__list-company-item'>
						<a className='footer__list-company-item' href='#'>
							Company
						</a>
					</li>
					<li className='footer__list-company-item'>
						<a className='footer__list-company-item' href='#'>
							About us
						</a>
					</li>
					<li className='footer__list-company-item'>
						<a className='footer__list-company-item' href='#'>
							Blog
						</a>
					</li>
					<li className='footer__list-company-item'>
						<a className='footer__list-company-item' href='#'>
							Contact us
						</a>
					</li>
					<li className='footer__list-company-item'>
						<a className='footer__list-company-item' href='#'>
							Pricing
						</a>
					</li>
					<li className='footer__list-company-item'>
						<a className='footer__list-company-item' href='#'>
							Testimonials
						</a>
					</li>
				</ul>
				<ul className='footer__list-support'>
					<li className='footer__list-support-item'>
						<a className='footer__list-support-item' href='#'>
							Support
						</a>
					</li>
					<li className='footer__list-support-item'>
						<a className='footer__list-support-item' href='#'>
							Help center
						</a>
					</li>
					<li className='footer__list-support-item'>
						<a className='footer__list-support-item' href='#'>
							Terms of service
						</a>
					</li>
					<li className='footer__list-support-item'>
						<a className='footer__list-support-item' href='#'>
							Legal
						</a>
					</li>
					<li className='footer__list-support-item'>
						<a className='footer__list-support-item' href='#'>
							Privacy policy
						</a>
					</li>
					<li className='footer__list-support-item'>
						<a className='footer__list-support-item' href='#'>
							Status
						</a>
					</li>
				</ul>
			</div>
		</footer>
	);
}
export default Footer;
