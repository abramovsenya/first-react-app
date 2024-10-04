import React, { useEffect, useState } from 'react';
import { ProductCard } from './product-card';

async function getProducts() {
	const uri = 'https://fakestoreapi.com/products';
	const response = await fetch(uri);
	const products = await response.json();
	return products;
}

function Catalog() {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		getProducts().then(data => {
			setProducts(data);
		});
	}, []);

	const handleSubmit = async event => {
		event.preventDefault();
		const formData = new FormData(event.target);
		const newProduct = {
			title: formData.get('title'),
			price: parseFloat(formData.get('price')),
			image: formData.get('image'),
		};

		const response = await fetch('https://fakestoreapi.com/products', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(newProduct),
		});

		if (response.ok) {
			const addedProduct = await response.json();
			setProducts(prevProducts => [...prevProducts, addedProduct]);
		}
	};

	const handleDelete = async id => {
		// Удаляем продукт из API (если поддерживается)
		await fetch(`https://fakestoreapi.com/products/${id}`, {
			method: 'DELETE',
		});

		// Обновляем локальное состояние
		setProducts(prevProducts =>
			prevProducts.filter(product => product.id !== id)
		);
	};

	const handleEdit = product => {
		// Замените этот код на логику редактирования
		console.log('Редактировать продукт:', product);
		// Можно также создать форму редактирования.
	};

	return (
		<article>
			<h1>Товары</h1>

			<section>
				<h2>Добавление записи</h2>
				<form id='product-add-form' onSubmit={handleSubmit}>
					<label>
						Наименование:
						<input name='title' required />
					</label>

					<label>
						Цена:
						<input min='0.01' name='price' required step='0.01' type='number' />
					</label>

					<label>
						Ссылка на изображение:
						<input name='image' required type='url' />
					</label>

					<button type='submit'>Сохранить</button>
				</form>
			</section>

			<section>
				<h2>Витрина</h2>
				<div id='catalog'>
					{products.length > 0 ? (
						products.map(product => (
							<ProductCard
								key={product.id}
								product={product}
								onDelete={handleDelete}
								onEdit={handleEdit}
							/>
						))
					) : (
						<p>Загрузка товаров...</p>
					)}
				</div>
			</section>
		</article>
	);
}

export default Catalog;
