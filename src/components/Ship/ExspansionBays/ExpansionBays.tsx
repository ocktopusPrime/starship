import { useContext } from 'react';
import ShipContext from 'components/ShipContext';
import { Typography } from '@mui/material';

export default function ExspansionBays() {
	const { shipDetails } = useContext(ShipContext);
	const { expansionBays } = { ...shipDetails };

	// List of items
	return (
		<div>
			<p>Expansion Bays</p>
			<Typography>{expansionBays}</Typography>
		</div>
	);
}
