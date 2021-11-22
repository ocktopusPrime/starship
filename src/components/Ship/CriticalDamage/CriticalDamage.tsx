import { Tooltip, Typography } from '@mui/material';
import ShipContext from 'components/ShipContext';
import { useContext } from 'react';
import SystemStatus from '../Status/SystemStatus';
import './CriticalDamage.scss';

export function titleCase(str: string) {
	return str.replace(/\w\S*/g, function (txt) {
		return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
	});
}

export default function CriticalDamage() {
	const { shipDetails } = useContext(ShipContext);
	const { criticalDamage } = { ...shipDetails };

	return (
		<div id='critical-damage'>
			{criticalDamage.map((system) => (
				<div className='critical-system'>
					<SystemStatus currentStatus={system.status} currentSystem={system.name} />
					<Tooltip enterDelay={700} title={system.effect}>
						<div>
							<Typography variant='subtitle2'>
								{system.startRange}-{system.endRange}
							</Typography>
							<Typography variant='subtitle2'>
								{titleCase(system.name)}
							</Typography>
						</div>
					</Tooltip>
				</div>
			))}
		</div>
	);
}
