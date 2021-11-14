import { useContext } from 'react';
import ShipContext from 'components/ShipContext';
import { Typography } from '@mui/material';

export default function Systems() {
	const { shipDetails } = useContext(ShipContext);
	const { systems } = { ...shipDetails };

	// List of items
	return (
		<div>
			<p>Systems</p>
			<Typography>{systems}</Typography>
		</div>
	);
}
