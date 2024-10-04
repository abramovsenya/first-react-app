import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Explore from '../components/Explore/Explore';
import Footer from '../components/Footer/Footer';
import Gallery from '../components/Gallery/Gallery';
import Map from '../components/Map/Map';
import Us from '../components/Us/Us';
import Shop from './Shop';
import Facts from '/src/components/Facts/Facts';
import Header from '/src/components/Header/Header';
import Products from '/src/components/Products/Products';
import Promo from '/src/components/Promo/Promo';
import '/src/styles/App.css';

function App() {
	return (
		<Router>
			<>
				<Header />
				<Routes>
					{/* Главная страница */}
					<Route
						path='/'
						element={
							<>
								<Promo />
								<Facts />
								<Products />
								<Gallery />
								<Explore />
								<Us />
								<Map />
							</>
						}
					/>
					{/* Страница магазина */}
					<Route path='/shop' element={<Shop />} />
				</Routes>
				<Footer />
			</>
		</Router>
	);
}

export default App;
