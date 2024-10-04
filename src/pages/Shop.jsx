import React from 'react';
import Catalog from '../components/Catalog/Catalog';
import Products from '../components/Products/Products';
import Promo from '/src/components/Promo/Promo';

function Shop() {
	return (
		<>
			<Promo />
			<Products />
			<Catalog />
		</>
	);
}

export default Shop;
