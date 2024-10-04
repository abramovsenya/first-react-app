import './Gallery.css';
function Gallery() {
	return (
		<section className='gallery'>
			<div className='gallery__content container'>
				<div className='gallery__content-left'>
					<h2 className='gallery__title'>Our Gallery</h2>
					<img src='/src/images/img/airforce.png' alt='photo' />
				</div>
				<div className='gallery__content-right'>
					<img src='/src/images/img/jordan.png' alt='photo' />
					<img
						className='gallery__content-right-down'
						src='/src/images/img/adiki.png'
						alt='photo'
					/>
				</div>
			</div>
		</section>
	);
}

export default Gallery;
