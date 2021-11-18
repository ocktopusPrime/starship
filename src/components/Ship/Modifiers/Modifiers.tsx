import { Typography } from '@mui/material';
import ShipContext from 'components/ShipContext';
import { useContext } from 'react';
import './Modifiers.scss';

export default function Modifiers() {
	const { shipDetails } = useContext(ShipContext);
	const { modifiers } = { ...shipDetails };

	// possibility to add a modifier to the sheet
	return (
		<div id='modifiers'>
			{modifiers &&
				modifiers.map((modifier) => (
					<div className='modifier'>
						<Typography variant='h4'>{modifier.value}</Typography>
						<Typography variant='subtitle2'>{modifier.skill}</Typography>
					</div>
				))}
		</div>
	);
}
