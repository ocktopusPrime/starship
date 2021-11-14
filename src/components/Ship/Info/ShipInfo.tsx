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

	const getSubObjects = (value: string) => {
		return Object.entries(value).map(([att, val]) => (
			<div className='info-text'>
				<Typography>{att}:</Typography>
				{typeof val !== 'object' && (
					<input
						type='text'
						name={att}
						defaultValue={val}
						placeholder='N/A'
						onChange={handleUpdate}
					/>
				)}
				{typeof val === 'object' && getSubObjects(val)}
			</div>
		));
	};

	return (
		<div id='ship-info'>
			Ship Info
			{info &&
				Object.entries(info).map(([attribute, value]) => {
					return (
						<div className='info-text'>
							<Typography>{attribute}:</Typography>
							{typeof value !== 'object' && (
								<input
									type='text'
									name={attribute}
									defaultValue={value}
									placeholder='N/A'
									onChange={handleUpdate}
								/>
							)}
							{typeof value === 'object' && getSubObjects(value)}
						</div>
					);
				})}
		</div>
	);
}
