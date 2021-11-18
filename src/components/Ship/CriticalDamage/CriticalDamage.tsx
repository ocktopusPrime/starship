import { Tooltip, Typography } from '@mui/material';
import ShipContext from 'components/ShipContext';
import { useContext } from 'react';

export function titleCase(str: string) {
	return str.replace(/\w\S*/g, function (txt) {
		return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
	});
}

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
			{criticalDamage.map((system) => (
				<div className='critical-system'>
					<Tooltip title={system.effect}>
						<Typography>{titleCase(system.name)}</Typography>
					</Tooltip>
					<Typography variant='subtitle2'>
						{system.startRange}-{system.endRange}
					</Typography>
					{/* get the status component from the weapons */}
					<Typography>{system.status}</Typography>
				</div>
			))}
		</div>
	);
}
