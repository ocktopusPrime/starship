import { Tooltip, Typography } from '@mui/material';
import ShipContext from 'components/ShipContext';
import { useContext } from 'react';
import { getToolTip } from '../Weapons/Weapons';
import './CriticalDamage.scss';

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
					<Tooltip enterDelay={700} title={system.effect}>
						<Typography variant='subtitle2'>{titleCase(system.name)}</Typography>
					</Tooltip>
					<Typography variant='subtitle2'>
						{system.startRange}-{system.endRange}
					</Typography>
					{/* get the status component from the weapons */}
					<Tooltip enterDelay={700} title={getToolTip(system.status)}>
						<Typography className={`status ${system.status}`}>
							{system.status[0].toUpperCase()}
						</Typography>
					</Tooltip>
				</div>
			))}
		</div>
	);
}
