import { useContext } from 'react';
import ShipContext from 'components/ShipContext';
import { Typography } from '@mui/material';

export default function ExspansionBays() {
	const { shipDetails } = useContext(ShipContext);
	const { expansionBays } = { ...shipDetails };

	return (
		<div>
			<p>Expansion Bays</p>
			{/* Probably a text area */}
			<Typography>{expansionBays}</Typography>
		</div>
	);
}
