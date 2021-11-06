import { useMemo, useState } from 'react';
import './App.scss';
import StarShip from './components/Ship/StarShip';
import { ShipContext } from './components/ShipContext';

function App() {
	const [shipDetails, setShipDetails] = useState('this is a ship');

	const value = useMemo(() => ({ shipDetails, setShipDetails }), [shipDetails, setShipDetails]);

	return (
		<div className='App'>
			<header className='App-header'>
				<ShipContext.Provider value={value}>
					<StarShip ship={undefined} />
				</ShipContext.Provider>
			</header>
		</div>
	);
}

export default App;
