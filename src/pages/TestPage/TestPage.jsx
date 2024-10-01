import Facts from '/src/components/Facts/Facts';
import Header from '/src/components/Header/Header';
import Products from '/src/components/Products/Products';
import Promo from '/src/components/Promo/Promo';
import '/src/styles/App.css';

function App() {
	return (
		<>
			<Header />
			<Promo />
			<Facts />
			<Products />
		</>
	);
}

export default App;
