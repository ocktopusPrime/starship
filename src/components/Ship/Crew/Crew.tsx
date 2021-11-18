import { useContext } from 'react';
import ShipContext from 'components/ShipContext';
import { Typography } from '@mui/material';

import '../Info/ShipInfo.scss';

export default function Crew() {
	const { shipDetails, setShipDetails } = useContext(ShipContext);
	const { crew } = { ...shipDetails };

	// this would be cool if we could say which weapon someone was on so that
	// it could relate them to the weapon's position and visually show it.

	const handleUpdate = (event: React.ChangeEvent<HTMLInputElement>) => {
		const attribute = event.target.name;
		const value = event.target.value;
		setShipDetails({ ...shipDetails, crew: { ...shipDetails.crew, [attribute]: value } });
	};

	return (
		<div id='crew'>
			Crew Positions
			{Object.entries(crew).map(([attribute, value]) => (
				<div className='crew-positions'>
					<Typography>{attribute}:</Typography>
					<input
						type='text'
						name={attribute}
						value={value}
						placeholder='EMPTY'
						onChange={handleUpdate}
					/>
				</div>
			))}
		</div>
	);
}
