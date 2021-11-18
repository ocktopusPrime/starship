import { useContext } from 'react';
import ShipContext from 'components/ShipContext';
import { Typography } from '@mui/material';

export default function Systems() {
	const { shipDetails } = useContext(ShipContext);
	const { systems } = { ...shipDetails };

	return (
		<div>
			<p>Systems</p>
			{/* Probably a text area */}
			<Typography>{systems}</Typography>
		</div>
	);
}
