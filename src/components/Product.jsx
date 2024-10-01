import '/src/components/Products/Products.css';
function Product(props) {
	const { img, title, oldPrice, newPrice } = props;
	return (
		<div className='products__product'>
			<img src={img} alt='sneakers' />
			<p className='products__product-name'>{title}</p>
			<div className='products__product-prices'>
				<p className='products__product-prices-old'>{oldPrice}</p>
				<p className='products__product-prices-new'>{newPrice}</p>
			</div>
		</div>
	);
}

export default Product;
