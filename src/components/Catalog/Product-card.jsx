import React from 'react';

function ProductCard({ product, onDelete, onEdit }) {
	return (
		<article id={`product-${product.id}`}>
			<h1>{product.title}</h1>
			<img src={product.image} alt={product.title} style={{ width: '150px' }} />

			<button onClick={() => onDelete(product.id)}>Удалить</button>
			<button onClick={() => onEdit(product)}>Редактировать</button>
		</article>
	);
}

export { ProductCard };
