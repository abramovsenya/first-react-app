import './Products.css';
import { CardItem } from '/src/assets/assets.js'; // Корректный импорт массива
import Product from '/src/components/Product.jsx'; // Корректный импорт компонента
import '/src/components/Products/Products.css';

function Products() {
	console.log(CardItem); // Выводим CardItem в консоль перед использованием

	return (
		<section className='products'>
			<div className='products__content container'>
				<div className='products__content-upper'>
					<div className='products__content-about'>
						<p className='products__about'>Catalog</p>
						<h2 className='products__title'>
							Our most popular product category
						</h2>
					</div>

					<div className='products__list'>
						<div className='products__list-category'>
							<a href='#' className='products__list-category-btn'>
								All
							</a>
							<a href='#' className='products__list-category-btn'>
								Sneakers
							</a>
							<a href='#' className='products__list-category-btn'>
								Socks
							</a>
							<a href='#' className='products__list-category-btn'>
								Other
							</a>
						</div>
					</div>
				</div>

				<div className='products__items'>
					{CardItem.map(item => (
						<Product
							key={item.id}
							img={item.img}
							title={item.title}
							oldPrice={item.oldPrice}
							newPrice={item.newPrice}
						/>
					))}
				</div>

				<a href='#' className='products__btn'>
					MORE PRODUCTS
				</a>
			</div>
		</section>
	);
}

export default Products;
