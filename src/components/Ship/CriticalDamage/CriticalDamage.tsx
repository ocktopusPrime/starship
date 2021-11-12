import { Tooltip, Typography } from '@mui/material';
import ShipContext from 'components/ShipContext';
import { useContext } from 'react';

export default function CriticalDamage() {
	const { shipDetails } = useContext(ShipContext);
	const { criticalDamage } = { ...shipDetails };

	// add the ability to toggle buttons/graphics to update the status for each system
	// create tooltips for each of the system status types

	return (
		<div
			id='critical-damage'
			style={{ display: 'flex', justifyContent: 'space-between', width: '600px' }}
		>
			Critical Systems
			{criticalDamage.map((system) => (
				<div className='critical-system'>
					<Tooltip title={system.effect}>
						<Typography>{system.name}</Typography>
					</Tooltip>
					<Typography>
						{system.startRange}-{system.endRange}
					</Typography>
					<Typography>status: {system.status}</Typography>
				</div>
			))}
		</div>
	);
}
