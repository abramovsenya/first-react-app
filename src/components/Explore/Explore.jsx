import './Explore.css';
function Explore() {
	return (
		<section className='explore'>
			<div className='explore__content container'>
				<div className='explore__content-text'>
					<h2 className='explore__title'>Explore Our Product</h2>
					<p className='explore__about'>
						We are a store with a long history, everyone can find something for
						themselves here
					</p>
				</div>
				<div className='explore__products'>
					<div className='explore__products-snekears'>
						<div className='explore__products-snekears-skate'>
							<a href='#' className='link'>
								<img
									className='explore__products-main'
									src='/src/images/img/exploreAnta.png'
									alt='photo'
								/>
								<img
									className='explore__products-vector'
									src='/src/images/icons/Arrow 4.svg'
									alt='img'
								/>
								<p className='explore__products-price'>$120</p>
								<p className='explore__products-name'>Anta Skates</p>
							</a>
						</div>
						<div className='explore__products-snekears-skate'>
							<a href='#' className='link'>
								<img
									className='explore__products-main'
									src='/src/images/img/exploreAnta.png'
									alt='photo'
								/>
								<img
									className='explore__products-vector'
									src='/src/images/icons/Arrow 4.svg'
									alt='img'
								/>
								<p className='explore__products-price'>$120</p>
								<p className='explore__products-name'>Anta Skates</p>
							</a>
						</div>
					</div>
					<div className='explore__products-socks'>
						<a href=''>
							<img
								className='explore__products-main'
								src='/src/images/img/product.png'
								alt='photo'
							/>
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
export default Explore;
