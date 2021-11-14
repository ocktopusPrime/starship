import { useContext } from 'react';
import ShipContext from 'components/ShipContext';
import { Typography } from '@mui/material';

export default function CargoPassengers() {
	const { shipDetails } = useContext(ShipContext);
	const { cargoPassengers } = { ...shipDetails };

	// List of items
	return (
		<div>
			<p>Cargo Passengers</p>
			<Typography>{cargoPassengers}</Typography>
		</div>
	);
}
