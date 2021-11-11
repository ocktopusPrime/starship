import { useContext } from 'react';
import ShipContext from 'components/ShipContext';
import { Typography } from '@mui/material';

export default function CrewPositions() {
	const { shipDetails } = useContext(ShipContext);
	const { crew } = shipDetails;

	const normalizeValue = (value: string[]) => {
		let str = '';
		value.forEach((crewMember) => (str = `${str} ${crewMember}`));
		return str;
	};
	return (
		<div id='crew-positions'>
			{Object.entries(crew).map(([k, v]) => {
				const parsedValue = normalizeValue(v);
				return (
					<div className='crew'>
						<Typography>{k}:</Typography>
						<input type='text' name={k} value={parsedValue} placeholder='EMPTY' />
					</div>
				);
			})}
		</div>
	);
}
