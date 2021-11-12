import ShipContext from 'components/ShipContext';
import { useContext } from 'react';
import { Typography } from '@mui/material';
import './ShipInfo.scss';

export default function ShipInfo() {
	const { shipDetails, setShipDetails } = useContext(ShipContext);
	const { info } = { ...shipDetails };

	const handleUpdate = (event: React.ChangeEvent<HTMLInputElement>) => {
		const attribute = event.target.name;
		const value = event.target.value;
		setShipDetails({ ...shipDetails, info: { ...shipDetails.info, [attribute]: value } });
	};

	return (
		<div id='ship-info'>
			Ship Info
			{info &&
				Object.entries(info).map(([attribute, value]) => (
					<div className='info-text'>
						<Typography>{attribute}:</Typography>
						<input
							type='text'
							name={attribute}
							defaultValue={value}
							placeholder='N/A'
							onChange={handleUpdate}
						/>
					</div>
				))}
		</div>
	);
}
