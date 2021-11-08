import { useMemo, useState } from 'react';
import ShipManagement from 'components/ShipManagement/ShipManagement';
import Starship from './components/Ship/Starship';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { ShipContext } from './components/ShipContext';
import Ship, { tempShip } from 'components/Ship/Ship';
import './App.scss';

export default function App() {
	const [selectedShip, setSelectedShip] = useState('');
	const [shipList, setShipList] = useState([tempShip]);
	const [shipDetails, setShipDetails] = useState<Ship | undefined>(tempShip);
	const value = useMemo(() => ({ shipDetails, setShipDetails }), [shipDetails, setShipDetails]);

	return (
		<Router>
			<nav>
				<ul>
					<li>
						<Link to='/'>Home</Link>
					</li>
					<li>
						<Link to={`/starship/${tempShip.id}`}>Starship</Link>
					</li>
				</ul>
			</nav>
			<div className='App'>
				<ShipContext.Provider value={value}>
					<Routes>
						<Route path='/' element={<ShipManagement shipList={shipList} />} />
						<Route path='/starship/:id' element={<Starship />} />
					</Routes>
				</ShipContext.Provider>
			</div>
		</Router>
	);
}
