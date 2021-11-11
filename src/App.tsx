import { useMemo, useState } from 'react';
import ShipManagement from 'components/ShipManagement/ShipManagement';
import Starship from './components/Ship/Starship';
import Ship, { tempShip } from 'components/Ship/Ship';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ShipContext, { IShipContext } from './components/ShipContext';
import './App.scss';

export default function App() {
	// const [selectedShip, setSelectedShip] = useState('1');
	const [shipList, setShipList] = useState([tempShip]);
	const [shipDetails, setShipDetails] = useState<Ship>(tempShip);
	const value: IShipContext = useMemo(
		() => ({ shipDetails, setShipDetails }),
		[shipDetails, setShipDetails]
	);

	return (
		<Router>
			<nav>
				<ul>
					<li>
						<Link to='/'>Home</Link>
					</li>
					<li>
						<Link to={`/starship`}>Starship</Link>
					</li>
				</ul>
			</nav>
			<div className='App'>
				<ShipContext.Provider value={value}>
					<Routes>
						<Route path='/' element={<ShipManagement shipList={shipList} />} />
						<Route path='/starship' element={<Starship />} />
					</Routes>
				</ShipContext.Provider>
			</div>
		</Router>
	);
}
