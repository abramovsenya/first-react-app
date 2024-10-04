import './Us.css';
function Us() {
	return (
		<section className='us'>
			<div className='us__content container'>
				<div className='us__content-upper'>
					<img src='/src/images/img/nigger.png' alt='nigger' />
					<div className='us__content-text'>
						<h3 className='us__content-text-title'>Why choose Us?</h3>
						<p className='us__content-text-about'>
							We are trusted by great artists who are always satisfied with the
							quality of products and service
						</p>
						<a className='us__content-text-btn' href='#'>
							Read more
						</a>
					</div>
				</div>
				<div className='us__list'>
					<div className='us__list-puncts'>
						<p className='us__list-puncts-name'>Service Repiar</p>
						<p className='us__list-puncts-about'>
							We provide free shoe repair in which case, it is absolutely free
							and will be repaired in the near future.
						</p>
					</div>
					<div className='us__list-puncts'>
						<p className='us__list-puncts-name'>Sneakers Accessories</p>
						<p className='us__list-puncts-about'>
							We also have a large selection of shoe accessories such as
							shoelaces .
						</p>
					</div>
					<div className='us__list-puncts'>
						<p className='us__list-puncts-name'>Warraty & Guarantee</p>
						<p className='us__list-puncts-about'>
							The warranty is valid for one year after purchase, we monitor the
							loyalty of our customers
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Us;
