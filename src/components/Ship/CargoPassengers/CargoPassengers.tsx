import { useContext } from 'react';
import ShipContext from 'components/ShipContext';
import { Typography } from '@mui/material';

export default function CargoPassengers() {
	const { shipDetails } = useContext(ShipContext);
	const { cargoPassengers } = { ...shipDetails };

	return (
		<div>
			<p>Cargo Passengers</p>
			{/* Probably a text area */}
			<Typography>{cargoPassengers}</Typography>
		</div>
	);
}
